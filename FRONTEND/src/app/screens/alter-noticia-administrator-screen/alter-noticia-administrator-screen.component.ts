import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-alter-noticia-administrator-screen',
  templateUrl: './alter-noticia-administrator-screen.component.html',
  styleUrls: ['./alter-noticia-administrator-screen.component.sass']
})
export class AlterNoticiaAdministratorScreenComponent implements OnInit {

  public _id: string;
  public noticia$: Observable<Noticia>;

  constructor(private noticiaService: NoticiaProviderService, private activatedRoute: ActivatedRoute) {
    this._id = activatedRoute.snapshot.params['id'];
    this.noticia$ = this.getNoticia();
  }

  ngOnInit(): void {
  }

  getNoticia(): Observable<Noticia> {
    return this.noticiaService.getNoticiaById(this._id)
  }
}
