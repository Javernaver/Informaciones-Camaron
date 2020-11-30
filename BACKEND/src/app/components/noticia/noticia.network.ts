import express, { Request, Response, Router } from "express";
import { Noticia } from "../../models/noticia.model";
import responseModule from "../../modules/response.module";
import noticiaController from "./noticia.controller"


const router: Router = express.Router();

router.post('/add', async(req: Request, res: Response) => {
    const body: Noticia = req.body;

    try {
        const result: Noticia = await noticiaController.addNoticia(body);
        responseModule.success(req, res, result, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.get('/all', async(req: Request, res: Response) => {
    try {
        const result: Noticia[] = await noticiaController.getNoticias();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.get('/id/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    try {
        const result = await noticiaController.getNoticiaById(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.delete('/delete/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    try {
        const result = await noticiaController.deleteNoticia(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
})

router.put('/put/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    const body: Noticia = req.body;
    try {
        const result = await noticiaController.putNoticia(_id, body);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
})

router.get('/visitUpdate/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    try {
        const result = await noticiaController.getNoticiaUpdateVisita(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.get('/topVisitas', async(req: Request, res: Response) => {
    try {
        const result = await noticiaController.topNoticiaVisita();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.put('/calification/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    const body: Noticia = req.body;
    try {
        const result = await noticiaController.putCalificacionNoticia(_id,body);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.get('/publico', async(req: Request, res: Response) => {
    try {
        const result = await noticiaController.getNoticiasPublicas();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.get('/privado', async(req: Request, res: Response) => {
    try {
        const result = await noticiaController.getNoticiasPrivadas();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

export default router;