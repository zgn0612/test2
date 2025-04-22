"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protoMsg_1 = require("../../../../cmn/proto/protoMsg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtEffect_1 = require("../Effect/DtEffect");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtGroupSkillPlayerBrowse_1 = require("../Skill/DtGroupSkillPlayerBrowse");
const DtCardOperate_DrawCardFromDefense_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_DrawCardFromDefense");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
class EC_BT3_034_1 extends DtGroupBrowseCardsCreator_1.default {
    group;
    SetEffect() {
        let effect = this.CreateNewBasicEffect(DtEffectType_1.DtEffectType.OnPlay);
        effect.SetCondition(() => {
            return this.GetPlayer().areaDefense.CardCount() > 0;
        });
        this.group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.STPT_SELF, DtEnum_1.DtAreaType.DEFENSE);
        this.group.SetCards(this.GetTopDefenseCard);
        this.group.SetOperate((skill) => {
            skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, true));
            skill.SetOperate(new DtCardOperate_DrawCardFromDefense_1.DtCardOperate_DrawCardFromDefense());
        });
        this.group.RegisterToEffect(effect);
        effect.SetEffect(this.Draw, null);
    }
    GetTopDefenseCard() {
        return this.GetPlayer().areaDefense.GetTopCards(1);
    }
    Draw() {
        let cards = this.group.GetHasSuccesscards();
        if (cards && cards.length > 0) {
            this.GetManager().OnDrawCard(this.parent, 1, DtMessageData_1.DtProtoEnum_MoveReason.CardEffect);
        }
        return DtEffect_1.DtEffectResult.Next;
    }
}
exports.default = EC_BT3_034_1;
//# sourceMappingURL=EC_BT3_034_1.js.map