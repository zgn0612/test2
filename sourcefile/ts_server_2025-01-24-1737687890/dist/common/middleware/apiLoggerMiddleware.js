"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiLoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('ApiLoggerMiddleware');
let ApiLoggerMiddleware = class ApiLoggerMiddleware {
    use(req, res, next) {
        const { method, originalUrl, body, query } = req;
        const logMessage = `Request: [${method}] ${originalUrl} - Body: ${JSON.stringify(body)}, Query: ${JSON.stringify(query)}, Params: ${JSON.stringify(req.params)}`;
        logger.debug(logMessage);
        const originalSend = res.send;
        res.send = function (data) {
            const responseLogMessage = `Response: [${method}] ${originalUrl} - Return: ${JSON.stringify(data)}`;
            logger.debug(responseLogMessage);
            return originalSend.apply(this, arguments);
        };
        next();
    }
};
ApiLoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], ApiLoggerMiddleware);
exports.ApiLoggerMiddleware = ApiLoggerMiddleware;
//# sourceMappingURL=apiLoggerMiddleware.js.map