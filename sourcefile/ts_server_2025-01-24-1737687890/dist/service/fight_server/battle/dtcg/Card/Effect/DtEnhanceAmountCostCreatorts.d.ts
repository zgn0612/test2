import { DtCardBase } from "../DtCardBase";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
import { DtEffect } from "./DtEffect";
import { DtEffectType } from "./DtEffectType";
import DtEnhanceEffectCreatorts from "./DtEnhanceEffectCreatorts";
export default class DtEnhanceAmountCostCreatorts extends DtEnhanceEffectCreatorts {
    private maxCost;
    private curCost;
    private arrCards;
    CreateAmountCostEffect(type: DtEffectType, cost: number): DtEffect;
    private initfunc;
    private AmountEffectAll;
    protected OnAmountFilter(filter: DtSkillCardFiterMachine): void;
    protected OnAmountCardsSelects(cards: Array<DtCardBase>): void;
}
