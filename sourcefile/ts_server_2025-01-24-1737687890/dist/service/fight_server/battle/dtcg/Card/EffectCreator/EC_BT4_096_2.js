"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protoMsg_1 = require("../../../../cmn/proto/protoMsg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtGroupSkillPlayerBrowse_1 = require("../Skill/DtGroupSkillPlayerBrowse");
class EC_BT4_096_2 extends DtGroupBrowseCardsCreator_1.default {
    canAddCost = false;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetCondition(this.Con);
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_BOTH, DtEnum_1.DtAreaType.DECK);
        group.SetCards(this.bt4_096Deck);
        group.SetOperate(this.OperateSortToDeckTop, false);
        group.RegisterToEffect(effect);
        effect.SetEffect(this.EffectAddCost, null);
    }
    Con() {
        return this.GetPlayer().areaDeck.CardCount() > 0;
    }
    bt4_096Deck() {
        this.canAddCost = true;
        let cards = this.GetPlayer().areaDeck.GetTopCards(3);
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].ColorIs(DtEnum_1.DtCardColor.Black) == false) {
                this.canAddCost = false;
            }
            this.GetManager().OnCardMoveTo(this.parent, cards[i], DtEnum_1.DtAreaType.BROWSE, DtMessageData_1.DtProtoEnum_MoveReason.Brownse);
        }
        return cards;
    }
    EffectAddCost() {
        if (this.canAddCost) {
            this.ThisCardUseCost(-1);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT4_096_2;
//# sourceMappingURL=EC_BT4_096_2.js.map