import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PescadoPageRoutingModule } from './pescado-routing.module';

import { PescadoPage } from './pescado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PescadoPageRoutingModule
  ],
  declarations: [PescadoPage]
})
export class PescadoPageModule {}
