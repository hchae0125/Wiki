import { createConnection, Connection, useContainer, getConnection } from 'typeorm';

export class dbConnect {
    public static connect(): void {
        console.log(__dirname);
    }
}