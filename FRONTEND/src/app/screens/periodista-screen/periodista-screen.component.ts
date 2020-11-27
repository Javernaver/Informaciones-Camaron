import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-periodista-screen',
  templateUrl: './periodista-screen.component.html',
  styleUrls: ['./periodista-screen.component.sass']
})
export class PeriodistaScreenComponent implements OnInit {

  public noticias$: Observable<Noticia[]>;

  constructor(private noticiaProvider: NoticiaProviderService) {
    this.noticias$ = this.getNoticias();
  }

  ngOnInit(): void {

  }
  
  getNoticias(): Observable<Noticia[]> {
    return this.noticiaProvider.getNoticias();
  }
}
