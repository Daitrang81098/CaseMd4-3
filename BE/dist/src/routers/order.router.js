"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controllers/orderController"));
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.get('/', orderController_1.default.getAll);
exports.orderRouter.post('/', orderController_1.default.create);
exports.orderRouter.put('/:id', orderController_1.default.update);
exports.orderRouter.delete('/:id', orderController_1.default.remove);
//# sourceMappingURL=order.router.js.map