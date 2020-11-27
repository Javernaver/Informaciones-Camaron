import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.sass']
})
export class ContactoListComponent implements OnInit {

  @Input()
  contacts: Contact[];

  constructor() { }

  ngOnInit(): void {
  }

}
