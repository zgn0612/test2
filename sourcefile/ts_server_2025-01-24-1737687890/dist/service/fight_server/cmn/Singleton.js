"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor() {
    }
    static _instance;
    static getInstance(_class) {
        if (!this._instance) {
            this._instance = new _class();
        }
        return this._instance;
    }
    getName() {
        return this.constructor.name.toString();
    }
}
exports.default = Singleton;
;
//# sourceMappingURL=Singleton.js.map