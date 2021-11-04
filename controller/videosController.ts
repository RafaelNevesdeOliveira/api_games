import VideosService from './../services/videosService';
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";

class VideosController {
    get(request, response) {
        VideosService.get()
            .then((videos) => Helper.sendResponse(response, HttpStatus.OK, videos))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    getById(request, response) {
        const _id = request.params.id;

        VideosService.getById(_id)
            .then((videos) => Helper.sendResponse(response, HttpStatus.OK, videos))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    create(request, response) {
        let modelApi = request.body;

        VideosService.create(modelApi)
            .then((videos) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    "Dado cadastrado com sucesso"
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    update(request, response) {
        const _id = request.params.id;
        let videos = request.body;

        VideosService.update(_id, videos)
            .then((videos) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    `${videos.titulo} foi atualizado com sucesso`
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    delete(request, response) {
        const _id = request.params.id;

        VideosService.delete(_id)
            .then((videos) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    `${videos._id}Dado deletado`
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}

export default new VideosController();