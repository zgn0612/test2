"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsConfig = void 0;
const config_service_1 = require("../config/config.service");
const path_1 = require("path");
const configService = new config_service_1.ConfigService({ folder: './config' });
const serviceTag = configService.getServiceTag();
const logFolder = (0, path_1.join)('logs', serviceTag);
const logFilePath = (filename) => (0, path_1.join)(logFolder, filename);
exports.log4jsConfig = {
    name: "server",
    config: {
        appenders: {
            console: { type: 'console' },
            file: {
                type: 'file',
                filename: logFilePath('app.log'),
                maxLogSize: 104857600,
                backups: 3,
                compress: true,
                encoding: 'utf-8',
                mode: 0o644
            },
            errorFile: {
                type: 'file',
                filename: logFilePath('error.log'),
                maxLogSize: 104857600,
                backups: 5,
                compress: true,
                encoding: 'utf-8',
                mode: 0o644
            },
            error: { type: 'logLevelFilter', appender: 'errorFile', level: 'error' }
        },
        categories: {
            default: { appenders: ['console', 'file', 'error'], level: 'debug' }
        },
    }
};
//# sourceMappingURL=log4jsConfig.js.map