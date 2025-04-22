"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEffect_1 = require("./DtEffect");
const DtEffectType_1 = require("./DtEffectType");
const DtEffectCreator_1 = require("./DtEffectCreator");
class DtCreateEffectToSelfCreator extends DtEffectCreator_1.DtEffectCreator {
    addCreator;
    CreateEffectToSelfEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.TriggerBattleFieldInfoChange);
        effect.SetOtherType(DtEffect_1.DtEffectOtherType.Immediately);
        effect.SetEffect(this.CreateEffect, null);
        effect.SetEffectDirect();
    }
    CreateEffect() {
        let effCon = this.OnEffectCon();
        if (effCon) {
            if (this.parent.CheckHasEffectByCreator(this.addCreator) == false) {
                this.addCreator = this.CreateEffectTo(this.OnGetEffectCreator(), this.parent, true);
                if (this.isOrigin && this.originCard) {
                    this.addCreator.originCard = this.originCard;
                }
                else {
                    this.addCreator.originCard = this.parent;
                }
            }
        }
        else {
            if (this.addCreator) {
                this.addCreator.Clear();
                this.addCreator = null;
            }
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    OnEffectCon() {
        return false;
    }
    OnGetEffectCreator() {
        return null;
    }
}
exports.default = DtCreateEffectToSelfCreator;
//# sourceMappingURL=DtCreateEffectToSelfCreator.js.map