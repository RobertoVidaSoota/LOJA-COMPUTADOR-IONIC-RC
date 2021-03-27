import { Component } from '@angular/core';
import { IonBackdrop, ModalController } from '@ionic/angular';
import { MudarChaveComponent } from '../components/mudar-chave/mudar-chave.component';
import { MudarEmailComponent } from '../components/mudar-email/mudar-email.component';
import { MudarSenhaComponent } from '../components/mudar-senha/mudar-senha.component';
import { NotfFrequenciaComponent } from '../components/notf-frequencia/notf-frequencia.component';
import { NotfPreferenciasComponent } from '../components/notf-preferencias/notf-preferencias.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private modal: ModalController
  ) {}

  
  private async mudarEmail()
  {
    await this.modal.create({
      component: MudarEmailComponent,
      backdropDismiss: false
    }).then( (md) => {
      md.present();
    })
  }


  private async mudarSenha()
  {
    await this.modal.create({
      component: MudarSenhaComponent,
      backdropDismiss: false
    }).then( (md) => {
      md.present();
    })
  }


  private async mudarChave()
  {
    await this.modal.create({
      component: MudarChaveComponent,
      backdropDismiss: false
    }).then( (md) => {
      md.present()
    })
  }


  private async notfPreferencias()
  {
    await this.modal.create({
      component: NotfPreferenciasComponent,
      backdropDismiss: false
    }).then( (md) => {
      md.present()
    })
  }


  private async notffrequencia()
  {
    await this.modal.create({
      component: NotfFrequenciaComponent,
      backdropDismiss: false
    }).then( (md) => {
      md.present()
    })
  }

  // FUNÇÕES DE SUPORTE
  private async supAjuda()
  {
    
  }

}
