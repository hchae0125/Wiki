import express, { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import { dbConnect } from './dbConnect';
import { appRouting } from './routes/appRouting';

export class Server {
    public app;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        dbConnect.connect();
        this.app = express();
        this.routes();
    }

    public routes() {
        this.app.use('/api', appRouting());
    }
}