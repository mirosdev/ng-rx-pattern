import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../../store';
import {PizzaModel} from '../../../shared/models/pizza.model';
import {ToppingModel} from '../../../shared/models/topping.model';

@Component({
  selector: 'app-page-2-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'page-2-container.component.html',
  styleUrls: ['page-2-container.component.css']
})
export class Page2ContainerComponent {
  constructor(private store: Store<fromStore.ProductsState>) {}

  onCreate() {
    const toppings: ToppingModel[] = [
      {
        id: 1,
        name: 'anchovy'
      },
      {
        id: 8,
        name: 'onion'
      },
    ];
    const newPizza: PizzaModel = {
      id: Math.round(Math.random() * 10), // ??
      toppings,
      name: 'Seaside Surfin\' New One'
    };
    this.store.dispatch(new fromStore.CreatePizza(newPizza));
  }

  onUpdate() {
    const toppings: ToppingModel[] = [
      {
        id: 10,
        name: 'pepperoni'
      },
      {
        id: 8,
        name: 'onion'
      }
    ];
    const pizza: PizzaModel = {
      id: 3,
      name: 'Plain Ol\' Pepperoni',
      toppings
    };
    this.store.dispatch(new fromStore.UpdatePizza(pizza));
  }

  onRemove() {
    const toppings: ToppingModel[] = [
      {
        id: 1,
        name: 'anchovy'
      },
      {
        id: 2,
        name: 'bacon'
      },
      {
        id: 3,
        name: 'basil'
      },
      {
        id: 4,
        name: 'chili'
      }
    ];
    const pizza: PizzaModel = {
      id: 1,
      name: 'Blazin\' Inferno',
      toppings
    };
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store.dispatch(new fromStore.RemovePizza(pizza));
    }
  }
}
