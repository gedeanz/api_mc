import { injectable, inject } from "tsyringe";
import { IPodcastService } from "../contracts/iPodcastService";
import { Request, Response } from "express";
import { PodcastService } from "../services/podcastService";

@injectable()
export class PodcastController {

    constructor(@inject('IPodcastService') private _service: IPodcastService) {
        this._service = new PodcastService();
    }

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

    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            let result = await this._service.get(_id);
            response.status(260).json({ result });

        } catch (error) {
            response.status(500).json({ error: error.message || error.tostring() });
        }
    }
}