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
const noticia_controller_1 = __importDefault(require("./noticia.controller"));
const router = express_1.default.Router();
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const result = yield noticia_controller_1.default.addNoticia(body);
        response_module_1.default.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield noticia_controller_1.default.getNoticias();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/id/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield noticia_controller_1.default.getNoticiaById(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.delete('/delete/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield noticia_controller_1.default.deleteNoticia(_id);
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
        const result = yield noticia_controller_1.default.putNoticia(_id, body);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/visitUpdate/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield noticia_controller_1.default.getNoticiaUpdateVisita(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/topVisitas', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield noticia_controller_1.default.topNoticiaVisita();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.put('/calification/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    const body = req.body;
    try {
        const result = yield noticia_controller_1.default.putCalificacionNoticia(_id, body);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/publico', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield noticia_controller_1.default.getNoticiasPublicas();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/privado', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield noticia_controller_1.default.getNoticiasPrivadas();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
exports.default = router;
