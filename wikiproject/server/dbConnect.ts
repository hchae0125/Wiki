
export class dbConnect {
    public static connect(): void {
        console.log(__dirname);
        const mysql = require('mysql');
        const wikiDB = mysql.createConnection({
            host:'localhost',
            user: 'root',
            password: 'Rutgers2018!',
            database: 'WIKIDB',
            //insecureAuth:true,
        });
        wikiDB.connect((err) => {
            if (err) throw err;
            console.log('connected to wiki db!!');
        })
    }
}