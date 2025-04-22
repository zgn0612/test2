"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protoMsg_1 = require("../../../../cmn/proto/protoMsg");
const DtEnum_1 = require("../../Data/DtEnum");
const DtMessageData_1 = require("../../Message/DtMessageData");
const DtGroupBrowseCardsCreator_1 = require("../Effect/DtGroupBrowseCardsCreator");
const DtGroupSkillPlayerBrowse_1 = require("../Skill/DtGroupSkillPlayerBrowse");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_Custom_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_Custom");
const DtCardOperate_MoveToBottom_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveToBottom");
const DtCardOperate_MoveTo_Deck_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_MoveTo_Deck");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
const DtPlayerChooseBase_1 = require("../Skill/DtSkillPlayerChoose/DtPlayerChooseBase");
class EC_ST13_16_2 extends DtGroupBrowseCardsCreator_1.default {
    SetEffect() {
        let effect = this.CreateMagicDelayEffect();
        this.ChangeBrowseCount(4);
        let group = new DtGroupSkillPlayerBrowse_1.DtGroupSkillPlayerBrowse(effect, this, protoMsg_1.DcgProto.E_SHOW_TO_PLAYER_TYPE.SIPT_BOTH_CHECK, DtEnum_1.DtAreaType.DECK);
        group.SetCards(this.GetDeckCards);
        for (let i = 0; i < 1; i++) {
            group.SetOperate((skill) => {
                skill.SetChooseMachine(new DtPlayerChooseBase_1.DtPlayerChooseBase(skill, DtEnum_1.DtSkillTargetToPlayer.Self, DtMessageData_1.DtProtoEnum_Compare.EQUAL_CARD_COUNT, 1, false));
                skill.SetFilter(new DtCardFilter_Custom_1.DtCardFilter_Custom(this, () => { return false; }));
                skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, () => { }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.SPECIAL_EFFECT));
            });
        }
        group.RegisterToEffect(effect);
        let opsk = this.SetSkillPlayerChooseOption(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 1);
        opsk.SetSkillBehavior(null, this.OptionChoose);
        this.Skill2(effect);
        this.Skill3(effect);
    }
    OptionChoose(uid, effect) {
        let type = uid.toNumber();
        if (type == 0) {
            effect.SetToStateStepWithStageId(2);
        }
        else {
            effect.SetToStateStepWithStageId(3);
        }
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Sort(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BROWSE);
        skill.SetOperate(new DtCardOperate_MoveToBottom_1.DtCardOperate_MoveToBottom(DtEnum_1.DtAreaType.DECK));
    }
    Skill3(effect) {
        let skill = this.SetSkillPlayerChoose_Sort(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 3);
        skill.type = DtSkillBase_1.DtSkillRunType.Activate_Then_Over;
        skill.mulNeedReverse = true;
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BROWSE);
        skill.SetOperate(new DtCardOperate_MoveTo_Deck_1.DtCardOperate_MoveTo_Deck());
    }
}
exports.default = EC_ST13_16_2;
//# sourceMappingURL=EC_ST13_16_2.js.map