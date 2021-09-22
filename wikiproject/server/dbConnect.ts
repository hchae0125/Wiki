import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {Page} from './models/page';
import { PageRepository } from "./repositories/pagesRepository";
        
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
            synchronize: true,
            entities: [
                __dirname + '/models/*.ts'
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

        } else {
            console.log('passed seed data block.');
        }
    }
}