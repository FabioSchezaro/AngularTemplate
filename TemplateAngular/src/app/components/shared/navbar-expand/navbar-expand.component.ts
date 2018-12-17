import { Component, OnInit } from '@angular/core';
import { Ui } from '../../../utils/ui';

@Component({
  selector: 'app-navbar-expand',
  templateUrl: './navbar-expand.component.html',
  providers: [Ui]
})
export class NavbarExpandComponent implements OnInit {


  clickCollapse : boolean;

  constructor(

    private ui: Ui

  ) { 

    this.clickCollapse = false;

  }

  ngOnInit() {
  }

  collapse(){

    if(this.clickCollapse)
    {
      this.ui.unActive("sidebar");
      this.clickCollapse = false;
    }
    else
    {
      this.ui.setActive("sidebar");
      this.clickCollapse = true;
    }

    
  }

}
