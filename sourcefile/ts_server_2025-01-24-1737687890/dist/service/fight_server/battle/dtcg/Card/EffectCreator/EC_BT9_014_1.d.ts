import { DtCardBase } from "../DtCardBase";
import DtEnhanceAmountDPCreatorts from "../Effect/DtEnhanceAmountDPCreatorts";
import { DtSkillCardFiterMachine } from "../Skill/DtSkillCardFilter/DtSkillCardFiterMachine";
export default class EC_BT9_014_1 extends DtEnhanceAmountDPCreatorts {
    SetEffect(): void;
    private EffCost;
    protected OnAmountFilter(filter: DtSkillCardFiterMachine): void;
    protected OnAmountCardsSelects(cards: DtCardBase[]): void;
}
