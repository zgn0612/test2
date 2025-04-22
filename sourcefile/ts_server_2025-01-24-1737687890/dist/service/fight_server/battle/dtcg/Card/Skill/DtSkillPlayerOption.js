"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillPlayerOption = void 0;
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtSkillBase_1 = require("./DtSkillBase");
class DtSkillPlayerOption extends DtSkillBase_1.DtSkillBase {
    CallObj;
    count;
    selecter;
    runEvent;
    chooseEvent;
    constructor(effect, stage, callobj, count, selecter) {
        super(effect, stage);
        this.CallObj = callobj;
        this.count = count;
        this.selecter = selecter;
    }
    OnSkillRun() {
        if (this.runEvent) {
            let result = this.runEvent.call(this.CallObj, this.parentEffect, this);
            if (result == DtEffect_1.DtEffectResult.Next) {
                return DtEffect_1.DtEffectResult.Next;
            }
        }
        this.Get2ClientMessageMgr().PlayerSelectOptions(this.GetChoosePlayer(), this.count, this.parentEffect, this.effectStage);
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    GetChoosePlayer() {
        if (this.selecter == DtEnum_1.DtSkillTargetToPlayer.Self) {
            return this.GetParentPlayer();
        }
        else {
            return this.GetParentPlayer().GetOppPlayer();
        }
    }
    OnPlayerChooseOne(uid) {
        if (this.chooseEvent) {
            this.chooseEvent.call(this.CallObj, uid, this.parentEffect, this);
        }
    }
    CheckSkillNeedChoose() {
        return true;
    }
    SetChooseNum(num) {
        this.count = num;
    }
    SetSkillBehavior(run, choose) {
        this.runEvent = run;
        this.chooseEvent = choose;
    }
}
exports.DtSkillPlayerOption = DtSkillPlayerOption;
//# sourceMappingURL=DtSkillPlayerOption.js.map