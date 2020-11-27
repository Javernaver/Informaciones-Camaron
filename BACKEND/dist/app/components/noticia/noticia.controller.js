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
const noticia_repository_1 = __importDefault(require("./noticia.repository"));
function addNoticia(noticia) {
    noticia.autor = "Periodista de Prueba";
    noticia.createdAt = new Date();
    noticia.calificacion = 0;
    noticia.estado = 3;
    noticia.visitas = 0;
    noticia.cantComentarios = 0;
    return noticia_repository_1.default.addNoticia(noticia);
}
function getNoticias() {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_repository_1.default.getNoticias();
    });
}
function getNoticiaById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_repository_1.default.getNoticiaById(_id);
    });
}
function deleteNoticia(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_repository_1.default.deleteNoticia(_id);
    });
}
function putNoticia(_id, noticia) {
    return __awaiter(this, void 0, void 0, function* () {
        return noticia_repository_1.default.putNoticia(_id, noticia);
    });
}
exports.default = { addNoticia, getNoticias, getNoticiaById, deleteNoticia, putNoticia };
