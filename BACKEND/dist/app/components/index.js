"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = __importDefault(require("./contact"));
const noticia_1 = __importDefault(require("./noticia"));
const user_1 = __importDefault(require("./user"));
const components = [
    contact_1.default,
    noticia_1.default,
    user_1.default
];
exports.default = components;
