import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import { dbConnect } from './dbConnect';
import { appRouting } from './routes/appRouting';
import path from 'path';

export class Server {
    public app;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        dbConnect.connect();
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        // this.app.use(express.static(path.join(__dirname,'public')));
        // this.app.use(bodyParser.urlencoded({extended: true}));
        // this.app.use(bodyParser.json());
        this.app.listen(process.env.PORT || 8080, () => {
            console.log(`Listening on port ${process.env.PORT || 8080}`);
        })
    }

    public routes() {
        this.app.use('/api', appRouting());
    }
}

Server.bootstrap();