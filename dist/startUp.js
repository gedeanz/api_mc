"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.app = void 0;
// startUp.ts
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
require("./shared/container");
const newsRouter_1 = __importDefault(require("./router/newsRouter"));
const videosRouter_1 = __importDefault(require("./router/videosRouter"));
const galeriaRouter_1 = __importDefault(require("./router/galeriaRouter"));
const podcastRouter_1 = __importDefault(require("./router/podcastRouter"));
const app = (0, express_1.default)();
exports.app = app;
const db = new db_1.default();
exports.db = db;
function setupRoutes() {
    app.route("/").get((req, res) => {
        res.send({ versao: "0.0.2" });
    });
    app.use("/", newsRouter_1.default);
    app.use("/", videosRouter_1.default);
    app.use("/", galeriaRouter_1.default);
    app.use("/", podcastRouter_1.default);
}
setupRoutes();
