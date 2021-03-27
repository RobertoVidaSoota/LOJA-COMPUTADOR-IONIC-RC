import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notf-frequencia',
  templateUrl: './notf-frequencia.component.html',
  styleUrls: ['./notf-frequencia.component.scss'],
})
export class NotfFrequenciaComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
