import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformarDadosPage } from './informar-dados.page';

const routes: Routes = [
  {
    path: '',
    component: InformarDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformarDadosPageRoutingModule {}
