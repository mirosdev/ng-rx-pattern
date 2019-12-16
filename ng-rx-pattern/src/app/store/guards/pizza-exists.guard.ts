import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap, map, filter, take, switchMap} from 'rxjs/operators';
import * as fromStore from '../../store';

import {PizzaModel} from '../../pages/shared/models/pizza.model';

@Injectable()
export class PizzaExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.checkStore()
      .pipe(
        switchMap(() => {
          const id = parseInt(route.params.pizzaId, 10);
          return this.hasPizza(id);
        })
      );
  }

  hasPizza(id: number): Observable<boolean> {
    return  this.store.select(fromStore.getPizzasEntities)
      .pipe(
        map((entities: {[key: number]: PizzaModel}) => !!entities[id]),
        take(1)
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded)
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadPizzas());
          }
        }),
        filter(loaded => loaded),
        take(1)
      );
  }
}
