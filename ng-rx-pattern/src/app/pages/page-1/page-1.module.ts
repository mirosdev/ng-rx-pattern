import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {Page1ContainerComponent} from './containers/page-1-container/page-1-container.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducers, effects} from '../../store';
import {EffectsModule} from '@ngrx/effects';
import {Page1RouteContainerComponent} from './containers/page-1-route-container/page-1-route-container.component';
import * as fromGuards from '../../store/guards';

export const ROUTES: Routes = [
  {path: '', canActivate: [fromGuards.PizzasGuard], component: Page1ContainerComponent},
  {path: ':pizzaId', canActivate: [fromGuards.PizzaExistsGuard, fromGuards.ToppingsGuard], component: Page1RouteContainerComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    Page1ContainerComponent,
    Page1RouteContainerComponent
  ],
  providers: [
    ...fromGuards.guards
  ]
})
export class Page1Module {
}
