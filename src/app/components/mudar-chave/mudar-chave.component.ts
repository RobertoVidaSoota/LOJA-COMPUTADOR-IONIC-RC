import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mudar-chave',
  templateUrl: './mudar-chave.component.html',
  styleUrls: ['./mudar-chave.component.scss'],
})
export class MudarChaveComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }

}
