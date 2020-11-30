import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { User } from 'src/app/core/models/user.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-noticia-list-periodista',
  templateUrl: './noticia-list-periodista.component.html',
  styleUrls: ['./noticia-list-periodista.component.sass']
})
export class NoticiaListPeriodistaComponent implements OnInit {

  @Input()
  noticias: Noticia[];
  @Input()
  usuario: User;

  constructor(private noticiaProvider: NoticiaProviderService) { }

  ngOnInit(): void {
  }


  public async deleteNoticia(_id: string, titulo: string) {
    if(confirm("¿Estas seguro de eliminar la noticia?\n" + titulo)) {
      try {
        await this.noticiaProvider.deleteNoticiaById(_id).toPromise();
        alert("La noticia ha sido eliminada");
        window.location.reload();
      } catch (error) {
        alert("Error al eliminar la noticia");
      }
    }
  }
}