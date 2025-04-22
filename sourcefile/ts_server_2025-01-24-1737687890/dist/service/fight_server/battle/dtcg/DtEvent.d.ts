import { DtMsgBase } from "./Data/DtEventMsg";
export declare enum DtEventType {
    CardOnPlay = 0,
    WhenAttacking = 1,
    BlockerSelect = 2,
    PhaseActive = 3,
    RoundStart = 4,
    RoundOver = 5,
    AreaCardsChange = 6,
    CardBeforeEvolution = 7,
    CardEvolution = 8,
    BeforeAtkJudge = 9,
    AfterAtkJudge = 10,
    CardBeforeDActEffect = 11,
    CardOnActEffect = 12,
    CardChangeBattleState = 13,
    BattleOver = 14,
    AttackOver = 15,
    CardInBattleArea = 16,
    BattleFieldInfoChange = 17,
    BlockerSelectOver = 18,
    OnDiscardEvoOrigin = 19,
    BeforeCardChangeCost = 20,
    BrforeAbsorbEffect = 21,
    PhaseActiveOver = 22,
    PlayerUseCard = 23,
    AttackDeclare = 24,
    CardOnHatchPlay = 25,
    CardActivateEffect = 26,
    CardMove = 27,
    MainPhaseStart = 28,
    BuffRoundOver = 29,
    ChainEffectOver = 30,
    PrecalculateCost = 31,
    BeforePlay = 32,
    WhenOppAttacking = 33
}
export declare class DtEvent {
    private listenerMap;
    AddListen(type: DtEventType, caller: any, func: Function): void;
    FireListen(type: DtEventType, msg: DtMsgBase): void;
    RemoveListen(type: DtEventType, caller?: any, handl?: Function): void;
    Clear(): void;
}
