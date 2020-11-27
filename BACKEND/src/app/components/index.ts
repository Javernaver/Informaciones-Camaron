import { Express } from "express";
import contact from "./contact";
import noticia from "./noticia";
import user from "./user";


const components: Express[] = [
    contact,
    noticia,
    user
];

export default components;