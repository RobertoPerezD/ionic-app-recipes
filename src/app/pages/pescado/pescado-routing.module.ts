import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PescadoPage } from './pescado.page';

const routes: Routes = [
  {
    path: '',
    component: PescadoPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PescadoPageRoutingModule {}
