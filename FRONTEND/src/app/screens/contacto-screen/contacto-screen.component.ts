import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactProviderService } from 'src/app/core/providers/contact/contact-provider.service';

@Component({
  selector: 'app-contacto-screen',
  templateUrl: './contacto-screen.component.html',
  styleUrls: ['./contacto-screen.component.sass']
})
export class ContactoScreenComponent implements OnInit {
  public contactFormGroup: FormGroup;

  constructor(private contactProvider: ContactProviderService, private _builder: FormBuilder) {
    this.contactFormGroup = this._builder.group({
      email:['',Validators.compose([Validators.email, Validators.required])],
      reason:['',Validators.required],
      message:['',Validators.required]
    })
  }

  public async addContact() {
    let contact: Partial<Contact> = {
      email: this.contactFormGroup.get('email').value,
      reason: this.contactFormGroup.get('reason').value,
      message: this.contactFormGroup.get('message').value
    }

    try {
      await this.contactProvider.addContact(contact).toPromise();
      alert("El ticket de contacto ha sido enviado, pronto un administrador se contactara por correo");
      window.location.reload();
    } catch (error) {
      alert("El ticket no ha sido enviado, intente otra vez");
    }
  }

  ngOnInit(): void {
  }

}