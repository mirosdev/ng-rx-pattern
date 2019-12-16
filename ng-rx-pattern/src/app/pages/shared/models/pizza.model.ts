import {ToppingModel} from './topping.model';

export interface PizzaModel {
  id?: number;
  name?: string;
  toppings?: ToppingModel[];
}
