import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-alter-noticia-administrador',
  templateUrl: './alter-noticia-administrador.component.html',
  styleUrls: ['./alter-noticia-administrador.component.sass']
})
export class AlterNoticiaAdministradorComponent implements OnInit {

  @Input()
  noticia: Noticia;
  
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
      location.assign('/inicio/administrador')
    } catch (error) {
      alert("Error al modificar la noticia")
    }
  }

}
