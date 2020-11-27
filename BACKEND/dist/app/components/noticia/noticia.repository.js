"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noticia_schema_1 = __importDefault(require("./noticia.schema"));
function addNoticia(noticia) {
    return noticia_schema_1.default.create(noticia);
}
function getNoticias() {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_schema_1.default.find();
    });
}
function getNoticiaById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_schema_1.default.findById(_id);
    });
}
function deleteNoticia(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_schema_1.default.findByIdAndDelete(_id);
    });
}
function putNoticia(_id, noticia) {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_schema_1.default.findByIdAndUpdate(_id, noticia);
    });
}
exports.default = { addNoticia, getNoticias, getNoticiaById, deleteNoticia, putNoticia };
