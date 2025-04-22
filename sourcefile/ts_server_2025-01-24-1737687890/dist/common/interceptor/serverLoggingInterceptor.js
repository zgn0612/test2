"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const common_2 = require("@nestjs/common");
let ServerLoggingInterceptor = class ServerLoggingInterceptor {
    logger = new common_2.Logger('ServerLoggingInterceptor');
    intercept(context, next) {
        const timestamp = Date.now();
        const method = context.getHandler().name;
        const request = context.switchToRpc().getData();
        let reqData = request;
        this.logger.debug(`star->  Request : [${method}], roomIID:${reqData.RoomIID}, params - ${JSON.stringify(request)}`);
        return next.handle().pipe((0, operators_1.tap)((response) => {
            const timeDiff = Date.now() - timestamp;
            const responseSize = JSON.stringify(response).length;
            this.logger.debug(`end-> Response : [${method}], roomIID:${reqData.RoomIID}, params - ${JSON.stringify(response)},timeDiff:${timeDiff},size:${responseSize}`);
            return response;
        }));
    }
};
ServerLoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], ServerLoggingInterceptor);
exports.ServerLoggingInterceptor = ServerLoggingInterceptor;
//# sourceMappingURL=serverLoggingInterceptor.js.map