import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformarDadosPageRoutingModule } from './informar-dados-routing.module';

import { InformarDadosPage } from './informar-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformarDadosPageRoutingModule
  ],
  declarations: [InformarDadosPage]
})
export class InformarDadosPageModule {}
