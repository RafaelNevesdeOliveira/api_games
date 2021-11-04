
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";
import NewsService from "../services/newsService";
class NewsController {
    get(request, response) {
        NewsService.get()
            .then((news) => Helper.sendResponse(response, HttpStatus.OK, news))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    getById(request, response) {
        const _id = request.params.id;

        NewsService.getById(_id)
            .then((news) => Helper.sendResponse(response, HttpStatus.OK, news))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    create(request, response) {
        let modelApi = request.body;

        NewsService.create(modelApi)
            .then((news) =>
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
        let news = request.body;

        NewsService.update(_id, news)
            .then((news) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    `${news.titulo} foi atualizado com sucesso`
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }

    delete(request, response) {
        const _id = request.params.id;

        NewsService.delete(_id)
            .then((news) =>
                Helper.sendResponse(
                    response,
                    HttpStatus.OK,
                    `${news._id}Dado deletado`
                )
            )
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}

export default new NewsController();