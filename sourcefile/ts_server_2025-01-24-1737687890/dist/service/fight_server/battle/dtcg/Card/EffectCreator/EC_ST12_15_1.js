"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtCardDigimonType_1 = require("../../Data/DtCardDigimonType");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_ST12_15_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetCommonBrowseFrommDeckThenDiscard(effect, 3, 1, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, (card) => {
                return card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10674) || card.FeatureIs(DtCardDigimonType_1.DtCardDigimonType.type_116) || card.NameIs(DtCardDigimonType_1.DtCardDigimonType.name_type_10637);
            }));
            skl.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
        });
        effect.SetEffect(() => {
            this.GetManager().OnMagicMoveToBattle(this.parent, this.parent);
            return DtEffect_1.DtEffectResult.Next;
        }, null);
    }
}
exports.default = EC_ST12_15_1;
//# sourceMappingURL=EC_ST12_15_1.js.map