export interface User {
    _id: string;             /* Identificador de usuario */
    nick: string;           /* NickName*/
    nombre: string;         /* Nombre real del usuario*/
    contraseña: string;     /* Contraseña de usuario*/
    correo: string;         /* Correo de usuario */
    permiso: number;        /* Nivel de permiso del usuario: 1=lector 2=periodista 3=administrador*/
}

