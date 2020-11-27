import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactProviderService } from 'src/app/core/providers/contact/contact-provider.service';

@Component({
  selector: 'app-administrator-screen',
  templateUrl: './administrator-screen.component.html',
  styleUrls: ['./administrator-screen.component.sass']
})
export class AdministratorScreenComponent implements OnInit {

  public contact$: Observable<Contact[]>

  constructor(private contactProvider: ContactProviderService) { 
    this.contact$ = this.getContacts();
  }

  ngOnInit(): void {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactProvider.getContacts();
  }
}
