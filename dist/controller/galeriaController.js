"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = __importStar(require("http-status"));
const helper_1 = __importDefault(require("../infra/helper"));
const galeriaService_1 = __importDefault(require("../services/galeriaService"));
class GaleriaController {
    get(request, response) {
        galeriaService_1.default.get()
            .then((galeria) => helper_1.default.sendResponse(response, HttpStatus.OK, galeria))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getById(request, response) {
        const _id = request.params.id;
        galeriaService_1.default.getById(_id)
            .then((galeria) => helper_1.default.sendResponse(response, HttpStatus.OK, galeria))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    create(request, response) {
        let modelApi = request.body;
        galeriaService_1.default.create(modelApi)
            .then((galeria) => helper_1.default.sendResponse(response, HttpStatus.OK, "Dado cadastrado com sucesso"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    update(request, response) {
        const _id = request.params.id;
        let galeria = request.body;
        galeriaService_1.default.update(_id, galeria)
            .then((galeria) => helper_1.default.sendResponse(response, HttpStatus.OK, `${galeria.titulo} foi atualizado com sucesso`))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    delete(request, response) {
        const _id = request.params.id;
        galeriaService_1.default.delete(_id)
            .then((galeria) => helper_1.default.sendResponse(response, HttpStatus.OK, `${galeria._id}Dado deletado`))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new GaleriaController();
