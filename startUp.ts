import express, { Application } from "express";
import database from "./infra/db";
import cors from 'cors'
import "reflect-metadata";
import NewsController from './controller/newsController'
import GaleriaController from './controller/galeriaController'
import VideosController from './controller/videosController'
class StartUp {

    public app: Application;
    private _db: database = new database();

    constructor() {
        this.app = express();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    enableCors(){
        const options: cors.CorsOptions={
          methods: "GET, OPTIONS, PUT, POST, DELETE",
          origin: "*"
        }
    
        this.app.use(cors(options))
      }

    middler() {
        this.enableCors()
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
      }

    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.2" });
        });

    // News
    this.app.route("/api/v1/news/").get(NewsController.get)
    this.app.route("/api/v1/news/:id").get(NewsController.getById)
    this.app.route("/api/v1/news").post(NewsController.create)
    this.app.route("/api/v1/news/:id").put(NewsController.update)
    this.app.route("/api/v1/news/:id").delete(NewsController.delete)

    // galeria 
    this.app.route("/api/v1/galeria/").get(GaleriaController.get)
    this.app.route("/api/v1/galeria/:id").get(GaleriaController.getById)
    this.app.route("/api/v1/galeria").post(GaleriaController.create)
    this.app.route("/api/v1/galeria/:id").put(GaleriaController.update)
    this.app.route("/api/v1/galeria/:id").delete(GaleriaController.delete)

    // Videos 
    this.app.route("/api/v1/videos/").get(VideosController.get)
    this.app.route("/api/v1/videos/:id").get(VideosController.getById)
    this.app.route("/api/v1/videos").post(VideosController.create)
    this.app.route("/api/v1/videos/:id").put(VideosController.update)
    this.app.route("/api/v1/videos/:id").delete(VideosController.delete)
    }
}

export default new StartUp();