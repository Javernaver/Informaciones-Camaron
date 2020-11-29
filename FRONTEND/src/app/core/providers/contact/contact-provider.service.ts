import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactProviderService {

  constructor(private httpService: HttpService) { }

  public getContacts(): Observable<Contact[]> {
    return this.httpService.get<Contact[]>('/contact/all');
  }
  
  public addContact(contact: Partial<Contact>): Observable<Contact> {
    return this.httpService.post<Contact>('/contact/add', contact);
  }

  public deleteContactById(_id: string): Observable<Contact> {
    return this.httpService.delete<Contact>('/contact/delete/' + _id);
  }
}
