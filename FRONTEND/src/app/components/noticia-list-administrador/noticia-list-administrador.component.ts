import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-noticia-list-administrador',
  templateUrl: './noticia-list-administrador.component.html',
  styleUrls: ['./noticia-list-administrador.component.sass']
})
export class NoticiaListAdministradorComponent implements OnInit {

  @Input()
  noticias: Noticia[];

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
