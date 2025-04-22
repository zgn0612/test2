import { DtBuffDurationType, DtBuffEffectToType, DtBuffType, DtEffectRoundValid } from "../../Data/DtEnum";
import { DtBattleManager } from "../../DtBattleManager";
import { DtPlayer } from "../../Player/DtPlayer";
import { DtCardBase } from "../DtCardBase";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
import { DtGlobalBuffMgr } from "./DtGlobalBuffMgr";
export declare class DtGlobalBuffBase {
    creator: DtEffectCreator;
    caster: DtCardBase;
    parent: DtGlobalBuffMgr;
    effectPlayer: DtPlayer;
    effectCard: DtCardBase;
    effectType: DtBuffEffectToType;
    type: DtBuffType;
    roundValid: DtEffectRoundValid;
    buffDurationType: DtBuffDurationType;
    buffDurationParam: number;
    private durationComponent;
    constructor(caster: DtCardBase, creator: DtEffectCreator);
    protected CanEffect(card: DtCardBase, type: DtBuffType): boolean;
    CheckCardInt(card: DtCardBase, type: DtBuffType): number;
    IsAffected(card: DtCardBase): boolean;
    Condition(card: DtCardBase, type: DtBuffType): boolean;
    SetBuffDurationType(type: DtBuffDurationType, param: number): DtGlobalBuffBase;
    SetBuffListen(manager: DtBattleManager): void;
    private RemoveBuff;
    Clear(): void;
}
