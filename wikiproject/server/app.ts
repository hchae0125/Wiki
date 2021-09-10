import express, { request, response, Router } from 'express';
import bodyParser from 'body-parser';
import { dbConnect } from './dbConnect';

export class Server {
    public app: Express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        dbConnect.connect();
        this.app = express();
        
    }
}