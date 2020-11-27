import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia.model';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.sass']
})
export class NoticiaListComponent implements OnInit {
  
  @Input()
  noticias: Noticia[];
  @Input()
  public categoria: string;
  @Input()
  public _id: string;

  constructor() { }

  ngOnInit(): void {
  }

}