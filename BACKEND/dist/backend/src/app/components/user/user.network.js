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
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_controller_1.default.getUsers();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.body;
    try {
        const result = yield user_controller_1.default.getUserById(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.delete('/delete:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.body;
    try {
        const result = yield user_controller_1.default.deleteUser(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
exports.default = router;
