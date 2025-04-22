"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const grpc_options_1 = require("./inner/grpc.options");
const core_2 = require("@nestx-log4js/core");
const config_service_1 = require("./config/config.service");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice(grpc_options_1.grpcServerOptions);
    app.useLogger(app.get(core_2.Log4jsLogger));
    app.enableShutdownHooks();
    const configService = app.get(config_service_1.ConfigService);
    const serviceConfig = configService.getServiceConfig();
    await app.startAllMicroservices();
    await app.listen(serviceConfig.Port);
    common_1.Logger.log(`Application is running on: ${await app.getUrl()} serverTag: ${configService.getServiceTag()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map