"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devErrors = (err, res) => {
    res.status(err.statusCode).json({
        error: err,
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
};
const proErrors = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};
const globalErrors = function (err, req, res, next) {
    err.statusCode = err.statusCode;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV != 'development') {
        devErrors(err, res);
        // res.status(err.statusCode!).json({
        //     error:err,
        //     status:err.status,
        //     message:err.message,
        //     stack:err.stack,
        // });
    }
    else
        proErrors(err, res);
};
exports.default = globalErrors;
// const globalerrors=(err:any,req:express.Request,res:express.Response,next:NextFunction)=>{
//     err.statuscode=err.statuscode||500;
//     err.status=err.status || 'error';
// };
//هتتشال من هنا لان في الاول ده مجرد تيست لكن بعد كده هفصلها عن الملف ده واوديها لملفها الخاص  بالروتس وهو الاندكس
// app.use((err:Error,req:express.Request,res:express.Response,next:express.NextFunction)=>{
//     res.status(400).json({error:err.message})
// });
