import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorScreenComponent } from './administrator-screen/administrator-screen.component';
import { Covid19ScreenComponent } from './covid19-screen/covid19-screen.component';
import { DeportesScreenComponent } from './deportes-screen/deportes-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InternacionalScreenComponent } from './internacional-screen/internacional-screen.component';
import { LoginRegisterScreenComponent } from './login-register-screen/login-register-screen.component';
import { NacionalScreenComponent } from './nacional-screen/nacional-screen.component';
import { NewNoticiaScreenComponent } from './new-noticia-screen/new-noticia-screen.component';
import { NoticiaScreenComponent } from './noticia-screen/noticia-screen.component';
import { ContactoScreenComponent } from './contacto-screen/contacto-screen.component';
import { ScreensComponent } from './screens.component';
import { AlterNoticiaScreenComponent } from './alter-noticia-screen/alter-noticia-screen.component';
import { PeriodistaScreenComponent } from './periodista-screen/periodista-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ScreensComponent,
    children: [
      {path: '', component: HomeScreenComponent},
      {path: 'inicio', component: HomeScreenComponent},
      {path: 'Inicio', component: HomeScreenComponent},
      {path: 'covid19', component: Covid19ScreenComponent},
      {path: 'Coronavirus', component: Covid19ScreenComponent},
      {path: 'nacional', component: NacionalScreenComponent},
      {path: 'Nacional', component: NacionalScreenComponent},
      {path: 'internacional', component: InternacionalScreenComponent},
      {path: 'Internacional', component: InternacionalScreenComponent},
      {path: 'deportes', component: DeportesScreenComponent},
      {path: 'Deportes', component: DeportesScreenComponent},
      {path: 'loginRegister', component: LoginRegisterScreenComponent},
      {path: 'noticia/:id', component: NoticiaScreenComponent},
      {path: 'newNoticia', component: NewNoticiaScreenComponent},
      {path: 'contacto', component: ContactoScreenComponent},
      {path: 'administrator', component: AdministratorScreenComponent},
      {path: 'alterNoticia/:id', component: AlterNoticiaScreenComponent},
      {path: 'periodista', component: PeriodistaScreenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
