"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Singleton_1 = require("./Singleton");
var LOG_TYPE;
(function (LOG_TYPE) {
    LOG_TYPE[LOG_TYPE["Dump"] = 1] = "Dump";
    LOG_TYPE[LOG_TYPE["Err"] = 2] = "Err";
    LOG_TYPE[LOG_TYPE["Sys"] = 3] = "Sys";
    LOG_TYPE[LOG_TYPE["UI"] = 4] = "UI";
    LOG_TYPE[LOG_TYPE["Http"] = 5] = "Http";
    LOG_TYPE[LOG_TYPE["Net"] = 6] = "Net";
    LOG_TYPE[LOG_TYPE["Notify"] = 7] = "Notify";
})(LOG_TYPE || (LOG_TYPE = {}));
;
class _gLog extends Singleton_1.default {
    logger;
    constructor() {
        super();
        this.logger = new common_1.Logger("_gLog");
    }
    err(...param) {
        this.logger.error(param);
    }
    sys(...param) {
        this.logger.log(param);
    }
    ui(...param) {
        this.logger.log(param);
    }
    http(...param) {
        this.logger.log(param);
    }
    net(...param) {
        this.logger.log(param);
    }
    notify(...param) {
        this.logger.log(param);
    }
}
exports.default = _gLog;
;
//# sourceMappingURL=gLog.js.map