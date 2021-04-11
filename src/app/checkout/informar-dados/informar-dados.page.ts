import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopPedidoComponent } from '../pop-pedido/pop-pedido.component';

@Component({
  selector: 'app-informar-dados',
  templateUrl: './informar-dados.page.html',
  styleUrls: ['./informar-dados.page.scss'],
})
export class InformarDadosPage implements OnInit {

  alert: any = {
    header: 'Parcelas',
    cssClass: "alerta"
  }

  constructor(
    private pop: PopoverController
  )
  {
    
  }

  ngOnInit() {
  }

  async abrirPopover()
  {
    const meuPop = await this.pop.create({
      component: PopPedidoComponent
    }).then((res) => {
      res.present();
    })
  }

}
