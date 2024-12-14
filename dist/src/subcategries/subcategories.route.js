"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subcategories_service_1 = __importDefault(require("./subcategories.service"));
const subcategoriesRouter = (0, express_1.Router)({ mergeParams: true });
subcategoriesRouter.route('/')
    .get(subcategories_service_1.default.filterDataSubcategory, subcategories_service_1.default.getAll)
    .post(subcategories_service_1.default.setCategoryId, subcategories_service_1.default.createOne);
// .get(subcategoriesService.filterSubCategory,subcategoriesService.getAll)
// .post(subcategoriesService.setCategoryId,subcategoriesService.createOne)
subcategoriesRouter.route('/:id')
    .get(subcategories_service_1.default.getOne)
    .put(subcategories_service_1.default.updateOne)
    .delete(subcategories_service_1.default.deleteOne);
exports.default = subcategoriesRouter;
