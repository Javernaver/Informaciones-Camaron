import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/core/models/noticia.model';
import { User } from 'src/app/core/models/user.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-create-noticia',
  templateUrl: './create-noticia.component.html',
  styleUrls: ['./create-noticia.component.sass']
})
export class CreateNoticiaComponent implements OnInit {

  @Input()
  public usuario: User;
  public newNoticiaFormGroup: FormGroup;

  constructor(private newNoticiaProvider: NoticiaProviderService, private _builder: FormBuilder) {
      this.newNoticiaFormGroup = this._builder.group({
        titulo: ['', Validators.required],
        entradilla: ['', Validators.required],
        imagenURL: [''],
        videoURL: [''],
        audioURL: [''],
        cuerpo: ['', Validators.required],
        categoria: ['', Validators.required],
        privado: ['', Validators.required],
        estado: ['', Validators.required]
      })
  }
  
  public async addNoticia() {
    let noticia: Partial<Noticia> = {
      titulo: this.newNoticiaFormGroup.get('titulo').value,
      entradilla: this.newNoticiaFormGroup.get('entradilla').value,
      imagenURL: this.newNoticiaFormGroup.get('imagenURL').value,
      videoURL: this.newNoticiaFormGroup.get('videoURL').value,
      audioURL: this.newNoticiaFormGroup.get('audioURL').value,
      cuerpo: this.newNoticiaFormGroup.get('cuerpo').value,
      categoria: this.newNoticiaFormGroup.get('categoria').value,
      privado: this.newNoticiaFormGroup.get('privado').value,
      estado: this.newNoticiaFormGroup.get('estado').value,
      autor: this.usuario.nick
    }

    try {
      await this.newNoticiaProvider.addNoticia(noticia).toPromise();
      alert("La noticia ha sido creada con exito");
      location.assign('/inicio')
    } catch (error) {
      alert("Error al crear la noticia");
    }
  }
  
  ngOnInit(): void {
  }
}
