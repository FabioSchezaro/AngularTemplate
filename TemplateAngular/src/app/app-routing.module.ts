import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AlunoPageComponent } from './pages/aluno-page/aluno-page.component';
import { BlankPageComponent } from './functionalities/blank-page/blank-page.component';
import { NotificacaoComponent } from './functionalities/notificacao/notificacao.component';
import { TableComponent } from './functionalities/table/table.component';
import { DropDownComponent } from './functionalities/drop-down/drop-down.component';
import { LoginComponent } from './functionalities/login/login.component';
import { AccordionComponent } from './functionalities/accordion/accordion.component';
import { ModalComponent } from './functionalities/modal/modal.component';
import { MascaraComponent } from './functionalities/mascara/mascara.component';

const appRoutes: Routes = [

  {path: '', data:{breadcrumb:"Home"},  component: HomePageComponent},
  {path: 'home', data:{breadcrumb:"Sub Menu / Home"}, component: HomePageComponent},
  {path: 'aluno', data:{breadcrumb:"Sub Menu / Aluno"}, component: AlunoPageComponent},
  {path:'blank-page', data:{breadcrumb:"Funcionalidades / Página Em Branco"}, component: BlankPageComponent},
  {path:'notificacao', data:{breadcrumb:"Funcionalidades / Notificações"}, component: NotificacaoComponent},
  {path:'table', data:{breadcrumb:"Funcionalidades / Tabelas"}, component: TableComponent},
  {path:'drop-down', data:{breadcrumb:"Funcionalidades / Dropdown"}, component: DropDownComponent},
  {path:'login', data:{breadcrumb:"Funcionalidades / Login"}, component: LoginComponent},
  {path:'accordion', data:{breadcrumb:"Funcionalidades / Accordion"}, component: AccordionComponent},
  {path:'modal', data:{breadcrumb:"Funcionalidades / Modal"}, component: ModalComponent},
  {path:'mascara', data:{breadcrumb:"Funcionalidades / Máscara"}, component: MascaraComponent}

];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
