export declare enum DtCardType {
    None = 0,
    Monster = 1,
    Role = 2,
    Magic = 3,
    DigiTama = 4
}
export declare enum DtCardBattleState {
    None = 0,
    Reset = 1,
    Activate = 2
}
export declare enum DtCardColor {
    None = 0,
    Red = 1,
    Blue = 2,
    Yellow = 3,
    Green = 4,
    Black = 5,
    Purple = 6,
    White = 7
}
export declare enum DtBattlePhase {
    None = 0,
    Init = 1,
    StartBattle = 2,
    RoundStart = 3,
    ActivePhase = 4,
    DrawCardPhase = 5,
    FosterPhase = 6,
    MainPhase = 7,
    OverPhase = 8
}
export declare enum DtAreaType {
    None = 0,
    DECK = 1,
    HAND = 2,
    DEFENSE = 4,
    GY = 8,
    DIGITAMA = 16,
    DIGITAMA_HATCH = 32,
    BATTLE_AREA = 64,
    OTHER_EVO = 128,
    TOKEN = 256,
    WAIT = 512,
    BROWSE = 1024,
    GLOBAL = 2048
}
export declare enum DtBuffType {
    None = 0,
    CHANGE_DP = 1,
    CHANGE_COST = 2,
    SET_COST = 3,
    SET_ORIGIN_DP = 4,
    CHANGE_POWER = 5,
    SET_COLOR = 6,
    IMMUE_OPPONENT_EFFECT = 7,
    SPECIAL_EVO_CONDITION = 8,
    PENETRATE = 9,
    CAN_NOT_ATTACK = 10,
    CAN_NOT_DEF_BLOCK = 11,
    CAN_NOT_ATTACK_PLAYER = 12,
    CAN_NOT_ATTACK_MONSTER = 13,
    DISTURB = 14,
    CAN_NOT_BE_BLOCKER = 15,
    CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE = 16,
    NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC = 17,
    ATTACK_ACTIVATE_DIGIMON = 18,
    NOT_DESTROY_WITH_ATTACK = 19,
    CAN_NOT_SET_ACTIVE_STATE = 20,
    ABSORB_CAN_SELECT_OPPENT = 20,
    Immue_Opponent_destory_effect = 21,
    Immue_Destory_effect = 22,
    IMMUE_REDUCE_DP = 23,
    IMMUE_REDUCE_DP_WITH_OPPENONT = 25,
    IMMUE_RETURN_TO_HAN = 26,
    IMMUE_RETURN_TO_DECK = 27,
    Quick_Attack_Digimon = 28,
    CAN_NOT_BE_ATTACK = 29,
    MARK_FROM_BT5_109 = 30,
    CAN_NOT_REDECE_EVO_COST = 31,
    EVO_ATTACK_CAN_ATTACK_ACTIVE_DIGIMON = 32,
    MAGIC_CARD_USE_IGNORE_COLOR_CONDITION = 33,
    CAN_NOT_ACTIVATE_EVO_EFFECT = 34,
    CAN_NOT_EFFECT_PLAY_MONSTER = 35,
    ATTACK_NO_ORIGIN_ACTIVATE_DIGIMON = 36,
    MAGIC_CARD_BE_PROHIBIT_USE = 37,
    NAME_IS = 38,
    FEATURE_IS = 39,
    CAN_NOT_IGNORE_EVO_REQUIREMENT = 40,
    CAN_NOT_REDUCE_MONSTER_PLAY_COSTS = 41,
    IS_TOKEN = 42,
    INCREASE_DESTORY_CARD_DP = 43,
    ATTACK_LV_LQ_4_ACTIVATE_DIGIMON = 44,
    PLAYER_BATTLE_AREA_IN_LIMIT = 45,
    IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON = 46,
    ATTACK_ORIGIN_LESS_THEN_ACTIVATE_DIGIMON = 47,
    ATTACK_WIN_WITH_COMPARE_ORIGINCOUNT = 48,
    CURRENT_TURN_PLAY = 1000
}
export declare enum DtBuffDurationType {
    None = 0,
    RoundOver = 1,
    Once = 2,
    AfterAtkJudge = 3,
    RoundOverSelf = 4,
    RoundOverOpponent = 5,
    PhaseActiveOver = 6,
    PhaseActiveOverSelf = 7,
    PhaseActiveOverOpponent = 8,
    CurrentEffectChainOver = 9
}
export declare enum DtBuffEffectToType {
    None = 0,
    Self = 1,
    Opponent = 2,
    Both = 3
}
export declare enum DtActionEffectType {
    None = 0,
    AttackDestroy = 1,
    EffectDestroy = 2,
    AtkZeroDestroy = 3,
    BattleReturnHand = 4,
    BattleReturnDeck = 5,
    BattleReturnDefense = 6,
    Degenerate = 7,
    CardCannotInBattle = 8,
    ChangeCardBattleState = 9,
    PlaceCardUnderOtherDigimon = 10
}
export declare enum DtDegenerateType {
    None = 0,
    Degenerate = 1,
    ArmorPurge = 2,
    Discard = 3
}
export declare enum DtChangeDigimonBattleStateReason {
    None = 0,
    Block = 1
}
export declare enum DtEvolutionType {
    None = 0,
    Normal = 1,
    Fusion = 2
}
export declare class EFFECT_NAME {
    static BLOCKER: number;
    static DIGIMON_BAOLIE: number;
    static RESTART: number;
    static MICHIZURE: number;
    static FUSION: number;
    static EVO_ATTACK: number;
    static ABSORB: number;
    static DELAY_EFFECT: number;
    static ROLE_LOCK_3: number;
    static ARMOR_PURGE: number;
    static ROLE_DEFENSE_TO_BATTLE: number;
    static DELAY_MAGIC_DEFENSE_TO_BATTLE: number;
    static DEFENSE_TO_HAND: number;
    static Decoy: number;
    static Destroy: number;
    static DISTURB: number;
    static PENETRATE: number;
}
export declare enum DtEffectRoundValid {
    Self = 0,
    Opponent = 1,
    Both = 2
}
export declare enum DtSkillTargetToPlayer {
    Self = 0,
    Opponent = 1,
    Both = 2
}
export declare enum DtSkillReason {
    None = 0,
    AddBuff = 1,
    AddBuffWithSelfHandCount = 2,
    EffectPlayCard = 3,
    EffectPlayCard_fromorigin = 4,
    Discard = 5,
    AddToOrigin = 6,
    Destory = 7,
    EffectEvoCard = 8,
    DiscardOrigin = 9,
    DiscardOriginTopOrBottom = 10,
    DiscardOriginWToBaolie = 11,
    ReturnTo = 12,
    ToStateReset = 13,
    ChangeBattleTarget = 14,
    Degenerate = 15,
    ToStateActive = 16,
    DrawCardFromDefense = 17,
    MoveTo = 18,
    MoveToBottom = 19,
    EVO_ATTACK = 20,
    Fusion = 21,
    FusionSort = 22,
    ForceOverActionEffect = 23
}
export declare enum DtFilterCompare {
    None = 0,
    EQUAL = 1,
    GREATER = 2,
    GREATE_EQUAL = 3,
    LESS = 4,
    LESS_EQUAL = 5
}
export declare enum DtCompareExtend {
    None = 0,
    NeedNum = 1
}
export declare enum DtPlayerLogType {
    DrawCard = 0,
    Block = 1,
    DestroyDigimon = 2,
    Attack = 3,
    AttackDefense = 4
}
export declare enum DtGameOverReason {
    None = 0,
    ATTACK_LAST = 1,
    TIME_OVER = 2,
    NO_CARD_DRAW = 3,
    CARD_EFFECT = 4,
    QUIT_GAME = 5
}
export declare enum DtPlayerGameEvent {
    None = 0,
    GameInitOK = 1,
    AnimationPlayOver = 2
}
