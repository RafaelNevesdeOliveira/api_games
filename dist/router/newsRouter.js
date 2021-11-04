"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const newsController_1 = require("../controller/newsController");
const newsRouter = express_1.default();
const news = tsyringe_1.container.resolve(newsController_1.NewsController);
newsRouter
    .route("/api/v1/news")
    .get((req, res) => {
    return news.get(req, res);
});
newsRouter.route("/api/v1/news/:id").get((req, res) => {
    return news.getById(req, res);
});
exports.default = newsRouter;
