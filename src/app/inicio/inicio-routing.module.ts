import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapboxComponent } from '../components/mapbox/mapbox.component';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path:'mapbox',
    component:MapboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
