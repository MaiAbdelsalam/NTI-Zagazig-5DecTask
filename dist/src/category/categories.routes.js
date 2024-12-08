"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_service_1 = __importDefault(require("./categories.service"));
const subcategories_route_1 = __importDefault(require("../subcategries/subcategories.route"));
const categoriesRouter = (0, express_1.Router)();
categoriesRouter.use('/:categoryId/subcategories', subcategories_route_1.default);
categoriesRouter.route('/')
    .get(categories_service_1.default.getAll)
    .post(categories_service_1.default.createOne);
categoriesRouter.get('/', categories_service_1.default.getAll);
categoriesRouter.route('/:id')
    .get(categories_service_1.default.getOne)
    .put(categories_service_1.default.updateOne)
    .delete(categories_service_1.default.deleteOne);
exports.default = categoriesRouter;
