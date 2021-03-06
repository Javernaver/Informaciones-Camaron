import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-noticia-periodista-screen',
  templateUrl: './noticia-periodista-screen.component.html',
  styleUrls: ['./noticia-periodista-screen.component.sass']
})
export class NoticiaPeriodistaScreenComponent implements OnInit {

  public id: string;
  public noticia$: Observable<Noticia>;

  constructor(private noticiaService: NoticiaProviderService, private activatedRoute: ActivatedRoute) {
    this.id=activatedRoute.snapshot.params['id'];
    document.scrollingElement.scrollTop=0;
  }

  ngOnInit(): void {
    this.noticia$= this.noticiaService.getNoticiaById(this.id);
  }
}
