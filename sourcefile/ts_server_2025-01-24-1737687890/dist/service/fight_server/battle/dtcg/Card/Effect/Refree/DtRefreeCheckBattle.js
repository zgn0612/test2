"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../../Data/DtEnum");
const DtEffect_1 = require("../DtEffect");
const DtEffectType_1 = require("../DtEffectType");
const DtEffectCreator_1 = require("../DtEffectCreator");
class DtRefreeCheckBattle extends DtEffectCreator_1.DtEffectCreator {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.RefreeCheckBattle);
        effect.SetTriggerAreaAllExceptDigitama();
        effect.SetEffect(this.Effect1, null);
        effect.SetEffect(this.Effect2, null);
        effect.SetEffectDirect();
    }
    Effect1() {
        let playerList = this.parent.parent.manager.GetAllPlayer();
        for (let i = 0; i < playerList.length; i++) {
            let battleArea = playerList[i].GetArea(DtEnum_1.DtAreaType.BATTLE_AREA);
            battleArea.ForeachCards((card) => {
                if (card.CardTypeIs(DtEnum_1.DtCardType.Monster) || card.CardTypeIs(DtEnum_1.DtCardType.DigiTama)) {
                    if (card.config.dp == 0 && card.CardInActionEffect(DtEnum_1.DtActionEffectType.CardCannotInBattle) == false) {
                        this.parent.parent.manager.OnCardCannotInBattleDestroy(card, card);
                    }
                    else if (card.GetLastDP() <= 0 && card.CardInActionEffect(DtEnum_1.DtActionEffectType.AtkZeroDestroy) == false) {
                        this.parent.parent.manager.OnCardAtkZeroDestroy(card, card);
                    }
                }
            });
        }
        return DtEffect_1.DtEffectResult.Next;
    }
    Effect2() {
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = DtRefreeCheckBattle;
//# sourceMappingURL=DtRefreeCheckBattle.js.map