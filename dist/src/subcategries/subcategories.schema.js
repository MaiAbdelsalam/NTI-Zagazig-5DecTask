"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const subcategorieSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true },
    category: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'categories' },
    image: String,
}, { timestamps: true });
// subcategorieSchema.pre<subcategoriesInterface>(/^find/,function(next){
//     this.populate({path:'category',select:'name image'});
//     next();
// })
subcategorieSchema.pre(/^find/, function (next) {
    this.populate({ path: 'category', select: 'name image' });
    next();
});
exports.default = mongoose_1.default.model('subcategories', subcategorieSchema);
