import { DtCardBase } from "../DtCardBase";
import DtEnhanceAmountCostCreatorts from "../Effect/DtEnhanceAmountCostCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
export default class EC_BT8_070_1 extends DtEnhanceAmountCostCreatorts {
    SetEffect(): void;
    protected OnAmountFilter(filter: DtSkillCardFiterMachine): void;
    protected OnAmountCardsSelects(cards: DtCardBase[]): void;
}
