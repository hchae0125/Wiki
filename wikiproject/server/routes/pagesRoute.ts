import express, { Request, Response } from 'express';
import { PageController } from "../controllers/pagesControllers";
import { BaseRouter } from "./baseRoute";

export class PageRouter extends BaseRouter {
    registerRouter(): void {
        const controller = new PageController();
        this.router.get('/pages/', (req: Request, res: Response) => {
            controller.getPages(req, res);
        });
    }
}