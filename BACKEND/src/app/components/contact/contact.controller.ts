import { Contact } from "../../models/contact.model";
import contactRepository from "./contact.repository";


function addContact(contact: Contact): Promise<Contact> {
    contact.email = contact.email.toLowerCase();
    contact.message = contact.message.toLowerCase();
    contact.createdAt = new Date();
    
    return contactRepository.addContact(contact);
}

async function getContacts(): Promise<Contact[]> {
    return contactRepository.getContacts();
}

export default { addContact, getContacts };