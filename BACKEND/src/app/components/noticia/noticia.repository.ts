import { Noticia } from "../../models/noticia.model";
import noticiaSchema from "./noticia.schema";


function addNoticia(noticia: Noticia): Promise<Noticia> {
    return noticiaSchema.create<Noticia>(noticia);
}

async function getNoticias(): Promise<Noticia[]> {
    return noticiaSchema.find();
}

async function getNoticiaById(_id: string) {
    return noticiaSchema.findById(_id);
}

async function deleteNoticia(_id: string) {
    return noticiaSchema.findByIdAndDelete(_id);
}

async function putNoticia(_id: string, noticia: Noticia) {
    return noticiaSchema.findByIdAndUpdate(_id, noticia);
}

export default { addNoticia, getNoticias, getNoticiaById, deleteNoticia, putNoticia };