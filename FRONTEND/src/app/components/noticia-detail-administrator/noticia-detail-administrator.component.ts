import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';


@Component({
  selector: 'app-noticia-detail-administrator',
  templateUrl: './noticia-detail-administrator.component.html',
  styleUrls: ['./noticia-detail-administrator.component.sass']
})
export class NoticiaDetailAdministratorComponent implements OnInit {

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

/*
 public alterNoticiaFormGroup: FormGroup;

  constructor(private alterNoticiaProvider: NoticiaProviderService, private _builder: FormBuilder) {
    this.alterNoticiaFormGroup = this._builder.group({
      titulo: ['', Validators.required],
      entradilla: ['', Validators.required],
      imagenURL: [''],
      videoURL: [''],
      audioURL: [''],
      cuerpo: ['', Validators.required],
      categoria: ['', Validators.required],
      privado: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public async alterNoticia(_id: string) {
    let noticia: Partial<Noticia> = {
      titulo: this.alterNoticiaFormGroup.get('titulo').value,
      entradilla: this.alterNoticiaFormGroup.get('entradilla').value,
      imagenURL: this.alterNoticiaFormGroup.get('imagenURL').value,
      videoURL: this.alterNoticiaFormGroup.get('videoURL').value,
      audioURL: this.alterNoticiaFormGroup.get('audioURL').value,
      cuerpo: this.alterNoticiaFormGroup.get('cuerpo').value,
      categoria: this.alterNoticiaFormGroup.get('categoria').value,
      privado: this.alterNoticiaFormGroup.get('privado').value
    }

    try {
      await this.alterNoticiaProvider.putNoticiaById(_id, noticia).toPromise();
      alert("La noticia ha sido modificada con exito");
      location.assign('/inicio/periodista')
    } catch (error) {
      alert("Error al modificar la noticia")
    }
  }
*/