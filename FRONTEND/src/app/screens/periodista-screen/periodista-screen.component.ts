import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { User } from 'src/app/core/models/user.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';
import { UserProviderService } from 'src/app/core/providers/user/user-provider.service';

@Component({
  selector: 'app-periodista-screen',
  templateUrl: './periodista-screen.component.html',
  styleUrls: ['./periodista-screen.component.sass']
})
export class PeriodistaScreenComponent implements OnInit {

  public noticias$: Observable<Noticia[]>;
  public id: string;
  public usuario$: Observable<User>;

  constructor(private noticiaProvider: NoticiaProviderService, private userService: UserProviderService, private activatedRoute: ActivatedRoute) {
    this.id=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.usuario$ = this.userService.getUsuarioByID(this.id);
    this.noticias$ = this.getNoticias();
  }
  
  getNoticias(): Observable<Noticia[]> {
    return this.noticiaProvider.getNoticias();
  }
}
