"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const inner_module_1 = require("./inner/inner.module");
const api_module_1 = require("./api/api.module");
const service_module_1 = require("./service/service.module");
const core_1 = require("@nestx-log4js/core");
const log4jsConfig_1 = require("./log4js/log4jsConfig");
const apiLoggerMiddleware_1 = require("./common/middleware/apiLoggerMiddleware");
const config_module_1 = require("./config/config.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(apiLoggerMiddleware_1.ApiLoggerMiddleware)
            .forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            inner_module_1.InnerModule,
            api_module_1.ApiModule,
            service_module_1.ServiceModule,
            core_1.Log4jsModule.forRoot(log4jsConfig_1.log4jsConfig),
            config_module_1.ConfigModule.register({ folder: './config' }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map