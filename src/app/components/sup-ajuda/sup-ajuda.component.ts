import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sup-ajuda',
  templateUrl: './sup-ajuda.component.html',
  styleUrls: ['./sup-ajuda.component.scss'],
})
export class SupAjudaComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
