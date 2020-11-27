import { Schema, model, Document } from "mongoose";
import { User } from "../../models/user.model";

const definition: Partial<Record<keyof User, any>> = {

    nick: { type: String },
    nombre: { type: String },
    contraseña: { type: String },
    correo: { type: String },
    permiso: { type: Number }
  
}

const schema: Schema<User> = new Schema(definition)

export default model<User & Document>('User', schema, 'Users');