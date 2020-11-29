import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/contact.model';
import { Noticia } from 'src/app/core/models/noticia.model';
import { ContactProviderService } from 'src/app/core/providers/contact/contact-provider.service';
import { NoticiaProviderService } from 'src/app/core/providers/noticia/noticia-provider.service';

@Component({
  selector: 'app-administrator-screen',
  templateUrl: './administrator-screen.component.html',
  styleUrls: ['./administrator-screen.component.sass']
})
export class AdministratorScreenComponent implements OnInit {

  public contact$: Observable<Contact[]>
  public noticias$: Observable<Noticia[]>;

  constructor(private contactProvider: ContactProviderService, private noticiaProvider: NoticiaProviderService) { 
    this.contact$ = this.getContacts();
    this.noticias$ = this.getNoticias();
  }

  ngOnInit(): void {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactProvider.getContacts();
  }
  
  getNoticias(): Observable<Noticia[]> {
    return this.noticiaProvider.getNoticias();
  }
}
