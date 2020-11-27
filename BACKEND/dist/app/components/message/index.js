"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const message_network_1 = __importDefault(require("./message.network"));
const message = express_1.default();
message.use('/message', message_network_1.default);
exports.default = message;
