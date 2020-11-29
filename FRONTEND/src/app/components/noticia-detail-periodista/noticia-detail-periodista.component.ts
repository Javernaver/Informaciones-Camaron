import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-noticia-detail-periodista',
  templateUrl: './noticia-detail-periodista.component.html',
  styleUrls: ['./noticia-detail-periodista.component.sass']
})
export class NoticiaDetailPeriodistaComponent implements OnInit {

  @Input()
  noticia: Noticia;

  constructor(private _sanitizer: DomSanitizer, private alterNoticiaProvider: NoticiaProviderService) {}

  ngOnInit(): void {
  }

  getVideoIframe(url: string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
  }

  public async approvalNoticia (_id: string) {
    let noticia: Partial<Noticia> = {
      estado: "Publicado"
    }

    try {
      await this.alterNoticiaProvider.putNoticiaById(_id,noticia).toPromise();
      alert("La noticia ha sido aprobada con exito");
      location.assign('/inicio/administrator');
    } catch (error) {
      alert("Error al aprobar la noticia");
    }
  }

}
