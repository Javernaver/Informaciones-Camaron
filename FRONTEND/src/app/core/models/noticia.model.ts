export interface Noticia {
    _id: string;                 /* Identificador de noticia*/
    imagenURL?: string;         /* Link para imagen (opcional)*/
    videoURL?: string;          /* Link para video (opcional)*/
    audioURL?: string;          /* Link para audio (opcional)*/
    titulo: string;             /* Titulo de noticia*/
    entradilla: string;         /* Entradilla de la noticia*/
    cuerpo: string;             /* Cuerpo de la noticia*/
    categoria: string;          /* Categoria de la noticia*/
    autor: string;              /* Periodista autor (Formato: Nombre Apellido) */
    createdAt: Date;                /* Fecha de publicacion de la noticia*/
    calificacion: number;       /* Rango de gusto de la noticia, escala de 0-10 */
    estado: number;             /* Estado de edicion de la noticia: 1=edicion(no publicada) 2=proceso de aprobacion 3=publicado*/
    visitas: number;            /* Cantidad de visitas de la noticia */
    privado: number;            /* Privacidad de la noticia: 1=publico 2=privada */
    cantComentarios: number;    /* Cantidad de comentarios de la noticia */
}
