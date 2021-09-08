import express, { request, response, Router } from 'express';
import bodyParser from 'body-parser';

export class Server {
    public app: Express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        
    }
}