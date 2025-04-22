"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtConTriggerCardBeforeActEffect_1 = require("../Effect/TriggerCondition/DtConTriggerCardBeforeActEffect");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT9_012_O_1 extends DtEnhanceEffectCreatorts_1.default {
    card;
    card2;
    SetEffect() {
        let e3 = this.GetNewEffect();
        e3.SetTriggerArea(DtEnum_1.DtAreaType.BATTLE_AREA);
        e3.SetTriggerType(DtEffectType_1.DtEffectType.TriggerCardBeforeActEffect);
        let contr = new DtConTriggerCardBeforeActEffect_1.DtConTriggerCardBeforeActEffect(DtEnum_1.DtEffectRoundValid.Both, DtEnum_1.DtActionEffectType.EffectDestroy, DtEnum_1.DtActionEffectType.BattleReturnHand, DtEnum_1.DtActionEffectType.BattleReturnDeck);
        contr.SetCondition(this, (msg) => {
            return msg.ReceiveHas(this.parent);
        });
        e3.SetTriggerCondition(contr);
        e3.SetEffectActivateAsk();
        e3.SetInitFunc(() => {
            this.card = null;
            this.card2 = null;
        });
        e3.SetCondition(this.Con);
        this.SetSkill1(e3);
        this.SetSkill2(e3);
        e3.SetEffect(this.EffectBuff, null);
        e3.SetEffect(this.EffectBuff2, null);
    }
    Con() {
        if (this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10001) || this.parent.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10008)) {
            let ori = this.parent.GetOriginDigimonList();
            if (ori.length > 1) {
                let c = [0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 0; i < ori.length; i++) {
                    let lv = ori[i].GetCardConfigLv();
                    if (lv > 0) {
                        c[lv]++;
                    }
                }
                for (let i = 0; i < c.length; i++) {
                    if (c[i] > 1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    SetSkill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            let clv = card.GetCardConfigLv();
            if (clv > 0) {
                return this.parent.CheckOriginListWithCondition((o) => { return o != card && o.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, clv); });
            }
            return false;
        }));
        skill.GetMachineOperate().SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.card = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.CAL_NUMBER));
    }
    SetSkill2(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsFromSelfOrigin();
        skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
            return card != this.card && card.CardLvIs(DtEnum_1.DtFilterCompare.EQUAL, this.card.GetCardConfigLv());
        }));
        skill.GetMachineOperate().SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => { this.card2 = card; }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.CAL_NUMBER));
    }
    EffectBuff(effect) {
        if (this.card && this.card2) {
            this.GetManager().OnCardDiscardEvoOriginCard(this.parent, this.parent, this.card, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            this.GetManager().OnCardDiscardEvoOriginCard(this.parent, this.parent, this.card2, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    EffectBuff2(effect) {
        let oris = this.parent.GetOriginDigimonList();
        for (let i = 0; i < oris.length; i++) {
            if (oris[i] == this.card || oris[i] == this.card2) {
                return DtEffect_1.DtEffectResult.Next;
            }
        }
        this.GetManager().GetCurrentFsmActionManger().ForceOverEffect(this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT9_012_O_1;
//# sourceMappingURL=EC_BT9_012_O_1.js.map