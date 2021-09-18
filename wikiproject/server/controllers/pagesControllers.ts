import { Request, Response } from '../../../../Library/Caches/typescript/4.3/node_modules/@types/express-serve-static-core';
import { getConnection } from 'typeorm';
import { PageRepository } from '../repositories/pagesRepository';

export class PageController {
    public async getPages(req: Request, res: Response) {
        let repo = getConnection().getCustomRepository(PageRepository);
        let page = await repo.find();

        if (!page) return res.status(400);
        res.status(200).send(page);
    }
}