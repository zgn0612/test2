"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const grpc_options_1 = require("./grpc.options");
const server_controller_1 = require("./network/server.controller");
const service_module_1 = require("../service/service.module");
let InnerModule = class InnerModule {
};
InnerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            service_module_1.ServiceModule,
            microservices_1.ClientsModule.register([
                {
                    name: 'INNER_PACKAGE',
                    ...grpc_options_1.grpcServerOptions,
                },
            ]),
        ],
        controllers: [server_controller_1.ServerController]
    })
], InnerModule);
exports.InnerModule = InnerModule;
//# sourceMappingURL=inner.module.js.map