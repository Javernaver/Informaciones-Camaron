"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
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
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Noticia', schema, 'Noticias');
