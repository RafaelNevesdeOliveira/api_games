"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const videosRepository_1 = require("./../repository/videosRepository");
class VideosService {
    get() {
        return videosRepository_1.VideosRepository.find({});
    }
    getById(_id) {
        return videosRepository_1.VideosRepository.findById(_id);
    }
    create(videos) {
        return videosRepository_1.VideosRepository.create(videos);
    }
    update(_id, videos) {
        return videosRepository_1.VideosRepository.findByIdAndUpdate(_id, videos);
    }
    delete(_id) {
        return videosRepository_1.VideosRepository.findByIdAndRemove(_id);
    }
}
exports.default = new VideosService();
