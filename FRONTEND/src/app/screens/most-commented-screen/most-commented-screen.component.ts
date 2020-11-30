import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-commented-screen',
  templateUrl: './most-commented-screen.component.html',
  styleUrls: ['./most-commented-screen.component.sass']
})
export class MostCommentedScreenComponent implements OnInit {

  public numCom;

  constructor() { }

  ngOnInit(): void {
  }

}
