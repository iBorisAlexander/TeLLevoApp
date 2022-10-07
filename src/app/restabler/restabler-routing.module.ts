import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestablerPage } from './restabler.page';

const routes: Routes = [
  {
    path: '',
    component: RestablerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestablerPageRoutingModule {}
