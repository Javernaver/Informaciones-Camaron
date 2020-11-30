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
}
