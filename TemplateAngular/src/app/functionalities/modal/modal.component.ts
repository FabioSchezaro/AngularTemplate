import { Component, OnInit } from '@angular/core';
import { Ui } from 'src/app/utils/ui';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  providers: [Ui]
})
export class ModalComponent implements OnInit {

  public modalPeqTopVisible: boolean;
  public modalPeqCentrVisible: boolean;
  public modalLongoVisible: boolean;
  public modalLargoVisible: boolean;

  constructor(

    private ui: Ui

  ) {

    this.modalPeqTopVisible = false;
    this.modalPeqCentrVisible = false;
    this.modalLongoVisible = false;
    this.modalLargoVisible = false;


   }

  ngOnInit() {
  }


  showPequenoTopo(): void {

    this.ui.setShowModal("modalPeqTop");
    this.modalPeqTopVisible  = true;

  }

  hideModalPeqTop(): void{

    this.ui.setHideModal("modalPeqTop");
    this.modalPeqTopVisible = false;

  }

  
  showPequenoCentr(): void {

    this.ui.setShowModal("modalPeqCentr");
    this.modalPeqCentrVisible  = true;

  }

  hideModalPeqCentr(): void{

    this.ui.setHideModal("modalPeqCentr");
    this.modalPeqCentrVisible = false;

  }

  showLargo(): void {

    this.ui.setShowModal("modalLargo");
    this.modalLargoVisible  = true;

  }

  hideModalLargo(): void{

    this.ui.setHideModal("modalLargo");
    this.modalLargoVisible = false;

  }

  showLongo(): void {

    this.ui.setShowModal("modalLongo");
    this.modalLongoVisible  = true;

  }

  hideModalLongo(): void{

    this.ui.setHideModal("modalLongo");
    this.modalLongoVisible = false;

  }

}
