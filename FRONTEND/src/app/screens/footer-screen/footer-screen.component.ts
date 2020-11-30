import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-footer-screen',
  templateUrl: './footer-screen.component.html',
  styleUrls: ['./footer-screen.component.sass']
})
export class FooterScreenComponent implements OnInit {

  @Input()
  public user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
