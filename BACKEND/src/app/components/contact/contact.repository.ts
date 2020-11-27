import { Contact } from "../../models/contact.model";
import contactSchema from "./contact.schema";


function addContact(contact: Contact): Promise<Contact> {
    return contactSchema.create<Contact>(contact);
}

async function getContacts(): Promise<Contact[]> {
    return contactSchema.find();
}

export default { addContact, getContacts };