import { DtCardBase } from "../DtCardBase";
import DtEnhanceAmountCostCreatorts from "../Effect/DtEnhanceAmountCostCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
export default class EC_BT8_105_1 extends DtEnhanceAmountCostCreatorts {
    SetEffect(): void;
    protected OnAmountCardsSelects(cards: DtCardBase[]): void;
    protected OnAmountFilter(filter: DtSkillCardFiterMachine): void;
}
