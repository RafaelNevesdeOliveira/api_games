"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const galeriaRepository_1 = require("./../repository/galeriaRepository");
class GaleriaService {
    get() {
        return galeriaRepository_1.GaleriaRepository.find({});
    }
    getById(_id) {
        return galeriaRepository_1.GaleriaRepository.findById(_id);
    }
    create(galeria) {
        return galeriaRepository_1.GaleriaRepository.create(galeria);
    }
    update(_id, galeria) {
        return galeriaRepository_1.GaleriaRepository.findByIdAndUpdate(_id, galeria);
    }
    delete(_id) {
        return galeriaRepository_1.GaleriaRepository.findByIdAndRemove(_id);
    }
}
exports.default = new GaleriaService();
