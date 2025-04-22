"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcServerOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
const config_service_1 = require("../config/config.service");
const path_1 = require("path");
const fs = require("fs");
const protoFiles = fs.readdirSync((0, path_1.join)(__dirname, './proto')).filter(file => file.endsWith('.proto'));
const configService = new config_service_1.ConfigService({ folder: './config' });
const serviceConfig = configService.getServiceConfig();
if (!serviceConfig) {
    throw new Error(`Service configuration not found for service: ${process.argv}`);
}
const rpcURL = serviceConfig.GrpcSvHost + ":" + serviceConfig.GrpcSvPort.toString();
exports.grpcServerOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: rpcURL,
        package: 'inner',
        protoPath: protoFiles.map(file => (0, path_1.join)(__dirname, './proto', file)),
    },
};
//# sourceMappingURL=grpc.options.js.map