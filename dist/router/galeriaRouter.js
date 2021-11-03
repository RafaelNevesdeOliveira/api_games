"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const galeriaController_1 = require("./../controller/galeriaController");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const galeriaRouter = (0, express_1.default)();
const galeria = tsyringe_1.container.resolve(galeriaController_1.GaleriaController);
galeriaRouter
    .route("/api/v1/galeria/:page/:qtd")
    .get((req, res) => {
    return galeria.get(req, res);
});
galeriaRouter
    .route("/api/v1/galeria/:id")
    .get((req, res) => {
    return galeria.getById(req, res);
});
exports.default = galeriaRouter;
