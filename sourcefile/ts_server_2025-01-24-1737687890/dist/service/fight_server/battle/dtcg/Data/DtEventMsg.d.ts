/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DtBuffSpecialEvoSeen } from "../Card/Buff/DtBuffSpecialEvoCondition";
import { DtCardBase } from "../Card/DtCardBase";
import { DtFsmActionEffect } from "../Fsm/ActionEffect/DtFsmActionEffect";
import { DtFsmAttackType } from "../Fsm/Attack/DtFsmAttackEnum";
import { DtFsmUseCard } from "../Fsm/UseCard/DtFsmUseCard";
import { DtProtoEnum_MoveReason } from "../Message/DtMessageData";
import { DtPlayer } from "../Player/DtPlayer";
import { DtActionEffectType, DtAreaType, DtCardBattleState, DtEvolutionType } from "./DtEnum";
export declare class DtMsgBase {
    isEvent: boolean;
}
export declare class DtMsg_OnPlay extends DtMsgBase {
    card: DtCardBase;
    from: DtAreaType;
    reason: DtProtoEnum_MoveReason;
    constructor(card: DtCardBase, type: DtProtoEnum_MoveReason, from: DtAreaType);
}
export declare class DtMsg_OnActionEffect extends DtMsgBase {
    card: DtCardBase;
    effectType: DtActionEffectType;
    casterCard: DtCardBase;
    extraOtherCard: DtCardBase;
    constructor(card: DtCardBase, reason: DtActionEffectType);
    ReasonIsBeDestory(): boolean;
}
export declare class DtMsg_OnBeforeActionEffect extends DtMsgBase {
    rEffects: Array<DtFsmActionEffect>;
    effectType: DtActionEffectType;
    casterCard: DtCardBase;
    constructor(card: Array<DtFsmActionEffect>, reason: DtActionEffectType);
    ReasonIsBeDestory(): boolean;
    ReceiveHas(card: DtCardBase): boolean;
    GetEffWithCard(card: DtCardBase): DtFsmActionEffect;
}
export declare class DtMsg_BattleInfo extends DtMsgBase {
    atkCard: DtCardBase;
    defCard: DtCardBase;
    atkType: DtFsmAttackType;
    constructor(atk: DtCardBase, def: DtCardBase);
    HasInBattle(card: DtCardBase): boolean;
    GetEnemy(card: DtCardBase): DtCardBase;
}
export declare class DtMsg_HitterChoose extends DtMsgBase {
    atkCard: DtCardBase;
    atkType: DtFsmAttackType;
    defenseCard: DtCardBase;
    private listDef;
    constructor(atk: DtCardBase, defCard: DtCardBase, type: DtFsmAttackType);
    SetDefense(card: DtCardBase): void;
    GetDefense(): Array<DtCardBase>;
}
export declare class DtMsg_RoundChange extends DtMsgBase {
    playerId: Long;
    roundNum: number;
    constructor(playerId: Long, roundNum: number);
}
export declare class DtMsg_DigimonEvolution extends DtMsgBase {
    evoCard: DtCardBase;
    oriCard: DtCardBase;
    bottomCard: DtCardBase;
    type: DtEvolutionType;
    cost: number;
    seen: DtBuffSpecialEvoSeen;
    constructor(evoCard: DtCardBase, originCard: DtCardBase, cost: number, type: DtEvolutionType, buffSeen: DtBuffSpecialEvoSeen);
}
export declare class DtMsg_DigimonChangeBattleState extends DtMsgBase {
    card: DtCardBase;
    toState: DtCardBattleState;
    reason: DtProtoEnum_MoveReason;
    constructor(card: DtCardBase, toState: DtCardBattleState, r: DtProtoEnum_MoveReason);
}
export declare class DtMsg_BeforePlay extends DtMsgBase {
    card: DtCardBase;
    wherePlay: DtAreaType;
    cost: number;
    setCost: number;
    fsm: DtFsmUseCard;
    constructor(card: DtCardBase, where: DtAreaType);
    Reset(): void;
}
export declare class DtMsg_CommonCardInfo extends DtMsgBase {
    card: DtCardBase;
    constructor(card: DtCardBase);
}
export declare class DtMsg_ChangeCost extends DtMsgBase {
    caster: DtCardBase;
    cost: number;
    reason: DtProtoEnum_MoveReason;
    constructor(caster: DtCardBase, cost: number, reason: DtProtoEnum_MoveReason);
}
export declare class DtMsg_CardBeDiscardFromEvoOri extends DtMsgBase {
    receiveCard: DtCardBase;
    reason: DtProtoEnum_MoveReason;
    fromCard: DtCardBase;
    caster: DtCardBase;
    constructor(discard: DtCardBase, fromCard: DtCardBase, reason: DtProtoEnum_MoveReason, caster: DtCardBase);
}
export declare class DtMsg_AreaChange extends DtMsgBase {
    area: DtAreaType;
    isPush: boolean;
    card: DtCardBase;
    reason: DtProtoEnum_MoveReason;
    constructor(card: DtCardBase, type: DtAreaType, isPush: boolean, reason: DtProtoEnum_MoveReason);
    IsSelfDefenseReduce(player: DtPlayer): boolean;
}
export declare class DtMsg_CardActivateEffect extends DtMsgBase {
    card: DtCardBase;
    effectname: number;
    constructor(card: DtCardBase, effectname: number);
}
export declare class DtMsg_CardMove extends DtMsgBase {
    caster: DtCardBase;
    card: DtCardBase;
    from: DtAreaType;
    to: DtAreaType;
    reason: DtProtoEnum_MoveReason;
    constructor(caster: DtCardBase, card: DtCardBase, from: DtAreaType, to: DtAreaType, reason: DtProtoEnum_MoveReason);
}
export declare class DtMsg_ChainEffectOver extends DtMsgBase {
    chainId: number;
    constructor(chainId: number);
}
