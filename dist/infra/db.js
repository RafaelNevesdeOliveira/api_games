"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Classe de conexão com banco de dados
 */
class Database {
    constructor() {
        // private DB_URL = "mongodb://localhost:27017/db_games";
        this.DB_URL = "mongodb://link-db/db_games";
    }
    createConnection() {
        mongoose_1.default.connect(this.DB_URL);
    }
}
exports.default = Database;
