import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactProviderService } from 'src/app/core/providers/contact/contact-provider.service';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.sass']
})
export class ContactoListComponent implements OnInit {

  @Input()
  contacts: Contact[];

  constructor(private contactProvider: ContactProviderService) { }

  ngOnInit(): void {
  }

  public async deleteContact(_id: string, email: string) {
    if(confirm("¿Estas seguro de eliminar el ticket de este email?\n" + email)) {
      try {
        await this.contactProvider.deleteContactById(_id).toPromise();
        alert("El ticket ha sido eliminado");
        window.location.reload();
      } catch (error) {
        alert("Error al eliminar el ticket");
      }
    }
  }
}
