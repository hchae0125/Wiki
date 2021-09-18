"use strict";
var __importDefault = (this && this.__importDefault)|| function (mod) {
    return (mod && mod.__importDefault) ? mod : {"default" : mod };
};

Object.defineProperty(exports, "__esModule", {value : true});
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3001;


const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    //port:'3306',
    password: 'Rutgers2018!',
    database: 'WIKIDB',
    //insecureAuth:true,
});

db.connect(function (err) {
    if (err) throw err;
    console.log('connected!!');
    const sqlInsert = "INSERT INTO page (name, content, createdAt) VALUES ('HANEUL', 'This is the first name of this db owner', 09112021); ";
    db.query(sqlInsert, (err, result) => {
        if (err) throw err;
        console.log('1 record inserted');
    });
});

// db.query(sqlInsert, function (err,))
// app.get('/', function (req, res) {
//     const sqlInsert = "INSERT INTO page (name, content) VALUES ('HANEUL', 'This is the first name of this db owner'); ";
//     db.query(sqlInsert, (err, result) => {
//         res.send(err);
//         //res.send(result);
//     });
    
// });

app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " +port);
});