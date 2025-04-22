"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    id;
    type;
    metadata;
    frontend;
    hostname;
    constructor(id, type, frontend, metadata = {}) {
        this.id = id;
        this.type = type;
        this.metadata = metadata;
        this.frontend = frontend;
        this.hostname = this.getHostname();
    }
    getHostname() {
        try {
            return require('os').hostname();
        }
        catch (error) {
            console.error(`Failed to get hostname: ${error.message}`);
            return '';
        }
    }
    asJSONString() {
        try {
            return JSON.stringify(this);
        }
        catch (error) {
            console.error(`Error getting server as JSON: ${error.message}`);
            return '';
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=server.entity.js.map