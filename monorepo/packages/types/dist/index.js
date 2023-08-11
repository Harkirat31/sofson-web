"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productFields = void 0;
const zod_1 = require("zod");
exports.productFields = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.string()
});
