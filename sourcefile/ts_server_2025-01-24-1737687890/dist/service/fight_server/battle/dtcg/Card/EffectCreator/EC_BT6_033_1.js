"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
class EC_BT6_033_1 extends DtEnhanceEffectCreatorts_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetCondition(this.Con);
        let option = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 5);
        option.SetSkillBehavior(this.OptionEffect, this.OptionChoose);
        effect.SetEffectActivateAsk();
    }
    Con() {
        return this.GetPlayer().areaDefense.CardCount() > 3;
    }
    OptionEffect(effect, skl) {
        let count = this.GetPlayer().areaDefense.CardCount();
        skl.SetChooseNum(count - 3);
        return DtEffect_1.DtEffectResult.WaitForChoose;
    }
    OptionChoose(uid) {
        let count = uid.toNumber() + 1;
        this.GetManager().OnDiscardDefenseCard(this.parent, this.GetPlayer(), count, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        this.ThisCardUseCost(-count);
    }
}
exports.default = EC_BT6_033_1;
//# sourceMappingURL=EC_BT6_033_1.js.map