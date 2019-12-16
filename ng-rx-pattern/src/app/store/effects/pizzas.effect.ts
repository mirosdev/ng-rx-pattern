import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as fromRoot from '../../app-components/store';
import * as pizzaActions from '../actions/pizzas.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {SharedServiceService} from '../../pages/shared/services/shared-service.service';
import {of} from 'rxjs';

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private sharedService: SharedServiceService) {}

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => {
      return this.sharedService.getPizzas()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        );
    })
  );

  @Effect()
  createPizza$ = this.actions$
    .pipe(
      ofType(pizzaActions.CREATE_PIZZA),
      map((action: pizzaActions.CreatePizza) => action.payload),
      switchMap(pizza => {
        return this.sharedService.createPizza(pizza)
          .pipe(
            map(returnedPizza => new pizzaActions.CreatePizzaSuccess(returnedPizza)),
            catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
          );
      })
    );

  @Effect()
  createPizzaSuccess$ = this.actions$
    .pipe(
      ofType(pizzaActions.CREATE_PIZZA_SUCCESS),
      map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
      map(pizza => new fromRoot.Go({
        path: ['/page-1', pizza.id]
      }))
    );

  @Effect()
  updatePizza$ = this.actions$
    .pipe(
      ofType(pizzaActions.UPDATE_PIZZA),
      map((action: pizzaActions.UpdatePizza) => action.payload),
      switchMap((pizza) => {
        return this.sharedService.updatePizza(pizza)
          .pipe(
            map(updatedPizza => new pizzaActions.UpdatePizzaSuccess(updatedPizza)),
            catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
          );
      })
    );

  @Effect()
  removePizza$ = this.actions$
    .pipe(
      ofType(pizzaActions.REMOVE_PIZZA),
      map((action: pizzaActions.RemovePizza) => action.payload),
      switchMap(pizza => {
        return this.sharedService.removePizza(pizza)
          .pipe(
            map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
            catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
          );
      })
    );

  @Effect()
  handlePizzaSuccess$ = this.actions$
    .pipe(
      ofType(pizzaActions.UPDATE_PIZZA_SUCCESS, pizzaActions.REMOVE_PIZZA_SUCCESS),
      map(pizza => {
        return new fromRoot.Go({
          path: ['/page-1']
        });
      })
    );
}
