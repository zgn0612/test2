"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreateGlobalTimeEffectToOther_1 = require("../Effect/DtEffectCreateGlobalTimeEffectToOther");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGlobalBuff_ConditionInt_1 = require("../GlobalBuff/DtGlobalBuff_ConditionInt");
class EC_BT5_103_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetEffect(this.Effect, null);
    }
    Effect() {
        let buff = new DtGlobalBuff_ConditionInt_1.DtGlobalBuff_ConditionInt(this.parent, DtEnum_1.DtBuffType.CHANGE_DP, this.BuffCon, this);
        buff.effectType = DtEnum_1.DtBuffEffectToType.Self;
        buff.effectArea = DtEnum_1.DtAreaType.BATTLE_AREA;
        buff.SetBuffDurationType(DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1);
        this.GetManager().globalBuffMgr.AddCardAreaBuff(buff);
        this.CreateGlobalEffect(new EC_BT5_103_1_ADD_1());
        return DtEffect_1.DtEffectResult.Next;
    }
    BuffCon(buff, card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            let hasRestart = card.HasEffect(DtEnum_1.EFFECT_NAME.RESTART);
            if (hasRestart) {
                return 1000;
            }
        }
        return 0;
    }
}
exports.default = EC_BT5_103_1;
class EC_BT5_103_1_ADD_1 extends DtEffectCreateGlobalTimeEffectToOther_1.default {
    SetEffect() {
        this.CreateEffectCreateEffectToOther(DtEnum_1.DtBuffDurationType.RoundOverOpponent, 1, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnCondition(card) {
        if (card.CardTypeIs(DtEnum_1.DtCardType.Monster)) {
            let hasRestart = card.HasEffect(DtEnum_1.EFFECT_NAME.RESTART);
            if (hasRestart) {
                return true;
            }
        }
        return false;
    }
    OnGetEffect() {
        return new EC_BT5_103_1_ADD_2();
    }
}
class EC_BT5_103_1_ADD_2 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        this.SetNormalBlockerEffect();
    }
}
//# sourceMappingURL=EC_BT5_103_1.js.map