import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.sass']
})
export class HomeScreenComponent implements OnInit {
  
  public logo: string;

  public user = localStorage.getItem('userLogged');

  constructor() {
    this.logo='https://i.ibb.co/wy2V5wd/Imagen1.png';

  }

  ngOnInit(): void {
    console.log(this.user);
  }

}
