import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sup-feedback',
  templateUrl: './sup-feedback.component.html',
  styleUrls: ['./sup-feedback.component.scss'],
})
export class SupFeedbackComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  close()
  {
    this.modal.dismiss()
  }


}
