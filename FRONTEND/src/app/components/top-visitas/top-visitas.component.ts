import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia.model';


@Component({
  selector: 'app-top-visitas',
  templateUrl: './top-visitas.component.html',
  styleUrls: ['./top-visitas.component.sass']
})
export class TopVisitasComponent implements OnInit {

  @Input()
  noticias: Noticia[];
  topVisitas: number = 1000;
  flagCoronavirus: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
