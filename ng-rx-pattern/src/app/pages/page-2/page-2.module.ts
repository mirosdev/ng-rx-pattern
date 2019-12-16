import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {Page2ContainerComponent} from './containers/page-2-container/page-2-container.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from '../../store/effects';
import * as fromGuards from '../../store/guards';

export const ROUTES: Routes = [
  { path: 'new', canActivate: [fromGuards.PizzasGuard, fromGuards.ToppingsGuard], component: Page2ContainerComponent }
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
    Page2ContainerComponent
  ],
  providers: [
    ...fromGuards.guards
  ]
})
export class Page2Module {
}
