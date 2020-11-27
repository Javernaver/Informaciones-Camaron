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
        privado: ['', Validators.required]
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
      privado: this.newNoticiaFormGroup.get('privado').value
    }

    try {
      await this.newNoticiaProvider.addNoticia(noticia).toPromise();
      alert("La noticia ha sido creada con exito");
    } catch (error) {
      alert("Error al crear la noticia");
    }
  }
  

  ngOnInit(): void {
  }
}

  /*createFormNoticia() {
      
      return this.formBuilder.group({
        titulo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        imagen: [''],
        video: [''],
        audio: [''],
        cuerpo: ['', [Validators.required]],
        categoriasSelec: this.formBuilder.array([])
      });

  }*/

  /*onCheckboxChange(e) {
    const checkArray: FormArray = this.newNoticiaFormGroup.get('categoriasSelec') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }*/

  /*onSubmit(){

    this.acept = true;
    if (this.newNoticiaFormGroup.valid) {

      console.log(this.newNoticiaFormGroup.value, this.n.categoriasSelec.value, (document.getElementById('publicoPrivado') as HTMLInputElement).checked );
      
      this.noti.titulo = this.n.titulo.value;
      this.noti.entradilla = this.n.descripcion.value;
      this.noti.cuerpo = this.n.cuerpo.value;
      this.noti.imagenURL = this.n.imagen.value;
      this.noti.videoURL = this.n.video.value;
      this.noti.audioURL = this.n.audio.value;
      (document.getElementById('publicoPrivado') as HTMLInputElement).checked ? this.noti.privado = 2 : this.noti.privado = 1; // obtener valor del switch

      this.noti.categoria = this.n.categoriasSelec.value.toString(); // todas las categorias converidad a string separadas por comas

      
      console.log(this.noti);
    }
  }

  

 // get categoriasSelec() { return this.newNoticiaFormGroup.get('categoriasSelec');}
  get n() { return this.newNoticiaFormGroup.controls; } // todos los form controlers en una sub variable*/

