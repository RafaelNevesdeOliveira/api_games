"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videosController_1 = require("./../controller/videosController");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const videosRouter = (0, express_1.default)();
const videos = tsyringe_1.container.resolve(videosController_1.VideosController);
//NEWS
videosRouter
    .route("/api/v1/videos/:page/:qtd")
    .get((req, res) => {
    return videos.get(req, res);
});
videosRouter.route("/api/v1/videos/:id").get((req, res) => {
    return videos.getById(req, res);
});
exports.default = videosRouter;
