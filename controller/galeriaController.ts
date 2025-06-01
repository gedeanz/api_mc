import { injectable, inject } from "tsyringe";
import { IGaleriaService } from "../contracts/iGaleriaService";
import { Request, Response } from "express";
import { GaleriaService } from "../services/galeriaService";

@injectable()
export class GaleriaController {

    constructor(@inject('IGaleriaService') private _service: IGaleriaService) {
        this._service = new GaleriaService();
    }
    
    async get(request: Request, response: Response) {
        try {
            const page = request.params.page ? parseInt(request.params.page) : 1;
            const qtd = request.params.qtd ? parseInt(request.params.qtd) : 10;
            let result = await this._service.getAll(page, qtd);
            response.status(200).json({ result });

        } catch (error) {
            response.status(580).json({ error: error.message || error.tostring() });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const _id = request.params.id;
            let result = await this._service.get(_id);
            response.status(200).json({ result });

        } catch (error) {
            response.status(580).json({ error: error.message || error.tostring() });
        }
    }

}