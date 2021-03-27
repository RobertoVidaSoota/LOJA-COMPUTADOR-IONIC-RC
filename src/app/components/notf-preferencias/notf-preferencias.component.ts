import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notf-preferencias',
  templateUrl: './notf-preferencias.component.html',
  styleUrls: ['./notf-preferencias.component.scss'],
})
export class NotfPreferenciasComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
