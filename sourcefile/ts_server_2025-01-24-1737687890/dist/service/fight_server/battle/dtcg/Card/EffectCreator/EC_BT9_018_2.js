"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardChangeBattleState_1 = require("../Effect/TriggerCondition/DtConTriggerCardChangeBattleState");
const DtCardOperate_Destory_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Destory");
class EC_BT9_018_2 extends DtEnhanceEffectCreatorts_1.default {
    arr;
    SetEffect() {
        this.arr = new Array;
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardChangeBattleState);
        let ctri = new DtConTriggerCardChangeBattleState_1.DtConTriggerCardChangeBattleState(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtCardType.Monster, DtEnum_1.DtSkillTargetToPlayer.Opponent, DtEnum_1.DtCardBattleState.Reset);
        let ccaard = ctri.SetCardCon(DtEnum_1.DtCardType.Monster, DtEnum_1.DtCardColor.None, DtEnum_1.DtSkillTargetToPlayer.Opponent);
        ccaard.SetCondition(this, (card) => {
            return card.GetLastDP() <= 6000;
        });
        effect.SetTriggerCondition(ctri);
        effect.SetCheckSameChainCall(this.CheckSame);
        effect.SetEffectActivateAsk();
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.OneTurnOnce);
        effect.SetPlayerCancelActivateCall(() => {
            this.arr.length = 0;
        });
        this.Skill(effect);
        effect.SetEffect(this.ClearData, null);
    }
    CheckSame(a, b) {
        this.PreAddCard(a.card);
        this.PreAddCard(b.card);
        return a;
    }
    PreAddCard(card) {
        if (this.arr == null) {
            this.arr = new Array();
        }
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == card) {
                return;
            }
        }
        this.arr.push(card);
    }
    Skill(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchCustom((effect) => {
            let msg = effect.eventMsg;
            this.PreAddCard(msg.card);
            if (this.arr && this.arr.length > 0) {
                for (let i = this.arr.length - 1; i >= 0; i--) {
                    if (this.arr[i].whereAreaType != DtEnum_1.DtAreaType.BATTLE_AREA) {
                        this.arr.splice(i, 1);
                    }
                }
                return this.arr;
            }
            return null;
        });
        skill.SetOperate(new DtCardOperate_Destory_1.DtCardOperate_Destory());
    }
    ClearData() {
        this.arr.length = 0;
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT9_018_2;
//# sourceMappingURL=EC_BT9_018_2.js.map