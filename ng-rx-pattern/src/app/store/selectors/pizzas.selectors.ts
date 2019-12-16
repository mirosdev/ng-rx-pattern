import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromRoot from '../../app-components/store';
import * as fromToppings from './toppings.selectors';
import {PizzaModel} from '../../pages/shared/models/pizza.model';

export const getPizzaState = createSelector(fromFeature.getProductsState, (state: fromFeature.ProductsState) => state.pizzas);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzaEntities);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState, (entities, router): PizzaModel => {
    return router.state && entities[router.state.params.pizzaId];
  });

export const getPizzaVisualised = createSelector(getSelectedPizza,
  fromToppings.getToppingEntities,
  fromToppings.getSelectedToppings, (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return {
      ...pizza,
      toppings
    };
  });

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[id]);
});
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
export const getPizzasError = createSelector(getPizzaState, fromPizzas.getPizzasError);
