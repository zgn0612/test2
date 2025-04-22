import { DtCardBase } from "../DtCardBase";
import { DtGroupSkillPlayerBrowse } from "../Skill/DtGroupSkillPlayerBrowse";
import { DtSkillPlayerBrowse } from "../Skill/DtSkillPlayerBrowse";
import { DtEffect } from "./DtEffect";
import DtEnhanceEffectCreatorts from "./DtEnhanceEffectCreatorts";
export default class DtGroupBrowseCardsCreator extends DtEnhanceEffectCreatorts {
    private deckBrowseCount;
    SetCommonBrowseFromDeckThenBottom(effect: DtEffect, browseCount: number, getCardCount: number, func: (skill: DtSkillPlayerBrowse, index: number) => void): DtGroupSkillPlayerBrowse;
    SetCommonBrowseFromDeckThenDeckTop(effect: DtEffect, browseCount: number, getCardCount: number, func: (skill: DtSkillPlayerBrowse, index: number) => void): DtGroupSkillPlayerBrowse;
    protected ChangeBrowseCount(number: number): void;
    protected GetDeckCards(): Array<DtCardBase>;
    private OperateSortToDeck;
    protected OperateSortToDeckTop(skill: DtSkillPlayerBrowse): void;
    protected SetCommonBrowseFrommDeckThenDiscard(effect: DtEffect, browseCount: number, getCardCount: number, func: (skill: DtSkillPlayerBrowse, index: number) => void): DtGroupSkillPlayerBrowse;
    private OperateDiscard;
    protected CheckALLSelfDefense(effect: DtEffect, getCardCount: number, func: (skill: DtSkillPlayerBrowse, index: number) => void): DtGroupSkillPlayerBrowse;
    private GetDefenseCards;
    SetGetAllBrowseFromDeckThenBottom(effect: DtEffect, browseCount: number, func: (skill: DtSkillPlayerBrowse) => void): DtGroupSkillPlayerBrowse;
}
