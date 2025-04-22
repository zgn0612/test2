import { DtCardColor } from "../../Data/DtEnum";
import { DtSkillBase } from "../Skill/DtSkillBase";
import { DtEffect, DtEffectResult } from "./DtEffect";
import DtEnhanceEffectCreatorts from "./DtEnhanceEffectCreatorts";
export default class DtDecoyEffectCreator extends DtEnhanceEffectCreatorts {
    private color;
    CreateDecoyEffect(...color: DtCardColor[]): void;
    protected SetDecoyEffect(effect: DtEffect, ...color: DtCardColor[]): void;
    private EffectBuff;
    private GetCards;
    private TriCon;
    protected EffectDestorySelf(effect: DtEffect, skill: DtSkillBase): DtEffectResult;
}
