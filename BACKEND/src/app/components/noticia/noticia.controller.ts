import { Noticia } from "../../models/noticia.model";
import NoticiaRepository from "./noticia.repository";


function addNoticia(noticia: Noticia): Promise<Noticia> {
    noticia.autor = "Periodista de Prueba";
    noticia.createdAt = new Date();
    noticia.calificacion = 0;
    noticia.estado = 3;
    noticia.visitas = 0;
    noticia.cantComentarios = 0;
    
    return NoticiaRepository.addNoticia(noticia);
}

async function getNoticias(): Promise<Noticia[]> {
    return NoticiaRepository.getNoticias();
}

async function getNoticiaById(_id: string) {
    return NoticiaRepository.getNoticiaById(_id);
}

async function deleteNoticia(_id: string) {
    return NoticiaRepository.deleteNoticia(_id);
}

async function putNoticia(_id: string, noticia: Noticia) {
    return NoticiaRepository.putNoticia(_id, noticia);
}

export default { addNoticia, getNoticias, getNoticiaById, deleteNoticia, putNoticia };