import { Contact } from "../../models/contact.model";
import contactRepository from "./contact.repository";


function addContact(contact: Contact): Promise<Contact> {
    contact.email = contact.email.toLowerCase();
    contact.createdAt = new Date();
    
    return contactRepository.addContact(contact);
}

async function getContacts(): Promise<Contact[]> {
    return (await contactRepository.getContacts()).reverse();
}

async function deleteContact(_id: string) {
    return contactRepository.deleteContact(_id);
}

export default { addContact, getContacts, deleteContact };