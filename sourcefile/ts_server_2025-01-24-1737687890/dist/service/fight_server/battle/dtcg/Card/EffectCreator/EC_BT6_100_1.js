"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtCardOperate_MoveTo_Defense_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Defense");
const DtCardOperate_MoveTo_Hand_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Hand");
class EC_BT6_100_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        this.SetCommonBrowseFromDeckThenBottom(effect, 2, 2, (skill, idx) => {
            if (idx == 0) {
                skill.SetOperate(new DtCardOperate_MoveTo_Defense_1.DtCardOperate_MoveTo_Defense());
            }
            else {
                skill.SetOperate(new DtCardOperate_MoveTo_Hand_1.DtCardOperate_MoveTo_Hand());
            }
        });
        effect.SetEffect(() => {
            this.GetManager().OnMagicMoveToBattle(this.parent, this.parent);
            return DtEffect_1.DtEffectResult.Next;
        }, null);
    }
}
exports.default = EC_BT6_100_1;
//# sourceMappingURL=EC_BT6_100_1.js.map