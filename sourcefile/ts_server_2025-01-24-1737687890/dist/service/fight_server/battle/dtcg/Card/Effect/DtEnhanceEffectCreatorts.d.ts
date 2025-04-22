import { DtAreaType, DtSkillTargetToPlayer } from "../../Data/DtEnum";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtSkillCardOperateMachine } from "../Skill/DtSkillCardOperate/DtSkillCardOperateMachine";
import { DtSkillPlayerChoose } from "../Skill/DtSkillPlayerChooseBase";
import { DtSkillPlayerOption } from "../Skill/DtSkillPlayerOption";
import { DtEffect } from "./DtEffect";
import { DtEffectCreator } from "./DtEffectCreator";
import { DtEffectType } from "./DtEffectType";
export default class DtEnhanceEffectCreatorts extends DtEffectCreator {
    protected CreateNewBasicEffect(type: DtEffectType): DtEffect;
    protected SetSkillPlayerChoose_Single(effect: DtEffect, choosePlayer: DtSkillTargetToPlayer, stage: number): DtSkillPlayerChoose;
    protected SetSkillPlayerChoose_Single_CustomCount(effect: DtEffect, choosePlayer: DtSkillTargetToPlayer, count: number, stage: number): DtSkillPlayerChoose;
    protected SetSkillPlayerChoose_Mul(effect: DtEffect, choosePlayer: DtSkillTargetToPlayer, coun: number, stage: number): DtSkillPlayerChoose;
    protected SetSkillPlayerChoose_GreateEqual(effect: DtEffect, choosePlayer: DtSkillTargetToPlayer, coun: number, stage: number): DtSkillPlayerChoose;
    protected SetSkillPlayerChoose_Sort(effect: DtEffect, choosePlayer: DtSkillTargetToPlayer, stage: number): DtSkillPlayerChoose;
    protected SetSkillPlayerChooseOption(effect: DtEffect, choosePlayer: DtSkillTargetToPlayer, chooseCount: number, stage: number): DtSkillPlayerOption;
    protected CreateCommonArea_single(type: DtEffectType, effectToPlayer: DtSkillTargetToPlayer, area: DtAreaType): DtEffect;
    protected CreateCommonArea_Mul(type: DtEffectType, effectToPlayer: DtSkillTargetToPlayer, area: DtAreaType, count: number): DtEffect;
    protected OnCommonAreaSetFilter(mcFliter: DtSkillCardFiterMachine): void;
    protected OnCommonAreaSetOperate(mcOperate: DtSkillCardOperateMachine): void;
    protected OnCommonInitSkill(skil: DtSkillPlayerChoose): void;
    protected BattleNormalPlayMulCard(): boolean;
    protected BattleOnlayOnePlayCard(): boolean;
}
