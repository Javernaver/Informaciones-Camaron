import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-new-noticia-screen',
  templateUrl: './new-noticia-screen.component.html',
  styleUrls: ['./new-noticia-screen.component.sass']
})
export class NewNoticiaScreenComponent implements OnInit {

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
      estado: this.newNoticiaFormGroup.get('estado').value
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
