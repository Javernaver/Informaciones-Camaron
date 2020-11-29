import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-qualifier',
  templateUrl: './qualifier.component.html',
  styleUrls: ['./qualifier.component.sass']
})
export class QualifierComponent implements OnInit {

  public calificacionFormGroup: FormGroup;
  
  @Input()
  _id: string;

  constructor(private updateCalificacionNoticiaProvider: NoticiaProviderService, private _builder: FormBuilder) { 
    this.calificacionFormGroup = this._builder.group({
      opcion: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  public async calificar() {
    let calificacion: Partial<Noticia> = {
      calificacion: this.calificacionFormGroup.get('opcion').value
    }

    try {
      await this.updateCalificacionNoticiaProvider.putCalificacionNoticia(this._id,calificacion).toPromise();
      window.location.reload();
    } catch (error) {
    }
  }

}
