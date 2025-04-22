"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_030_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        effect.SetEffect(this.Effect1, null);
        effect.SetEffect(this.Effect2, null);
    }
    Effect1() {
        let count = this.parent.CheckOriginCountWithCondition((card) => {
            return card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_505);
        });
        this.GetOppPlayer().areaInBattle.ForeachCards((card) => {
            let oris = card.GetOriginDigimonList();
            let tc = count;
            if (count > oris.length) {
                tc = oris.length;
            }
            for (let i = 0; i < tc; i++) {
                this.GetManager().OnCardDiscardEvoOriginCard(this.parent, card, oris[oris.length - 1 - i], DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        });
        return DtEffect_1.DtEffectResult.Next;
    }
    Effect2() {
        let count = this.GetOppPlayer().areaInBattle.GetCountWithMeetCondition((card) => {
            return card.GetOriginDigimonCount() == 0;
        });
        this.GetManager().OnDrawCard(this.parent, count * 2, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT7_030_1;
//# sourceMappingURL=EC_BT7_030_1.js.map