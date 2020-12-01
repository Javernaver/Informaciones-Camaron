import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {

  @Input()
  public user: User;
  public iconUrl: string;

  constructor(public authService: AuthService) {
    this.iconUrl = 'https://www.flaticon.es/svg/static/icons/svg/2346/2346897.svg';
  }
  // tslint:disable-next-line: typedef
  CambiarFondo(){
    const btnSwitch = document.querySelector('#switch');

    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardamos el modo en localstorage.
    if (document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }

    // Obtenemos el modo actual.
    if (localStorage.getItem('dark-mode') === 'true'){
      document.body.classList.add('dark');
      btnSwitch.classList.add('active');
    } else {
      document.body.classList.remove('dark');
      btnSwitch.classList.remove('active');
    }
  }
}
