import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';
import { UserProviderService } from '../core/providers/user/user-provider.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.sass']
})
export class ScreensComponent implements OnInit {

  public userId = localStorage.getItem('userLogged');
  public user$: Observable<User>;
  
  constructor(private userProvider: UserProviderService) { }

  ngOnInit(): void {
    console.log(this.userId);
    this.user$ = this.userProvider.getUsuarioByID(this.userId);
  }

}
