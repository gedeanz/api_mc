// startUp.ts
import express, { Application } from "express";
import Database from "./infra/db";

import './shared/container';
import newsRouter from "./router/newsRouter";
import videosRouter from "./router/videosRouter";
import galeriaRouter from "./router/galeriaRouter";
import podcastRouter from "./router/podcastRouter";

const app: Application = express();
const db = new Database();

function setupRoutes() {
    app.route("/").get((req, res) => {
        res.send({ versao: "0.0.2" });
    });

    app.use("/", newsRouter);
    app.use("/", videosRouter);
    app.use("/", galeriaRouter);
    app.use("/", podcastRouter);
}

setupRoutes();

export { app, db };