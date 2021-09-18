import express, { Request, Response, Router } from 'express';
import { PageRouter } from "./pagesRoute";

export function appRouting(): Router {
    let router: Router;
    router = express.Router();

    let pageRouter = new PageRouter(router);
    pageRouter.registerRouter();
    
    return router;
}