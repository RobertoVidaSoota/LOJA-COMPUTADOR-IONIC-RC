import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabButton, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild("tab", {static: false}) tab: IonTabs
  selected: boolean;
  eventTb;

  constructor(
    private router: Router
  ) {}

  tgTab()
  {
    // let sel = this.tab.getSelected()
    // console.log(sel)
  }

  tbClick()
  {
    setTimeout(() => {

      let sel = this.tab.getSelected()
      if(sel == "tab1")
      {
        this.router.navigate(["/tabs/"+sel+"/inicio"])
      }
      else{
        this.router.navigate(["/tabs/"+sel])
      }
      
    }, 200)
    
  }
}
