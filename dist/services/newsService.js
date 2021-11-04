"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsRepository_1 = require("../repository/newsRepository");
class NewsService {
    get() {
        return newsRepository_1.NewsRepository.find({});
    }
    getById(_id) {
        return newsRepository_1.NewsRepository.findById(_id);
    }
    create(news) {
        return newsRepository_1.NewsRepository.create(news);
    }
    update(_id, news) {
        return newsRepository_1.NewsRepository.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return newsRepository_1.NewsRepository.findByIdAndRemove(_id);
    }
}
exports.default = new NewsService();
