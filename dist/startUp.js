"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const newsController_1 = __importDefault(require("./controller/newsController"));
const galeriaController_1 = __importDefault(require("./controller/galeriaController"));
const videosController_1 = __importDefault(require("./controller/videosController"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.app = express_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET, OPTIONS, PUT, POST, DELETE",
            origin: "*"
        };
        this.app.use(cors_1.default(options));
    }
    middler() {
        this.enableCors();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });
        // News
        this.app.route("/api/v1/news/").get(newsController_1.default.get);
        this.app.route("/api/v1/news/:id").get(newsController_1.default.getById);
        this.app.route("/api/v1/news").post(newsController_1.default.create);
        this.app.route("/api/v1/news/:id").put(newsController_1.default.update);
        this.app.route("/api/v1/news/:id").delete(newsController_1.default.delete);
        // galeria 
        this.app.route("/api/v1/galeria/").get(galeriaController_1.default.get);
        this.app.route("/api/v1/galeria/:id").get(galeriaController_1.default.getById);
        this.app.route("/api/v1/galeria").post(galeriaController_1.default.create);
        this.app.route("/api/v1/galeria/:id").put(galeriaController_1.default.update);
        this.app.route("/api/v1/galeria/:id").delete(galeriaController_1.default.delete);
        // Videos 
        this.app.route("/api/v1/videos/").get(videosController_1.default.get);
        this.app.route("/api/v1/videos/:id").get(videosController_1.default.getById);
        this.app.route("/api/v1/videos").post(videosController_1.default.create);
        this.app.route("/api/v1/videos/:id").put(videosController_1.default.update);
        this.app.route("/api/v1/videos/:id").delete(videosController_1.default.delete);
    }
}
exports.default = new StartUp();
