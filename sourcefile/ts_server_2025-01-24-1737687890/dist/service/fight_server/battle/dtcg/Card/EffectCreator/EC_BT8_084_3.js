"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectCreator_1 = require("../Effect/DtEffectCreator");
const DtEffectType_1 = require("../Effect/DtEffectType");
class EC_BT8_084_3 extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.InBattleArea);
        effect.SetEffect(this.BuffEffect, null);
        effect.SetEffectDirect();
    }
    BuffEffect(effect) {
        effect.AddNewBuffTo(this.GetBuff_ChangeDP(this.DpBuffCon), this.parent);
        effect.AddNewBuffTo(this.GetBuff_SetColor(this.ColorBuffRed), this.parent);
        effect.AddNewBuffTo(this.GetBuff_SetColor(this.ColorBuffBlack), this.parent);
        effect.AddNewBuffTo(this.GetBuff_SetColor(this.ColorBuffBlue), this.parent);
        effect.AddNewBuffTo(this.GetBuff_SetColor(this.ColorBuffGreen), this.parent);
        effect.AddNewBuffTo(this.GetBuff_SetColor(this.ColorBuffYellow), this.parent);
        effect.AddNewBuffTo(this.GetBuff_SetColor(this.ColorBuffPurple), this.parent);
        return DtEffect_1.DtEffectResult.Next;
    }
    DpBuffCon() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        if (this.parent.ColorCount() >= 4) {
            return 4000;
        }
        return 0;
    }
    ColorBuffRed() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let hasred = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Red);
        });
        if (hasred) {
            return DtEnum_1.DtCardColor.Red;
        }
        return 0;
    }
    ColorBuffBlack() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let hasred = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Black);
        });
        if (hasred) {
            return DtEnum_1.DtCardColor.Black;
        }
        return 0;
    }
    ColorBuffBlue() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let hasred = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Blue);
        });
        if (hasred) {
            return DtEnum_1.DtCardColor.Blue;
        }
        return 0;
    }
    ColorBuffGreen() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let hasred = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Green);
        });
        if (hasred) {
            return DtEnum_1.DtCardColor.Green;
        }
        return 0;
    }
    ColorBuffPurple() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let hasred = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Purple);
        });
        if (hasred) {
            return DtEnum_1.DtCardColor.Purple;
        }
        return 0;
    }
    ColorBuffYellow() {
        if (this.GetPlayer().IsThisPlayerRound() == false) {
            return 0;
        }
        let hasred = this.parent.CheckOriginListWithCondition((card) => {
            return card.ColorIs(DtEnum_1.DtCardColor.Yellow);
        });
        if (hasred) {
            return DtEnum_1.DtCardColor.Yellow;
        }
        return 0;
    }
}
exports.default = EC_BT8_084_3;
//# sourceMappingURL=EC_BT8_084_3.js.map