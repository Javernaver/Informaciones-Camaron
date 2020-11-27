import { Schema, model, Document } from "mongoose";
import { Noticia } from "../../models/noticia.model";

const definition: Partial<Record<keyof Noticia, any>> = {
    imagenURL: { type: String },
    videoURL: { type: String },
    audioURL: { type: String },
    titulo: { type: String, required: true },
    entradilla: { type: String, required: true },
    cuerpo: { type: String, required: true },
    categoria: { type: String, required: true },
    autor: { type: String },
    createdAt: { type: Date },
    calificacion: { type: Number },
    estado: { type: Number },
    visitas: { type: Number },
    privado: { type: Number },
    cantComentarios: { type: Number }
}

const schema: Schema<Noticia> = new Schema(definition)

export default model<Noticia & Document>('Noticia', schema, 'Noticias');