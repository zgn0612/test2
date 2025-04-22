"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
class EC_BT7_004_O_1 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnWhenAttacking);
        effect.SetCondition(this.Con);
        this.SetCommonBrowseFromDeckThenBottom(effect, 1, 1, (skil, idx) => {
        });
        let opsk = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        opsk.SetSkillBehavior(null, this.OnChoose);
    }
    Con() {
        return this.GetPlayer().areaDeck.CardCount() > 0;
    }
    OnChoose(uid, effect) {
        let card = this.GetPlayer().areaBrowse.GetTopCard();
        if (card) {
            let num = uid.toNumber();
            if (num == 0) {
                this.GetManager().OnCardMoveTo(this.parent, card, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
            else {
                this.GetManager().OnCardMoveToBottom(this.parent, card, DtEnum_1.DtAreaType.DECK, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
            }
        }
    }
}
exports.default = EC_BT7_004_O_1;
//# sourceMappingURL=EC_BT7_004_O_1.js.map