"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
async function copyDirectory(source, destination) {
    try {
        console.log('copy start -->');
        await fs.copy(source, destination);
        console.log('copy success !!！source:', source);
    }
    catch (error) {
        console.error('copy fail', error);
    }
}
copyDirectory('./src/service/fight_server/cmn/proto', './dist/service/fight_server/cmn/proto');
copyDirectory('./src/service/fight_server/cfg/json', './dist/service/fight_server/cfg/json');
//# sourceMappingURL=copyResources.js.map