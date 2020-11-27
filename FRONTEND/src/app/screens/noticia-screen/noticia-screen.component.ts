import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-noticia-screen',
  templateUrl: './noticia-screen.component.html',
  styleUrls: ['./noticia-screen.component.sass']
})
export class NoticiaScreenComponent implements OnInit {

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
