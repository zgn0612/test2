"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIRunGmCmds = exports.AIBattleStartIfChangeCards = exports.AIDefenseChoose = exports.AIChooseOption = exports.AIChooseData = exports.AIEffectActivateData = exports.ATemplateData = void 0;
class ATemplateData {
    needLog = false;
}
exports.ATemplateData = ATemplateData;
class AIEffectActivateData extends ATemplateData {
    data;
}
exports.AIEffectActivateData = AIEffectActivateData;
class AIChooseData extends ATemplateData {
    choose;
    data;
    cancel;
}
exports.AIChooseData = AIChooseData;
class AIChooseOption extends ATemplateData {
    option;
    set = 0;
}
exports.AIChooseOption = AIChooseOption;
class AIDefenseChoose extends ATemplateData {
    choose;
    data;
}
exports.AIDefenseChoose = AIDefenseChoose;
class AIBattleStartIfChangeCards extends ATemplateData {
    aidecide = 0;
}
exports.AIBattleStartIfChangeCards = AIBattleStartIfChangeCards;
class AIRunGmCmds extends ATemplateData {
    cmds;
    constructor() {
        super();
        this.cmds = new Array();
    }
}
exports.AIRunGmCmds = AIRunGmCmds;
//# sourceMappingURL=ATemplateData.js.map