"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const constants_1 = require("./constants");
let ConfigService = class ConfigService {
    options;
    envConfig;
    constructor(options) {
        this.options = options;
        try {
            const filePath = `${process.env.NODE_ENV || 'server'}.env`;
            const envFile = path.resolve(__dirname, '../../', this.options.folder, filePath);
            const configFileContent = fs.readFileSync(envFile, 'utf8');
            this.envConfig = JSON.parse(configFileContent);
        }
        catch (error) {
            console.error('Error loading environment variables:', error.message);
            this.envConfig = {};
        }
    }
    get(key, defaultValue) {
        return this.envConfig[key] || defaultValue || '';
    }
    getServiceConfig() {
        let serviceName = this.getServiceTag();
        const serviceConfig = this.envConfig[serviceName];
        if (serviceConfig && serviceConfig['Port'] && serviceConfig['GrpcSvHost'] && serviceConfig['SvType'] && serviceConfig['GrpcSvPort']) {
            return { Port: parseInt(serviceConfig['Port'], 10), GrpcSvHost: serviceConfig['GrpcSvHost'], SvType: serviceConfig['SvType'], GrpcSvPort: parseInt(serviceConfig['GrpcSvPort'], 10) };
        }
        return null;
    }
    getServiceTag() {
        const args = process.argv.slice(2);
        let serviceTag = 'Battle-0';
        for (const arg of args) {
            if (arg.startsWith('--ServerTag=')) {
                serviceTag = arg.split('=')[1];
                break;
            }
        }
        return serviceTag;
    }
    getMongoConfig() {
        const serviceConfig = this.envConfig["Mongo"];
        if (serviceConfig && serviceConfig['Addr'] && serviceConfig['DB']) {
            if (serviceConfig['IsSRV'] == true) {
                return { Addr: serviceConfig['Addr'], DB: serviceConfig['DB'], User: serviceConfig['User'], Pwd: serviceConfig['Pwd'] };
            }
            else {
                return { Addr: 'mongodb://' + serviceConfig['Addr'] + "/", DB: serviceConfig['DB'], User: serviceConfig['User'], Pwd: serviceConfig['Pwd'] };
            }
        }
        return null;
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map