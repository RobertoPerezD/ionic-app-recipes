import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnePageRoutingModule } from './carne-routing.module';

import { CarnePage } from './carne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnePageRoutingModule
  ],
  declarations: [CarnePage]
})
export class CarnePageModule {}
