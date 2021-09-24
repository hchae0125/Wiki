import express, { NextFunction, Request, Response } from 'express';
import { PageController } from "../controllers/pagesControllers";
import { BaseRouter } from "./baseRoute";

export class PageRouter extends BaseRouter {
    registerRouter(): void {
        const controller = new PageController();
        this.router.get('/pages/', (req: Request, res: Response) => {
            controller.getPages(req, res);
        });
        this.router.get('/pages/:id', (req: Request, res: Response, next: NextFunction) => {
            controller.getPage(req, res, next);
        });
    }
}