import { Component, OnInit } from '@angular/core';

import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html'
})
export class NotificacaoComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor( notifierService: NotifierService ) {

    this.notifier = notifierService;

   }

  ngOnInit() {

  }


  sucesso(){

    this.notifier.notify( 'success', 'You are awesome! I mean it!' );

  }

  informacao(){

    this.notifier.notify( 'info', 'You are awesome! I mean it!' );

  }

  alerta(){

    this.notifier.notify( 'warning', 'You are awesome! I mean it!' );

  }

  erro(){

    this.notifier.notify( 'error', 'You are awesome! I mean it!' );

  }

  fechaAlerta(){

    //Apaga todas as notificações
    this.notifier.hideAll();

  }
 

  

}
