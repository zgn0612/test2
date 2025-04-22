import { DtSkillReason } from "../../Data/DtEnum";
import { DtCardBase } from "../DtCardBase";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillPlayerChoose } from "../Skill/DtSkillPlayerChooseBase";
import { DtEffect } from "./DtEffect";
import { DtEffectType } from "./DtEffectType";
import DtEnhanceEffectCreatorts from "./DtEnhanceEffectCreatorts";
export default class DtEnhanceAmountDPCreatorts extends DtEnhanceEffectCreatorts {
    private maxDp;
    private curDp;
    private arrCards;
    private reason;
    CreateAmountDPEffect(type: DtEffectType, dp: number, reason: DtSkillReason): DtEffect;
    protected SetAmountDPEffect(effect: DtEffect, dp: number, stage: number, reason: DtSkillReason): DtSkillPlayerChoose;
    private initfunc;
    private AmountEffectAll;
    protected OnAmountFilter(filter: DtSkillCardFiterMachine): void;
    protected OnAmountCardsSelects(cards: Array<DtCardBase>): void;
    private GetMaxDP;
}
