/// <reference types="long" />
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
import { DtAreaType, DtCardType, DtSkillReason, DtSkillTargetToPlayer } from "../Data/DtEnum";
export declare enum DtProtoEnum_MoveReason {
    None = 0,
    Draw = 1,
    EvoDraw = 2,
    SetDefense = 3,
    Hatch = 4,
    Hatch2Battle = 5,
    PlayToBattle = 6,
    EffectToBattle = 7,
    FromOriginToBattle = 8,
    Discard = 9,
    DiscardEvoOrigin = 10,
    Degenerate = 11,
    BattleDestory = 12,
    BodyLeaveBattle = 13,
    SetToOri = 14,
    Evolution = 15,
    PlayCard = 16,
    AttackReset = 17,
    BlockReset = 18,
    PhaseActive_thenStateActive = 19,
    BaolieDicard = 20,
    DefenseExcavatedWait = 21,
    DefenseOverToGy = 22,
    CardPlayMagicFromHand = 23,
    MagicHaUseToGy = 24,
    DelayUse = 25,
    Brownse = 26,
    CAN_NOT_IN_BATTLE = 27,
    START_GAME_CHANGE_CARDS = 28,
    CardEffect = 29,
    CardEffectMoveToHandAndShowCard = 30,
    CardEffectMoveShowCardFromHand = 31,
    Evo = 32,
    Excavated = 33,
    Check = 34,
    ExcavatedToHand = 35,
    SORT = 36,
    ATTACK = 37,
    DESTROY = 38,
    CHOOSE = 39,
    ArmorPurge = 40,
    Restore = 41,
    AddDefense = 42,
    ReturnToHand = 43,
    ReturnToDeck = 44,
    ReturnToDigitama = 45,
    ImmueEffect = 46,
    FusionEvo = 47,
    Other = 48
}
export declare enum DtProtoEnum_Compare {
    EQUAL_CARD_COUNT = 0,
    SORT = 1,
    LESS_THAN_OR_EQUAL = 2,
    GREATE_EQUAL = 3,
    Over_Attack = 4
}
export declare enum DtProtoEnum_ChooseDecideType {
    None = 0,
    IF_USE = 1,
    UP_OR_DOWN = 2,
    EFFECT_INDEX = 3,
    Degenerate = 4,
    Choose_Number = 5
}
export declare enum ClientShowType {
    None = 0,
    CardEffect = 1,
    CardEffectOver = 2,
    CardAttack = 3,
    CardAttackOver = 4,
    CardAttackJudge = 5,
    ShowDefenseCard = 6,
    OverBrowse = 7,
    Card_Effect_DISTURB = 8,
    Card_Effect_PENETRATE = 9,
    card_Effect_def_be_PENETRATE = 10,
    START_GAME_CHANGE_CARDS = 11,
    NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC = 12,
    BROWSE_AND_SHOW = 13,
    TIME_OUT_AUTO_SKIP = 14,
    OVER_CHANGE_CARDS = 15,
    CHANGE_ATTACK_TARGET = 16,
    ATTACK_DEFENSE_DP_CHECK = 17,
    IMMUE_EFFECT = 18,
    HasChooseCard = 19,
    BeDisCardEvo = 20,
    AddGlobalBuff = 21,
    RemoveGlobalBuff = 22,
    WillEvo = 23,
    WillPlay = 24,
    PlayerTimeFlow = 25,
    Card_Activate_Effect = 26,
    NeedChangeCardState = 27
}
export declare enum DtProtoEnum_CardInfoType {
    None = 0,
    Buff = 1,
    Effect = 2
}
export declare class DtRoomData {
    room: DcgProto.IS_RoomData;
    roomId: string;
    seed: number;
    cost: number;
    round: number;
    actionPlayerId: Long;
    type: DtRoomType;
    Custom: DcgProto.IS_ReplayCustomRule;
    playerACardId: Long;
    playerBCardId: Long;
    battleCardLimit: number;
}
export declare enum DtRoomType {
    None = 0,
    NoCost = 1,
    NoSortInStartBattle = 2,
    NoChangeCardsInStartBattle = 4,
    CustomStartRule = 8,
    FirstTurnCanDraw = 16,
    SkipHatchPhase = 32,
    IsReplay = 64,
    BATTLE_CARD_LIMIT = 128,
    RIDDLE_MODE = 256,
    FIRST_TUN_SKIL_ACTIVE_PHASE = 512,
    FIRST_TURN_JUMP_TO_MAIN_PHASE = 1024
}
export declare class DtEffectDesc {
    effectid: number;
    skills: Array<DtSkillDesc>;
}
export declare class DtSkillDesc {
    indexStage: number;
    effectToPlayer: DtSkillTargetToPlayer;
    area: Array<DtAreaType>;
    compare: DtProtoEnum_Compare;
    count: number;
    cardTypes: Array<DtCardType>;
    skill: DtSkillReasonDesc;
    otherSkill: Array<DtSkillReasonDesc>;
    group: string;
    constructor();
}
export declare class DtSkillReasonDesc {
    reason: DtSkillReason;
    type: number;
    num: number;
}
