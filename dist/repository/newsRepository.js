"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NewsSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    descricao: { type: String },
    sinopse: { type: String },
    autor: { type: String },
    imagem: { type: String },
    dataPublicacao: { type: Date },
    tags: { type: String },
    link: { type: String },
    ativo: { type: Boolean }
});
exports.NewsRepository = mongoose_1.default.model("news", NewsSchema);
