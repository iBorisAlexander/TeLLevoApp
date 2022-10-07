import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablerPageRoutingModule } from './restabler-routing.module';

import { RestablerPage } from './restabler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablerPageRoutingModule
  ],
  declarations: [RestablerPage]
})
export class RestablerPageModule {}
