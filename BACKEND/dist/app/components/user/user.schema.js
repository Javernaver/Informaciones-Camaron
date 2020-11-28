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
exports.default = mongoose_1.model('User', schema, 'Users');
/*import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nick: String,
    nombre: String,
    correo: String,
    contraseña: String,
    permiso: Number
}, {
    timestamps: true
});

export default model('User', userSchema, 'users');*/ 
