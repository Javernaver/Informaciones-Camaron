"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    nick: { type: String },
    nombre: { type: String },
    contraseña: { type: String },
    correo: { type: String },
    permiso: { type: Number }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Usuario', schema, 'Usuarios');
