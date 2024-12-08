"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiErrors extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'failed' : 'error';
    }
    ;
}
exports.default = ApiErrors;
// class ApiErrors extends Error{
//     private status:string;
//     // private isOperation:boolean;
//     constructor(message:string,private statuscode:number){
//         super(message);
//         this.status=`${statusCode}`.startsWith('4')? 'fail' : 'error';
//         // this.isOperation=true;
//     };
// }
