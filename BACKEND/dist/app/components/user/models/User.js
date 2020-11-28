"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nick: String,
    nombre: String,
    correo: String,
    contraseña: String,
    permiso: Number
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Usuario', userSchema, 'usuarios');
