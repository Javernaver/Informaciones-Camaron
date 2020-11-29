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
function getNoticiaUpdateVisita(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const noticia = yield noticia_repository_1.default.getNoticiaById(_id);
        noticia.visitas++;
        noticia_repository_1.default.putNoticia(_id, noticia);
        return noticia;
    });
}
function topNoticiaVisita() {
    return __awaiter(this, void 0, void 0, function* () {
        const noticias = yield noticia_repository_1.default.getNoticias();
        let topNoticiaCoronavirus;
        let topVisitasCoronavirus = 0;
        let topNoticiaNacional;
        let topVisitasNacional = 0;
        let topNoticiaInternacional;
        let topVisitasInternacional = 0;
        let topNoticiaDeportes;
        let topVisitasDeportes = 0;
        var topVisitasNoticia;
        for (let noticia of noticias) {
            if (noticia.categoria === "Coronavirus" && noticia.visitas >= topVisitasCoronavirus) {
                topNoticiaCoronavirus = noticia;
                topVisitasCoronavirus = noticia.visitas;
            }
            if (noticia.categoria === "Nacional" && noticia.visitas >= topVisitasNacional) {
                topNoticiaNacional = noticia;
                topVisitasNacional = noticia.visitas;
            }
            if (noticia.categoria === "Internacional" && noticia.visitas >= topVisitasInternacional) {
                topNoticiaInternacional = noticia;
                topVisitasInternacional = noticia.visitas;
            }
            if (noticia.categoria === "Deportes" && noticia.visitas >= topVisitasDeportes) {
                topNoticiaDeportes = noticia;
                topVisitasDeportes = noticia.visitas;
            }
        }
        topVisitasNoticia = [topNoticiaCoronavirus, topNoticiaNacional, topNoticiaInternacional, topNoticiaDeportes];
        return topVisitasNoticia;
    });
}
function putCalificacionNoticia(_id, caliNoticia) {
    return __awaiter(this, void 0, void 0, function* () {
        let noticia = yield noticia_repository_1.default.getNoticiaById(_id);
        noticia.calificacion = (Number(noticia.calificacion) + Number(caliNoticia.calificacion)) / 2;
        noticia.calificacion = Number.parseFloat(noticia.calificacion.toFixed(2));
        yield noticia_repository_1.default.putNoticia(_id, noticia);
        return noticia;
    });
}
exports.default = { addNoticia, getNoticias, getNoticiaById, deleteNoticia, putNoticia, getNoticiaUpdateVisita, topNoticiaVisita, putCalificacionNoticia };
