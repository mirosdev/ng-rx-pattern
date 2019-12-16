import * as fromToppings from '../actions/toppings.action';
import {ToppingModel} from '../../pages/shared/models/topping.model';

export interface ToppingsState {
  entities: {[id: number]: ToppingModel};
  loaded: boolean;
  loading: boolean;
  error: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  error: null,
  selectedToppings: []
};

export function reducer(state = initialState, action: fromToppings.ToppingsAction): ToppingsState {
  switch (action.type) {
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings
      };
    }

    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce((entitiez: {[id: number]: ToppingModel}, topping: ToppingModel) => {
        return {
          ...entitiez,
          [topping.id]: topping
        };
      }, {
        ...state.entities
      });

      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        entities
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }
  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsError = (state: ToppingsState) => state.error;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
