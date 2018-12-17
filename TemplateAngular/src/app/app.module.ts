import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelect2Module } from 'ng-select2';
import {NgbPaginationModule, NgbAlertModule,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

// bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';

//Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AlunoPageComponent } from './pages/aluno-page/aluno-page.component';

//Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { NavbarExpandComponent } from './components/shared/navbar-expand/navbar-expand.component';
import { UserComponent } from './components/shared/user/user.component';
import { BreadcrumbComponent } from './components/shared/breadcrumb/breadcrumb.component';


//Componentes
import {BreadcrumbsModule} from "ng6-breadcrumbs";
import { DataTablesModule } from 'angular-datatables';
import { NotifierModule, NotifierOptions } from 'angular-notifier';


//Funcionalidades
import { BlankPageComponent } from './functionalities/blank-page/blank-page.component';
import { NotificacaoComponent } from './functionalities/notificacao/notificacao.component';

import { TableComponent } from './functionalities/table/table.component';

//Services
import { CursoService } from './services/curso.service';
import { HttpModule } from '@angular/http';
import { DropDownComponent } from './functionalities/drop-down/drop-down.component';
import { LoginComponent } from './functionalities/login/login.component';
import { AccordionComponent } from './functionalities/accordion/accordion.component';
import { ModalComponent } from './functionalities/modal/modal.component';
import { MascaraComponent } from './functionalities/mascara/mascara.component';

/**
 * Custom angular notifier options configuração da notificação
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 12
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
//********************* */

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlunoPageComponent,
    HeadbarComponent,
    SubMenuComponent,
    NavbarExpandComponent,
    BlankPageComponent,
    UserComponent,
    BreadcrumbComponent,
    NotificacaoComponent,
    TableComponent,
    DropDownComponent,
    LoginComponent,
    AccordionComponent,
    ModalComponent,
    MascaraComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    CollapseModule,
    HttpModule,
    NgSelect2Module,
    NgbModule,
    FormsModule,
    BreadcrumbsModule,
    DataTablesModule,
    NgbPaginationModule,
    NgbAlertModule,
    TextMaskModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
