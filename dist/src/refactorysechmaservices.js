"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// const model:mongoose.Model=<modelType>(model)
class RefactorSchemaService {
    constructor() {
        this.getAll = (model) => (0, express_async_handler_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let filterData = {};
            if (req.filterData)
                filterData = req.filterData;
            const Document = yield model.find(filterData);
            res.status(200).json({ data: Document });
        }));
        // async createOne(req:Request,res:Response,next:NextFunction){
        //     const categories: Categories=await categoriesSchema.create(req.body);
        //     res.status(201).json({data:categories});
        //  }
        this.createOne = (model) => (0, express_async_handler_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const Document = yield model.create(req.body);
            res.status(201).json({ data: Document });
        }));
        this.getOne = (model) => (0, express_async_handler_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const Document = yield model.findById(req.params.id);
            res.status(201).json({ data: Document });
        }));
        this.updateOne = (model) => (0, express_async_handler_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const Document = yield model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json({ data: Document });
        }));
        this.deleteOne = (model) => (0, express_async_handler_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const Document = yield model.findByIdAndDelete(req.params.id);
            res.status(204).json();
        }));
    }
}
const refactorSchemaService = new RefactorSchemaService();
exports.default = refactorSchemaService;
