import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from './shared/shared.module';

export const ROUTES: Routes = [
  { path: 'page-1', loadChildren: './page-1/page-1.module#Page1Module' },
  { path: 'page-2', loadChildren: './page-2/page-2.module#Page2Module' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class PagesModule {
}

