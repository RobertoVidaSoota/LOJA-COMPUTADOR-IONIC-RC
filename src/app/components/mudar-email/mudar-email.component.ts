import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mudar-email',
  templateUrl: './mudar-email.component.html',
  styleUrls: ['./mudar-email.component.scss'],
})
export class MudarEmailComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
