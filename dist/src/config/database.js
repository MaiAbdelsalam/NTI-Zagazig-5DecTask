"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = () => {
    // mongoose.connect(process.env.DB!)
    // mongoose.connect(process.env.DB!)
    mongoose_1.default.connect('mongodb://localhost:27017/Nti-commerce')
        .then(() => {
        console.log("connected to db");
    }).catch((err) => {
        console.log(err + "error is tid hello mai");
    });
};
exports.default = dbConnection;
