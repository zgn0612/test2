"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmActionEffect_Effecting_Degenerate_Start = void 0;
const Long_1 = require("../../../../../cmn/proto/Long");
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmActionEffect_BaseState_1 = require("./DtFsmActionEffect_BaseState");
const DtFsmActionEffect_Effecting_Degenerate_Effecting_1 = require("./DtFsmActionEffect_Effecting_Degenerate_Effecting");
const DtFsmActionEffect_End_1 = require("./DtFsmActionEffect_End");
class DtFsmActionEffect_Effecting_Degenerate_Start extends DtFsmActionEffect_BaseState_1.DtFsmActionEffect_BaseState {
    list;
    Enter() {
        let degenerateNum = this.GetMachine().param;
        let realDegenrate = this.GetMachine().receiveCard.CanDegenerate(degenerateNum);
        if (realDegenrate == 0) {
            this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
            return;
        }
        if (realDegenrate == 1) {
            this.GetMachine().effectParam = Long_1.Long.fromNumber(1);
            this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_Degenerate_Effecting_1.DtFsmActionEffect_Effecting_Degenerate_Effecting.name);
        }
        else {
            this.list = this.GetMachine().receiveCard.GetDegenerateChoose(degenerateNum);
            this.GetMachine().manager.Get2ClientMessageMgr().PlayerChoose(this.GetMachine().caster, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, this.list, 1, null, DtEnum_1.DtActionEffectType.Degenerate);
        }
    }
    OnExternalCall() {
        let playerChoose = this.GetMachine().effectParam;
        let card = this.GetCardInList(this.list, playerChoose);
        if (card) {
            this.GetMachine().effectParam = Long_1.Long.fromNumber(this.GetDegenrateNumFromList(card));
            this.GetMachine().ChangeState(DtFsmActionEffect_Effecting_Degenerate_Effecting_1.DtFsmActionEffect_Effecting_Degenerate_Effecting.name);
        }
        else {
            this.GetMachine().ChangeState(DtFsmActionEffect_End_1.DtFsmActionEffect_End.name);
            return;
        }
    }
    GetCardInList(list, uid) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].UidEquals(uid)) {
                return list[i];
            }
        }
        return null;
    }
    GetDegenrateNumFromList(card) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == card) {
                return i + 1;
            }
        }
        return -1;
    }
}
exports.DtFsmActionEffect_Effecting_Degenerate_Start = DtFsmActionEffect_Effecting_Degenerate_Start;
//# sourceMappingURL=DtFsmActionEffect_Effecting_Degenerate_Start.js.map