import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-category-private',
  templateUrl: './category-private.component.html',
  styleUrls: ['./category-private.component.sass']
})
export class CategoryPrivateComponent implements OnInit {

  @Input()
  public categoria: string;
  @Input()
  public _id: string;
  
  public noticias$: Observable<Noticia[]>;
  constructor(private noticiaProvider: NoticiaProviderService) {
    this.noticias$ = this.getNoticiasPrivadas();
  }

  ngOnInit(): void {
  }

  getNoticiasPrivadas(): Observable<Noticia[]> {
    return this.noticiaProvider.getNoticiasPrivadas();
  }
}
