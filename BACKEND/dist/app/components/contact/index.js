"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_network_1 = __importDefault(require("./contact.network"));
const contact = express_1.default();
contact.use('/contact', contact_network_1.default);
exports.default = contact;
