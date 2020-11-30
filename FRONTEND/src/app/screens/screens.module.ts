import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensRoutingModule } from './screens-routing.module';
import { ScreensComponent } from './screens.component';
import { AdministratorScreenComponent } from './administrator-screen/administrator-screen.component';
import { ComentariosScreenComponent } from './comentarios-screen/comentarios-screen.component';
import { ContactoScreenComponent } from './contacto-screen/contacto-screen.component';
import { Covid19ScreenComponent } from './covid19-screen/covid19-screen.component';
import { DeportesScreenComponent } from './deportes-screen/deportes-screen.component';
import { FooterScreenComponent } from './footer-screen/footer-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { InternacionalScreenComponent } from './internacional-screen/internacional-screen.component';
import { LoginRegisterScreenComponent } from './login-register-screen/login-register-screen.component';
import { NacionalScreenComponent } from './nacional-screen/nacional-screen.component';
import { NewNoticiaScreenComponent } from './new-noticia-screen/new-noticia-screen.component';
import { NoticiaScreenComponent } from './noticia-screen/noticia-screen.component';
import { ContactoListComponent } from '../components/contacto-list/contacto-list.component';
import { CoversorComponent } from '../components/coversor/coversor.component';
import { WeatherComponent } from '../components/weather/weather.component';
import { QualifierComponent } from '../components/qualifier/qualifier.component';
import { CategoryComponent } from '../components/category/category.component';
import { CardComponent } from '../components/card/card.component';
import { ClockDateComponent } from '../components/clock-date/clock-date.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactProviderService } from '../core/providers/contact/contact-provider.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NoticiaListComponent } from '../components/noticia-list/noticia-list.component';
import { NoticiaDetailComponent } from '../components/noticia-detail/noticia-detail.component';
import { TopVisitasComponent } from '../components/top-visitas/top-visitas.component';
import { AlterNoticiaScreenComponent } from './alter-noticia-screen/alter-noticia-screen.component';
import { PeriodistaScreenComponent } from './periodista-screen/periodista-screen.component';
import { NoticiaListPeriodistaComponent } from '../components/noticia-list-periodista/noticia-list-periodista.component';
import { AlterNoticiaComponent } from '../components/alter-noticia/alter-noticia.component';
import { NoticiaListAdministradorComponent } from '../components/noticia-list-administrador/noticia-list-administrador.component';
import { AlterNoticiaAdministradorComponent } from '../components/alter-noticia-administrador/alter-noticia-administrador.component';
import { AlterNoticiaAdministratorScreenComponent } from './alter-noticia-administrator-screen/alter-noticia-administrator-screen.component';
import { NoticiaAdministratorScreenComponent } from './noticia-administrator-screen/noticia-administrator-screen.component';
import { NoticiaDetailAdministratorComponent } from '../components/noticia-detail-administrator/noticia-detail-administrator.component';
import { NoticiaPeriodistaScreenComponent } from './noticia-periodista-screen/noticia-periodista-screen.component';
import { NoticiaDetailPeriodistaComponent } from '../components/noticia-detail-periodista/noticia-detail-periodista.component';
import { CategoryPrivateComponent } from '../components/category-private/category-private.component';
import { environment } from 'src/environments/environment';
import { PrivateNewsScreenComponent } from './private-news-screen/private-news-screen.component';
import { UsuarioListComponent } from '../components/usuario-list/usuario-list.component';
import { CreateNoticiaComponent } from '../components/create-noticia/create-noticia.component';
import { MostCommentedScreenComponent } from './most-commented-screen/most-commented-screen.component';


@NgModule({
  declarations: [
    ScreensComponent,
    HomeScreenComponent,
    Covid19ScreenComponent,
    NacionalScreenComponent,
    InternacionalScreenComponent,
    DeportesScreenComponent,
    LoginRegisterScreenComponent,
    NoticiaScreenComponent,
    NewNoticiaScreenComponent,
    CarouselComponent,
    ClockDateComponent,
    CardComponent,
    CategoryComponent,
    QualifierComponent,
    WeatherComponent,
    CoversorComponent,
    ContactoScreenComponent,
    ComentariosScreenComponent,
    ContactoListComponent,
    AdministratorScreenComponent,
    NavbarComponent,
    FooterScreenComponent,
    NoticiaListComponent,
    NoticiaDetailComponent,
    TopVisitasComponent,
    AlterNoticiaScreenComponent,
    PeriodistaScreenComponent,
    NoticiaListPeriodistaComponent,
    AlterNoticiaComponent,
    NoticiaListAdministradorComponent,
    AlterNoticiaAdministradorComponent,
    AlterNoticiaAdministratorScreenComponent,
    NoticiaAdministratorScreenComponent,
    NoticiaDetailAdministratorComponent,
    NoticiaPeriodistaScreenComponent,
    NoticiaDetailPeriodistaComponent,
    CategoryPrivateComponent,
    PrivateNewsScreenComponent,
    UsuarioListComponent,
    CreateNoticiaComponent,
    MostCommentedScreenComponent,
  ],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ContactProviderService
  ]
})
export class ScreensModule { }
