"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtEffectType_1 = require("../Effect/DtEffectType");
const DtEnhanceEffectCreatorts_1 = require("../Effect/DtEnhanceEffectCreatorts");
const DtSkillBase_1 = require("../Skill/DtSkillBase");
const DtCardFilter_CardType_1 = require("../Skill/DtSkillCardFilter/DtCardFilter_CardType");
const DtCardOperate_PlayCard_FromCustomOrigin_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_PlayCard_FromCustomOrigin");
const DtCardOperate_SpecialOperate_1 = require("../Skill/DtSkillCardOperate/DtCardOperate_SpecialOperate");
class EC_BT7_097_1 extends DtEnhanceEffectCreatorts_1.default {
    battleCard;
    SetEffect() {
        let effect = this.GetNewEffect();
        effect.SetTriggerType(DtEffectType_1.DtEffectType.OnUseEffect);
        effect.SetInitFunc(this.initfunc);
        this.Skill1(effect);
        this.Skill2(effect);
    }
    initfunc() {
        this.battleCard = null;
    }
    Skill1(effect) {
        let skill = this.SetSkillPlayerChoose_Single(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 1);
        skill.GetMachineFilter().GetCardsWitchAreaData(DtEnum_1.DtSkillTargetToPlayer.Self, DtEnum_1.DtAreaType.BATTLE_AREA);
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_SpecialOperate_1.DtCardOperate_SpecialOperate(this, (card) => {
            this.battleCard = card;
        }, DtCardOperate_SpecialOperate_1.DtSpecialOpType.NEED_NEXT_STEP));
    }
    Skill2(effect) {
        let skill = this.SetSkillPlayerChoose_Mul(effect, DtEnum_1.DtSkillTargetToPlayer.Self, 2, 2);
        skill.type = DtSkillBase_1.DtSkillRunType.Perv_Fail_Then_Over;
        skill.GetChooseMachine().SetInitEvent(this, (choose) => {
            let count = this.GetPlayer().GetBattleCardsReLimit();
            if (count > 1) {
                choose.SetActive(true);
                choose.ChangeTypeNum(2);
            }
            else if (count == 1) {
                choose.SetActive(true);
                choose.ChangeTypeNum(1);
            }
            else {
                choose.SetActive(false);
            }
        });
        skill.GetMachineFilter().GetCardsWitchCustom((effec) => {
            return this.battleCard.GetOriginDigimonList();
        });
        skill.SetFilter(new DtCardFilter_CardType_1.DtCardFilter_CardType(DtEnum_1.DtCardType.Monster));
        skill.SetOperate(new DtCardOperate_PlayCard_FromCustomOrigin_1.DtCardOperate_PlayCard_FromCustomOrigin(false, true, this, () => { return this.battleCard; }));
    }
}
exports.default = EC_BT7_097_1;
//# sourceMappingURL=EC_BT7_097_1.js.map