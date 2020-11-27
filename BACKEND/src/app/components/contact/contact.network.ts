import express, { Request, Response, Router } from "express";
import { Contact } from "../../models/contact.model";
import responseModule from "../../modules/response.module";
import contactController from "./contact.controller"


const router: Router = express.Router();

router.post('/add', async(req: Request, res: Response) => {
    const body: Contact = req.body;

    try {
        const result: Contact = await contactController.addContact(body);
        responseModule.success(req, res, result, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.get('/all', async(req: Request, res: Response) => {
    try {
        const result: Contact[] = await contactController.getContacts();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

export default router;