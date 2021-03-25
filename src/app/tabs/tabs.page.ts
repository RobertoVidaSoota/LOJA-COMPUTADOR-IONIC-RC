import { Component, ViewChild } from '@angular/core';
import { IonTabButton, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild("tab", {static: false}) tab: IonTabs
  selected: boolean;

  constructor() {}

  // tgTab()
  // {
  //   let sel = this.tab.getSelected()
  //   console.log(sel)
  // }

  tbClick()
  {
    setTimeout(() => {
      let sel = this.tab.getSelected()
      console.log(sel)
    }, 100)
    
  }
}
