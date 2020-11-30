import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';


@Component({
  selector: 'app-new-noticia-screen',
  templateUrl: './new-noticia-screen.component.html',
  styleUrls: ['./new-noticia-screen.component.sass']
})
export class NewNoticiaScreenComponent implements OnInit {

  public id: string;
  public usuario$: Observable<User>;

  constructor(private userService: UserProviderService, private activatedRoute: ActivatedRoute) {
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.usuario$ = this.userService.getUsuarioByID(this.id);
  }
}
