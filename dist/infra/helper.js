"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    constructor() {
        this.sendResponse = function (response, statusCode, data) {
            response.status(statusCode).json({ result: data });
        };
    }
}
exports.default = new Helper();
