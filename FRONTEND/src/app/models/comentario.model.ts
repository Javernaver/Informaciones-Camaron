import { User } from './user.model';

export interface Comentario {
    titulo: string;
    cuerpo: string;
    usuario: User;
}