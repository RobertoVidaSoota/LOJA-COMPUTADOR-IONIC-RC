import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabComprasPage } from './tab-compras.page';

const routes: Routes = [
  {
    path: '',
    component: TabComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabComprasPageRoutingModule {}
