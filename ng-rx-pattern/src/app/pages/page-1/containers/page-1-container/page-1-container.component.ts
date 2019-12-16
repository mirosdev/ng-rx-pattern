import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as fromStore from '../../../../store';
import {Store} from '@ngrx/store';
import {PizzaModel} from '../../../shared/models/pizza.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-1-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'page-1-container.component.html',
  styleUrls: ['page-1-container.component.css']
})
export class Page1ContainerComponent implements OnInit {
  pizzas$: Observable<PizzaModel[]>;
  error$: Observable<any>;
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.error$ = this.store.select(fromStore.getPizzasError);
    // this.store.dispatch(new fromStore.LoadPizzas());
    // this.store.dispatch(new fromStore.LoadToppings());
  }

  dispatch() {
    this.store.dispatch(new fromStore.LoadPizzas());
  }
}
