import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '../../../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PizzaModel} from '../../../shared/models/pizza.model';
import {ToppingModel} from '../../../shared/models/topping.model';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-page-1-route-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'page-1-route-container.component.html',
  styleUrls: ['page-1-route-container.component.css']
})
export class Page1RouteContainerComponent implements OnInit {
  pizza$: Observable<PizzaModel>;
  toppings$: Observable<ToppingModel[]>;
  visualise$: Observable<PizzaModel>;
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza)
      .pipe(
        tap((pizza: PizzaModel = null) => {
          const pizzaExists = !!(pizza && pizza.toppings);
          const toppings = pizzaExists ? pizza.toppings.map(topping => topping.id) : [];
          this.store.dispatch(new fromStore.VisualiseToppings(toppings));
        })
      );
    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualise$ = this.store.select(fromStore.getPizzaVisualised);
  }

  onSelect(toppingIds: number[]) {
    this.store.dispatch(new fromStore.VisualiseToppings(toppingIds));
  }
}
