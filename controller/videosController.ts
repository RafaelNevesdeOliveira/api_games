import { injectable, inject } from 'tsyringe';
import { IVideosService } from './../contracts/iVideosService';
import { Request, Response } from "express";

@injectable()
export class VideosController {
    constructor(@inject('IGaleriaService') private _service: IVideosService) {}

    // Consulta por ID
    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            let result = await this._service.getAll(page, qtd);
            response.status(200).json({ result });

        } catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }

    // retornar uma listagem paginada
    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            let result = await this._service.get(_id);
            response.status(200).json({ result });

        } catch (error) {
            response.status(500).json({ error: error.message || error.toString() });
        }
    }
}


/**
OBS
try : consegue recuperar erros que possam ocorrer no código;
catch : faz o tratamento dos erros que aconteceram, retorna uma exception que pode ser tratada e retornada no response.
**/ 