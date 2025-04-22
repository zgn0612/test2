import { DtMsg_BeforePlay } from "../../Data/DtEventMsg";
import { DtEffect, DtEffectOtherType } from "./DtEffect";
import DtEnhanceEffectCreatorts from "./DtEnhanceEffectCreatorts";
export default class DtEffectChangePlayCostCreator extends DtEnhanceEffectCreatorts {
    CreateBeforePlayChangeCost(isAsk: boolean, funcBefore: (effect: DtEffect) => void): void;
    private BeforePlayCondition;
    protected OnBeforePlayCon(msg: DtMsg_BeforePlay): boolean;
    private BeforeEffect;
    protected OnGetChangeCost(): number;
    private PreCon;
    private PreEffect;
    CreateBeforePlaySetCost(isAsk: boolean, funcBefore: (effect: DtEffect) => void): void;
    private BeforeSetEffect;
    private PreSetEffect;
    CreateTriggerPlayChangeCost(isAsk: boolean, funcBefore: (effect: DtEffect) => void, otherType: DtEffectOtherType): void;
    protected OnSetEffectTriggerCondition(effect: DtEffect): void;
}
