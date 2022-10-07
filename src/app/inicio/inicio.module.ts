import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MatTabsModule} from '@angular/material/tabs';
import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}

