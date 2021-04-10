import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
    // private alert: AlertController
  )
  {
    
  }

  ngOnInit() {
  }

  // async selAlert()
  // {
  //   const alert = await this.alert.create({
  //     header: "Parcelas"
  //   });

  //   await alert.present();
  // }

}
