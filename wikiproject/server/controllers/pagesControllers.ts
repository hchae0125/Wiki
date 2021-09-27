import { Request, Response } from '../../../../Library/Caches/typescript/4.3/node_modules/@types/express-serve-static-core';
import { getConnection } from 'typeorm';
import PageRepository from '../repositories/pagesRepository';
import { dbConnect } from '../dbConnect';
import { Page } from '../models/page';
import { NextFunction } from 'express';
import MarkdownIt from 'markdown-it';

export class PageController {
    public async getPages(req: Request, res: Response) {
        let repo = getConnection().getCustomRepository(PageRepository);
        let page = await repo.find();
        if (!page) return res.status(400);
        res.status(200).send(page);
    }

    public async getPage(req: Request, res: Response, next: NextFunction){
        let repo = getConnection().getCustomRepository(PageRepository);
        let page = await repo.findOne(+req.params.id);
        console.log(req.params.id);
        if (page == null) return res.status(400);
        //let md = new MarkdownIt()
        res.status(200).send(page);
    }

    public async getPageBySlug(req: Request, res: Response, next: NextFunction) {
        let repo = getConnection().getCustomRepository(PageRepository);
        let pages = (await repo.find()).filter(x => x.urlFriendlyName == req.params.slug);
        try{
            if(pages.length > 0) {
                let md = new MarkdownIt();
                pages[0].parsedContent = md.render(pages[0].content);
            } else {
                if (pages == null) res.status(200).send([]);
            }
        } catch (e) {
            res.status(400);
        }
        res.status(200).send(pages[0]);
    }

    public async searchPages(req: Request, res: Response, next: NextFunction) {
        let repo = getConnection().getCustomRepository(PageRepository);
        console.log(req.params.keyword);
        let pages = (await repo.find()).filter(x => (x.name.toLowerCase().includes(req.params.keyword.toLowerCase()) || x.content.toLowerCase().includes(req.params.keyword.toLowerCase())));
        if (!pages) return res.status(400);
        res.status(200).send(pages);
    }
}