"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const user_controller_1 = __importDefault(require("./user.controller"));
const router = express_1.default.Router();
const jwt = require('jsonwebtoken');
var userId;
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const result = yield user_controller_1.default.addUser(body);
        response_module_1.default.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield user_controller_1.default.getUserByEmail(body.correo);
        const user1 = yield user_controller_1.default.getUserByNick(body.nick);
        if (user) {
            return res.status(401).send('El Correo ya esta utilizado!');
        }
        if (user1) {
            return res.status(401).send('El Nick ya esta utilizado!');
        }
        const result = yield user_controller_1.default.addUser(body);
        const token = yield jwt.sign({ _id: result._id }, 'secretkey');
        return res.status(200).json({ token, user: result });
        //responseModule.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield user_controller_1.default.getUserByEmail(body.correo);
        if (!user)
            return res.status(401).send('El Correo no esta registrado!');
        if (user.contraseña !== body.contraseña)
            return res.status(401).send('Contraseña Incorrecta');
        const token = jwt.sign({ _id: user._id }, 'secretkey');
        return res.status(200).json({ token, user: user });
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
function verifyToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.headers.authorization) {
                return res.status(401).send('Unauhtorized Request');
            }
            let token = req.headers.authorization.split(' ')[1];
            if (token === 'null') {
                return res.status(401).send('Unauhtorized Request');
            }
            const payload = yield jwt.verify(token, 'secretkey');
            if (!payload) {
                return res.status(401).send('Unauhtorized Request');
            }
            userId = payload._id;
            next();
        }
        catch (e) {
            //console.log(e)
            return res.status(401).send('Unauhtorized Request');
        }
    });
}
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_controller_1.default.getUsers();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/id/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield user_controller_1.default.getUserById(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.delete('/delete/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield user_controller_1.default.deleteUser(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.put('/put/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    const body = req.body;
    try {
        const result = yield user_controller_1.default.putUser(_id, body);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
exports.default = router;
