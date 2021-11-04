import * as HttpStatus from "http-status";
import Helper from "../infra/helper";
import GaleriaService from '../services/galeriaService';
class GaleriaController {
    get(request, response) {
        GaleriaService.get()
            .then((galeria) => Helper.sendResponse(response, HttpStatus.OK, galeria))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    getById(request, response) {
        const _id = request.params.id;

        GaleriaService.getById(_id)
            .then((galeria) => Helper.sendResponse(response, HttpStatus.OK, galeria))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    create(request, response) {
        let modelApi = request.body;

        GaleriaService.create(modelApi)
            .then((galeria) =>
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
        let galeria = request.body;

        GaleriaService.update(_id, galeria)
            .then((galeria) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    `${galeria.titulo} foi atualizado com sucesso`
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    delete(request, response) {
        const _id = request.params.id;

        GaleriaService.delete(_id)
            .then((galeria) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    `${galeria._id}Dado deletado`
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}

export default new GaleriaController();
