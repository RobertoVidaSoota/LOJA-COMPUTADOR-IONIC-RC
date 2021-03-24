import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  opt = {
    freeMode: true,
    spaceBetween: 10,
    slidesPerView: 2.4
  }

  constructor() { }

  ngOnInit() {
  }

}
