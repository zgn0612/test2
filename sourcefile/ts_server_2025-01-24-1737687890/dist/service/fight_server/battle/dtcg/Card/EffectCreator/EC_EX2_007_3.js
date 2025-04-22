"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectChangePlayCostCreator_1 = require("../Effect/DtEffectChangePlayCostCreator");
const DtConTriggerBeforePlay_1 = require("../Effect/TriggerCondition/DtConTriggerBeforePlay");
class EC_EX2_007_3 extends DtEffectChangePlayCostCreator_1.default {
    SetEffect() {
        this.CreateTriggerPlayChangeCost(false, null, DtEffect_1.DtEffectOtherType.OneTurnOnce);
    }
    OnGetChangeCost() {
        return -this.parent.GetOriginDigimonCount();
    }
    OnBeforePlayCon(msg) {
        return true;
    }
    OnSetEffectTriggerCondition(effect) {
        let coni = new DtConTriggerBeforePlay_1.DtConTriggerBeforePlay(DtEnum_1.DtEffectRoundValid.Self);
        let ccard = coni.SetCardCon(DtEnum_1.DtCardType.None, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Self);
        ccard.SetFeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_40);
        effect.SetTriggerCondition(coni);
    }
}
exports.default = EC_EX2_007_3;
//# sourceMappingURL=EC_EX2_007_3.js.map