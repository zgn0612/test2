"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
class EC_BT7_085_O_1 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.BuffEffect, null);
        effect.SetEffectDirect();
    }
    BuffEffect(effect) {
        effect.AddNewBuffTo(this.GetBuff_ChangeDP(this.DpBuffCon), this.parent);
        effect.AddNewBuffTo(this.GetBuff_ChangePower(this.PowerBuffCon), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
    DpBuffCon() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        return 2000;
    }
    PowerBuffCon() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        if (this.parent.GetLastDP() >= 10000) {
            return 1;
        }
        return 0;
    }
}
exports.default = EC_BT7_085_O_1;
//# sourceMappingURL=EC_BT7_085_O_1.js.map