"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("dotenv").config();
const database_1 = __importDefault(require("./src/config/database"));
const index_1 = __importDefault(require("./src/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: '10kb' }));
dotenv_1.default.config();
(0, database_1.default)();
// app.use("/api/v1/categories",categoriesRouter)
// app.use('/api/v1/subcategories',subcategoriesRouter);
(0, index_1.default)(app);
app.listen(3000, () => {
    console.log(`port is 3000`);
});
// app.listen(process.env.PORT,()=>{
//     console.log(`port is ${process.env.PORT}`);
// })
// npm i -D typescript @types/express@4.17.21 @types/node ts-node nodemon
// import express from 'express';
// import dbconnection from "src/config/database";
// const app : express.Application=express();
// app.use(express.json({limit:'10kb'}));
// app.get('/',function(req:express.Request,res:express.Response){
//     res.json({data:'name'});
//     console.log("hello");
// })
// app.listen(3000,()=>{
//     console.log('server started on port 3000');
// });
// const express = require('express')
// const app = express()
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.listen(3000,()=>{
//     console.log('server started on port 3000');}
// )
// app.use('./api/v1/categories',);
// // دي االلي بعمل فيها كل حاجه 
// // app:   /  جواها بنكتب في اول حاجه اللي عاوزينها تفتح اللي هي معناها اول ما يتفتح المشروع يشتغل
// app.get('/',(req:express.Request,res:express.Response)=>{
//     res.json({data:"mai"});
//     console.log("true");
// });
// app.get('/',categoriesService.getAll);
// app.listen(3000,()=>{console.log("you are in port 300")});
