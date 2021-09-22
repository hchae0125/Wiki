import { Request, Response } from '../../../../Library/Caches/typescript/4.3/node_modules/@types/express-serve-static-core';
import { getConnection } from 'typeorm';
import { PageRepository } from '../repositories/pagesRepository';
import { dbConnect } from '../dbConnect';
import { Page } from '../models/page';

export class PageController {
    public async getPages(req: Request, res: Response) {
        console.log('page controller get page repo');
        // let repo = getConnection().getRepository(PageRepository);
        // let page = await repo.find();

        // //console.dir(page)
        // //console.log('repo', repo);
        // //let page = await getConnection().manager.find(Page);
        // if (!page) return res.status(400);
        res.status(200).send('proxy success');
    }
}