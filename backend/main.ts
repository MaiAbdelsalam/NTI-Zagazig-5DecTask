import express from 'express'
import categoriesService from './src/category/categories.service'
import mountRoutes from './src/index'
import dotenv from 'dotenv'
import hpp from 'hpp'
import dbConnection from './src/config/database';
import i18n from 'i18n'
import { Server } from 'http';
 import path from 'path'
 import cors from 'cors'
 import cookieParser from 'cookie-parser'

const app: express.Application = express();
app.use(express.json({limit: '10kb'}));
let server: Server;
// app.use(cors({
//     origin: ['http://localhost:4200'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true,
// }));
app.use(cookieParser())
app.use(express.static('uploads'))
dotenv.config();
app.use(hpp({whitelist:['body.price']}));


// app.use(hpp({whitelist:['body.name','body.email','body.password']}));
i18n.configure({
    locales: ['en', 'ar'],
    directory: path.join(__dirname, 'locales'),
    defaultLocale: 'en',
    queryParameter: 'lang'
});
app.use(i18n.init)
dbConnection();
mountRoutes(app);
server=app.listen(process.env.PORT,()=>{
    console.log(`port is ${process.env.PORT}`);

});

// process.on('unhandledRejection',(err:Error)=>{
//     console.error(`unhandledRejection ${err.name} | ${err.message}`);
//     server.close(()=>{
//         console.error(`shutting the application down`);
//         process.exit(1)
//     });
// })

// i18n.configure({
//     locales: ['en', 'de'],
//     directory: path.join(__dirname, '/locales')
//   })


// const app:express.Application=express();
// app.use(express.json({limit:'10kb'}));

;
// app.use("/api/v1/categories",categoriesRouter)

// app.use('/api/v1/subcategories',subcategoriesRouter);



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


