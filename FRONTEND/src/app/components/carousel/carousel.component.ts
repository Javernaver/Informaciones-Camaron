import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  public noticias$: Observable<Noticia[]>;

  constructor(private noticiaProvider: NoticiaProviderService) {
    this.noticias$ = this.topNoticiasVisitas();
  }
  
  ngOnInit(): void {
  }

  topNoticiasVisitas(): Observable<Noticia[]> {
    return this.noticiaProvider.topNoticiaVisitas();
  }
}
