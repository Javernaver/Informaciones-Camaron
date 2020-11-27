import express, { Request, Response, Router } from "express";
import { User } from "../../models/user.model";
import responseModule from "../../modules/response.module";
import userController from "./user.controller"



const router: Router = express.Router();

router.post('/add', async(req: Request, res: Response) => {
    const body: User = req.body;

    try {
        const result: User = await userController.addUser(body);
        responseModule.success(req, res, result, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.get('/all', async(req: Request, res: Response) => {
    try {
        const result: User[] = await userController.getUsers();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.get('/id', async(req: Request, res: Response) => {
    const _id: string = req.body;
    try {
        const result = await userController.getUserById(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.delete('/delete:_id', async(req: Request, res: Response) => {
    const _id: string = req.body;
    try {
        const result = await userController.deleteUser(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
})


export default router;