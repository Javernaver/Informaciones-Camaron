import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  public iconUrl: string;

  constructor() {
    this.iconUrl='https://www.flaticon.es/svg/static/icons/svg/2346/2346897.svg';
  }
}
