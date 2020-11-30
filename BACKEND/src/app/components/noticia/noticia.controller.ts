import { Noticia } from "../../models/noticia.model";
import NoticiaRepository from "./noticia.repository";


function addNoticia(noticia: Noticia): Promise<Noticia> {
    noticia.createdAt = new Date();
    noticia.calificacion = 0;
    noticia.visitas = 0;
    noticia.cantComentarios = 0;
    
    return NoticiaRepository.addNoticia(noticia);
}

async function getNoticias(): Promise<Noticia[]> {
    return (await NoticiaRepository.getNoticias()).reverse();
}

async function getNoticiaById(_id: string): Promise<Noticia> {
    return NoticiaRepository.getNoticiaById(_id);
}

async function deleteNoticia(_id: string): Promise<Noticia> {
    return NoticiaRepository.deleteNoticia(_id);
}

async function putNoticia(_id: string, noticia: Noticia): Promise<Noticia> {
    return NoticiaRepository.putNoticia(_id, noticia);
}

async function getNoticiaUpdateVisita(_id: string): Promise<Noticia> {
    const noticia: Noticia = await NoticiaRepository.getNoticiaById(_id);
    noticia.visitas++;
    NoticiaRepository.putNoticia(_id, noticia);
    return noticia;
}

async function topNoticiaVisita(): Promise<Noticia[]> {

    const noticias: Noticia[] = await NoticiaRepository.getNoticias();
    let topNoticiaCoronavirus: Noticia;
    let topVisitasCoronavirus: number = 0;
    let topNoticiaNacional: Noticia;
    let topVisitasNacional: number = 0;
    let topNoticiaInternacional: Noticia;
    let topVisitasInternacional: number = 0;
    let topNoticiaDeportes: Noticia;
    let topVisitasDeportes: number = 0;
    var topVisitasNoticia: Noticia[];

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
}

async function putCalificacionNoticia(_id: string, caliNoticia: Noticia): Promise<Noticia> {
    let noticia: Noticia = await NoticiaRepository.getNoticiaById(_id);
    noticia.calificacion = (Number(noticia.calificacion) + Number(caliNoticia.calificacion))/2;
    noticia.calificacion = Number.parseFloat(noticia.calificacion.toFixed(2));
    await NoticiaRepository.putNoticia(_id,noticia);
    return noticia;
}

async function getNoticiasPublicas(): Promise<Noticia[]> {
    let noticias: Noticia[] = await NoticiaRepository.getNoticias();
    let noticiasPublicas: Noticia[] = noticias.map((noticia) => {
        if(noticia.privado == 1 && noticia.estado === "Publicado") {
            return noticia;
        }
    });
    noticiasPublicas = noticiasPublicas.filter(Boolean);
    noticiasPublicas.reverse();

    return noticiasPublicas;
}

async function getNoticiasPrivadas(): Promise<Noticia[]> {
    let noticias: Noticia[] = await NoticiaRepository.getNoticias();
    let noticiasPrivadas: Noticia[] = noticias.map((noticia) => {
        if(noticia.privado == 2 && noticia.estado === "Publicado") {
            return noticia;
        }
    });
    noticiasPrivadas = noticiasPrivadas.filter(Boolean);
    noticiasPrivadas.reverse();

    return noticiasPrivadas;
}

export default { addNoticia, getNoticias, getNoticiaById, deleteNoticia, putNoticia, getNoticiaUpdateVisita, topNoticiaVisita, putCalificacionNoticia, getNoticiasPublicas, getNoticiasPrivadas };