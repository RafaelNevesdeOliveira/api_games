"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const galeriaService_1 = require("./../services/galeriaService");
const newsService_1 = require("./../services/newsService");
const videosService_1 = require("./../services/videosService");
tsyringe_1.container.register("INewsService", {
    useClass: newsService_1.NewsService
});
tsyringe_1.container.register("IVideosService", {
    useClass: videosService_1.VideosService
});
tsyringe_1.container.register("IGaleriaService", {
    useClass: galeriaService_1.GaleriaService
});
