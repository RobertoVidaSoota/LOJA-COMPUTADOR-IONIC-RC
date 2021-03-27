import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sup-privacidade',
  templateUrl: './sup-privacidade.component.html',
  styleUrls: ['./sup-privacidade.component.scss'],
})
export class SupPrivacidadeComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
