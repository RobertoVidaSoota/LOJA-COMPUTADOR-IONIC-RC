import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sup-termos',
  templateUrl: './sup-termos.component.html',
  styleUrls: ['./sup-termos.component.scss'],
})
export class SupTermosComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
