import { Schema, model, Document } from "mongoose";
import { Contact } from "../../models/contact.model";

const definition: Partial<Record<keyof Contact, any>> = {
    email: { type: String, required: true },
    reason: { type: String, required: true},
    message: { type: String, required: true},
    createdAt: { type: Date }
}

const schema: Schema<Contact> = new Schema(definition)

export default model<Contact & Document>('Contact', schema, 'Contacto');