/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { LgCard } from "../../aibattle/LgCard";
export declare enum AICommandType {
    JUMP_TO_NEXT_TURN = 0,
    CHOOSE_UID = 1,
    SEQ_UID = 2,
    HATCH = 3,
    PLAY_CARD = 4,
    ATTACK = 5,
    ATTCK_DEFENSE = 6,
    EVO = 7,
    HatchToBattle = 8,
    USE_EFFECT = 9,
    STAND_BY = 10,
    CHOOSE_ACTIVE_EFFECT = 11,
    GM_STR = 12
}
export declare class AIServerCammand {
    priority: number;
    type: AICommandType;
    cammandCard: LgCard;
    target: LgCard;
    targets: Array<LgCard>;
    list: Array<Long>;
    numberList: Array<number>;
    gmStr: string;
    log: string;
    constructor();
}
export declare enum AiFilterCompare {
    None = 0,
    EQUAL = 1,
    GREATER = 2,
    GREATE_EQUAL = 3,
    LESS = 4,
    LESS_EQUAL = 5
}
export declare enum AiFilterArea {
    None = 0,
    Self_Hand = 1,
    Self_Battle = 2,
    Self_Hatch = 3,
    Self_GY = 4,
    Opp_Battle = 5,
    Opp_Hatch = 6,
    Opp_GY = 7,
    Card_Origins = 8,
    Card_CanEvos = 9,
    Card_CanAttacks = 10,
    Self_HAND_BATTLE_HATCH = 11,
    Opp_HATCH_BATTLE = 12,
    Self_Battle_AND_ALL_ORIGINS = 13,
    Opp_Battle_AND_ALL_ORIGINS = 14,
    Self_Hand_Can_evo_cards = 15,
    Current_Attacker = 16,
    Current_Defenseer = 17,
    self_battle_hatch = 18
}
export declare enum AiFilterContainerType {
    None = 0,
    DP = 1,
    LV = 2,
    COST = 3,
    ORGIN_COUNT = 4,
    NAME_IS = 5,
    NAME_FORCE_IS = 6,
    FEATURE_IS = 7,
    BATTLE_STATE = 8,
    CURRENT_CARD_DP_CHECK = 9,
    CARD_TYPE = 10,
    HAS_EFFECT = 11,
    HAS_BUFF = 12,
    CARD_NUMBER = 13,
    POWER = 14,
    NOT_HAS_BUFF = 15,
    NOT_HAS_EFFECT = 16,
    MIN_DP = 17,
    MIN_LV = 18,
    MAX_DP = 19,
    MAX_LV = 20
}
export declare enum AiCardBattleState {
    None = 0,
    Reset = 1,
    Activate = 2
}
export declare enum AiCardType {
    None = 0,
    Monster = 1,
    Role = 2,
    Magic = 3,
    DigiTama = 4
}
