import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabComprasPageRoutingModule } from './tab-compras-routing.module';

import { TabComprasPage } from './tab-compras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabComprasPageRoutingModule
  ],
  declarations: [TabComprasPage]
})
export class TabComprasPageModule {}
