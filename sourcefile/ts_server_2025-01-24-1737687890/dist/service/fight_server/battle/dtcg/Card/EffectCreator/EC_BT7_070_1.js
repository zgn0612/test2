"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_Discard_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_Discard");
class EC_BT7_070_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnEvolution);
        this.SetCommonBrowseFromDeckThenBottom(effect, 5, 5, (skl, idx) => {
            skl.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Role));
            skl.SetOperate(new DtCardOperate_Discard_1.DtCardOperate_Discard());
        });
        effect.SetEffectActivateAsk();
    }
}
exports.default = EC_BT7_070_1;
//# sourceMappingURL=EC_BT7_070_1.js.map