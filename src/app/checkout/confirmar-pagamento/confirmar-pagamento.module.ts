import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarPagamentoPageRoutingModule } from './confirmar-pagamento-routing.module';

import { ConfirmarPagamentoPage } from './confirmar-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPagamentoPageRoutingModule
  ],
  declarations: [ConfirmarPagamentoPage]
})
export class ConfirmarPagamentoPageModule {}
