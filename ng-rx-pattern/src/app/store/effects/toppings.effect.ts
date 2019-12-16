import {Injectable} from '@angular/core';

import * as toppingsActions from '../actions/toppings.action';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SharedServiceService} from '../../pages/shared/services/shared-service.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ToppingModel} from '../../pages/shared/models/topping.model';
import {of} from 'rxjs';


@Injectable()
export class ToppingsEffect {
  constructor(private actions$: Actions, private sharedService: SharedServiceService) {}

  @Effect()
  loadToppings$ = this.actions$
    .pipe(
      ofType(toppingsActions.LOAD_TOPPINGS),
      switchMap(() => {
        return this.sharedService.getToppings()
          .pipe(
            map((toppings: ToppingModel[]) => new toppingsActions.LoadToppingsSuccess(toppings)),
            catchError((error: any) => of(new toppingsActions.LoadToppingsFail(error)))
          );
      })
    );
}
