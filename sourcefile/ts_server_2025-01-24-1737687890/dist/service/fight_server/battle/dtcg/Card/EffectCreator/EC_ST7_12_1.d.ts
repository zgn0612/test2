import { DtCardBase } from "../DtCardBase";
import DtEnhanceAmountDPCreatorts from "../Effect/DtEnhanceAmountDPCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
export default class EC_ST7_12_1 extends DtEnhanceAmountDPCreatorts {
    SetEffect(): void;
    protected OnAmountCardsSelects(cards: DtCardBase[]): void;
    protected OnAmountFilter(filter: DtSkillCardFiterMachine): void;
}
