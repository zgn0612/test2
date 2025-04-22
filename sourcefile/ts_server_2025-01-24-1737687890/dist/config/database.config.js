"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const config_service_1 = require("./config.service");
const getMongoConfig = () => {
    const configService = new config_service_1.ConfigService({ folder: './config' });
    const mongoConfig = configService.getMongoConfig();
    if (!mongoConfig) {
        throw new Error(`mongoConfig  not found for service: ${process.argv}`);
    }
    return mongoConfig;
};
exports.getMongoConfig = getMongoConfig;
//# sourceMappingURL=database.config.js.map