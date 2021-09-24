import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {Page} from './models/page';
import PageRepository  from "./repositories/pagesRepository";
import getSlug from 'speakingurl';
      
export class dbConnect {
    public static connect(): void {
        console.log(__dirname + '/models/');
        createConnection({
            type: 'mysql',
            database: 'WIKIDB',
            username:'root',
            password:'Rutgers2018!',
            port: 3306,
            host:'localhost',
            //synchronize: true,
            //migrationsRun: false,
            entities: [
                __dirname + '/models/*.ts',
                __dirname + '/repositories/*.ts'
            ],
        }).then(connection => {
            console.log('wiki db is connected.');
            this.setSeedData();
        }).catch(error => console.log('Error: ', error));
    }

    public static async setSeedData() {
        let repo = getConnection().getCustomRepository(PageRepository);
        const totalCount = await repo.count();
        if (totalCount == 0) {
            let page = new Page();
            page.name = "Main Page";
            page.urlFriendlyName = getSlug(page.name);
            page.content = "This is the main page";
            page.createdAt = new Date().toUTCString();
            page.lastModifiedAt = new Date().toUTCString();
            page = await repo.save(page);
        } else {
            console.log('passed seed data block.');
        }
    }
}