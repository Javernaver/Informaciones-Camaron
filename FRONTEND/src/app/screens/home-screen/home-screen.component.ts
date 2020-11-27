import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.sass']
})
export class HomeScreenComponent implements OnInit {
  
  public logo: string;

  constructor() {
    this.logo='https://i.ibb.co/wy2V5wd/Imagen1.png';
  }

  ngOnInit(): void {
    
  }

}
