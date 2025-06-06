"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtPlayerGameEvent = exports.DtGameOverReason = exports.DtPlayerLogType = exports.DtCompareExtend = exports.DtFilterCompare = exports.DtSkillReason = exports.DtSkillTargetToPlayer = exports.DtEffectRoundValid = exports.EFFECT_NAME = exports.DtEvolutionType = exports.DtChangeDigimonBattleStateReason = exports.DtDegenerateType = exports.DtActionEffectType = exports.DtBuffEffectToType = exports.DtBuffDurationType = exports.DtBuffType = exports.DtAreaType = exports.DtBattlePhase = exports.DtCardColor = exports.DtCardBattleState = exports.DtCardType = void 0;
var DtCardType;
(function (DtCardType) {
    DtCardType[DtCardType["None"] = 0] = "None";
    DtCardType[DtCardType["Monster"] = 1] = "Monster";
    DtCardType[DtCardType["Role"] = 2] = "Role";
    DtCardType[DtCardType["Magic"] = 3] = "Magic";
    DtCardType[DtCardType["DigiTama"] = 4] = "DigiTama";
})(DtCardType = exports.DtCardType || (exports.DtCardType = {}));
var DtCardBattleState;
(function (DtCardBattleState) {
    DtCardBattleState[DtCardBattleState["None"] = 0] = "None";
    DtCardBattleState[DtCardBattleState["Reset"] = 1] = "Reset";
    DtCardBattleState[DtCardBattleState["Activate"] = 2] = "Activate";
})(DtCardBattleState = exports.DtCardBattleState || (exports.DtCardBattleState = {}));
var DtCardColor;
(function (DtCardColor) {
    DtCardColor[DtCardColor["None"] = 0] = "None";
    DtCardColor[DtCardColor["Red"] = 1] = "Red";
    DtCardColor[DtCardColor["Blue"] = 2] = "Blue";
    DtCardColor[DtCardColor["Yellow"] = 3] = "Yellow";
    DtCardColor[DtCardColor["Green"] = 4] = "Green";
    DtCardColor[DtCardColor["Black"] = 5] = "Black";
    DtCardColor[DtCardColor["Purple"] = 6] = "Purple";
    DtCardColor[DtCardColor["White"] = 7] = "White";
})(DtCardColor = exports.DtCardColor || (exports.DtCardColor = {}));
var DtBattlePhase;
(function (DtBattlePhase) {
    DtBattlePhase[DtBattlePhase["None"] = 0] = "None";
    DtBattlePhase[DtBattlePhase["Init"] = 1] = "Init";
    DtBattlePhase[DtBattlePhase["StartBattle"] = 2] = "StartBattle";
    DtBattlePhase[DtBattlePhase["RoundStart"] = 3] = "RoundStart";
    DtBattlePhase[DtBattlePhase["ActivePhase"] = 4] = "ActivePhase";
    DtBattlePhase[DtBattlePhase["DrawCardPhase"] = 5] = "DrawCardPhase";
    DtBattlePhase[DtBattlePhase["FosterPhase"] = 6] = "FosterPhase";
    DtBattlePhase[DtBattlePhase["MainPhase"] = 7] = "MainPhase";
    DtBattlePhase[DtBattlePhase["OverPhase"] = 8] = "OverPhase";
})(DtBattlePhase = exports.DtBattlePhase || (exports.DtBattlePhase = {}));
var DtAreaType;
(function (DtAreaType) {
    DtAreaType[DtAreaType["None"] = 0] = "None";
    DtAreaType[DtAreaType["DECK"] = 1] = "DECK";
    DtAreaType[DtAreaType["HAND"] = 2] = "HAND";
    DtAreaType[DtAreaType["DEFENSE"] = 4] = "DEFENSE";
    DtAreaType[DtAreaType["GY"] = 8] = "GY";
    DtAreaType[DtAreaType["DIGITAMA"] = 16] = "DIGITAMA";
    DtAreaType[DtAreaType["DIGITAMA_HATCH"] = 32] = "DIGITAMA_HATCH";
    DtAreaType[DtAreaType["BATTLE_AREA"] = 64] = "BATTLE_AREA";
    DtAreaType[DtAreaType["OTHER_EVO"] = 128] = "OTHER_EVO";
    DtAreaType[DtAreaType["TOKEN"] = 256] = "TOKEN";
    DtAreaType[DtAreaType["WAIT"] = 512] = "WAIT";
    DtAreaType[DtAreaType["BROWSE"] = 1024] = "BROWSE";
    DtAreaType[DtAreaType["GLOBAL"] = 2048] = "GLOBAL";
})(DtAreaType = exports.DtAreaType || (exports.DtAreaType = {}));
var DtBuffType;
(function (DtBuffType) {
    DtBuffType[DtBuffType["None"] = 0] = "None";
    DtBuffType[DtBuffType["CHANGE_DP"] = 1] = "CHANGE_DP";
    DtBuffType[DtBuffType["CHANGE_COST"] = 2] = "CHANGE_COST";
    DtBuffType[DtBuffType["SET_COST"] = 3] = "SET_COST";
    DtBuffType[DtBuffType["SET_ORIGIN_DP"] = 4] = "SET_ORIGIN_DP";
    DtBuffType[DtBuffType["CHANGE_POWER"] = 5] = "CHANGE_POWER";
    DtBuffType[DtBuffType["SET_COLOR"] = 6] = "SET_COLOR";
    DtBuffType[DtBuffType["IMMUE_OPPONENT_EFFECT"] = 7] = "IMMUE_OPPONENT_EFFECT";
    DtBuffType[DtBuffType["SPECIAL_EVO_CONDITION"] = 8] = "SPECIAL_EVO_CONDITION";
    DtBuffType[DtBuffType["PENETRATE"] = 9] = "PENETRATE";
    DtBuffType[DtBuffType["CAN_NOT_ATTACK"] = 10] = "CAN_NOT_ATTACK";
    DtBuffType[DtBuffType["CAN_NOT_DEF_BLOCK"] = 11] = "CAN_NOT_DEF_BLOCK";
    DtBuffType[DtBuffType["CAN_NOT_ATTACK_PLAYER"] = 12] = "CAN_NOT_ATTACK_PLAYER";
    DtBuffType[DtBuffType["CAN_NOT_ATTACK_MONSTER"] = 13] = "CAN_NOT_ATTACK_MONSTER";
    DtBuffType[DtBuffType["DISTURB"] = 14] = "DISTURB";
    DtBuffType[DtBuffType["CAN_NOT_BE_BLOCKER"] = 15] = "CAN_NOT_BE_BLOCKER";
    DtBuffType[DtBuffType["CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE"] = 16] = "CAN_NOT_SET_ACTIVE_STATE_AT_PHASE_ACTIVE";
    DtBuffType[DtBuffType["NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC"] = 17] = "NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC";
    DtBuffType[DtBuffType["ATTACK_ACTIVATE_DIGIMON"] = 18] = "ATTACK_ACTIVATE_DIGIMON";
    DtBuffType[DtBuffType["NOT_DESTROY_WITH_ATTACK"] = 19] = "NOT_DESTROY_WITH_ATTACK";
    DtBuffType[DtBuffType["CAN_NOT_SET_ACTIVE_STATE"] = 20] = "CAN_NOT_SET_ACTIVE_STATE";
    DtBuffType[DtBuffType["ABSORB_CAN_SELECT_OPPENT"] = 20] = "ABSORB_CAN_SELECT_OPPENT";
    DtBuffType[DtBuffType["Immue_Opponent_destory_effect"] = 21] = "Immue_Opponent_destory_effect";
    DtBuffType[DtBuffType["Immue_Destory_effect"] = 22] = "Immue_Destory_effect";
    DtBuffType[DtBuffType["IMMUE_REDUCE_DP"] = 23] = "IMMUE_REDUCE_DP";
    DtBuffType[DtBuffType["IMMUE_REDUCE_DP_WITH_OPPENONT"] = 25] = "IMMUE_REDUCE_DP_WITH_OPPENONT";
    DtBuffType[DtBuffType["IMMUE_RETURN_TO_HAN"] = 26] = "IMMUE_RETURN_TO_HAN";
    DtBuffType[DtBuffType["IMMUE_RETURN_TO_DECK"] = 27] = "IMMUE_RETURN_TO_DECK";
    DtBuffType[DtBuffType["Quick_Attack_Digimon"] = 28] = "Quick_Attack_Digimon";
    DtBuffType[DtBuffType["CAN_NOT_BE_ATTACK"] = 29] = "CAN_NOT_BE_ATTACK";
    DtBuffType[DtBuffType["MARK_FROM_BT5_109"] = 30] = "MARK_FROM_BT5_109";
    DtBuffType[DtBuffType["CAN_NOT_REDECE_EVO_COST"] = 31] = "CAN_NOT_REDECE_EVO_COST";
    DtBuffType[DtBuffType["EVO_ATTACK_CAN_ATTACK_ACTIVE_DIGIMON"] = 32] = "EVO_ATTACK_CAN_ATTACK_ACTIVE_DIGIMON";
    DtBuffType[DtBuffType["MAGIC_CARD_USE_IGNORE_COLOR_CONDITION"] = 33] = "MAGIC_CARD_USE_IGNORE_COLOR_CONDITION";
    DtBuffType[DtBuffType["CAN_NOT_ACTIVATE_EVO_EFFECT"] = 34] = "CAN_NOT_ACTIVATE_EVO_EFFECT";
    DtBuffType[DtBuffType["CAN_NOT_EFFECT_PLAY_MONSTER"] = 35] = "CAN_NOT_EFFECT_PLAY_MONSTER";
    DtBuffType[DtBuffType["ATTACK_NO_ORIGIN_ACTIVATE_DIGIMON"] = 36] = "ATTACK_NO_ORIGIN_ACTIVATE_DIGIMON";
    DtBuffType[DtBuffType["MAGIC_CARD_BE_PROHIBIT_USE"] = 37] = "MAGIC_CARD_BE_PROHIBIT_USE";
    DtBuffType[DtBuffType["NAME_IS"] = 38] = "NAME_IS";
    DtBuffType[DtBuffType["FEATURE_IS"] = 39] = "FEATURE_IS";
    DtBuffType[DtBuffType["CAN_NOT_IGNORE_EVO_REQUIREMENT"] = 40] = "CAN_NOT_IGNORE_EVO_REQUIREMENT";
    DtBuffType[DtBuffType["CAN_NOT_REDUCE_MONSTER_PLAY_COSTS"] = 41] = "CAN_NOT_REDUCE_MONSTER_PLAY_COSTS";
    DtBuffType[DtBuffType["IS_TOKEN"] = 42] = "IS_TOKEN";
    DtBuffType[DtBuffType["INCREASE_DESTORY_CARD_DP"] = 43] = "INCREASE_DESTORY_CARD_DP";
    DtBuffType[DtBuffType["ATTACK_LV_LQ_4_ACTIVATE_DIGIMON"] = 44] = "ATTACK_LV_LQ_4_ACTIVATE_DIGIMON";
    DtBuffType[DtBuffType["PLAYER_BATTLE_AREA_IN_LIMIT"] = 45] = "PLAYER_BATTLE_AREA_IN_LIMIT";
    DtBuffType[DtBuffType["IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON"] = 46] = "IMMUE_OPPONENT_EFFECT_WITCH_DIDIMON";
    DtBuffType[DtBuffType["ATTACK_ORIGIN_LESS_THEN_ACTIVATE_DIGIMON"] = 47] = "ATTACK_ORIGIN_LESS_THEN_ACTIVATE_DIGIMON";
    DtBuffType[DtBuffType["ATTACK_WIN_WITH_COMPARE_ORIGINCOUNT"] = 48] = "ATTACK_WIN_WITH_COMPARE_ORIGINCOUNT";
    DtBuffType[DtBuffType["CURRENT_TURN_PLAY"] = 1000] = "CURRENT_TURN_PLAY";
})(DtBuffType = exports.DtBuffType || (exports.DtBuffType = {}));
var DtBuffDurationType;
(function (DtBuffDurationType) {
    DtBuffDurationType[DtBuffDurationType["None"] = 0] = "None";
    DtBuffDurationType[DtBuffDurationType["RoundOver"] = 1] = "RoundOver";
    DtBuffDurationType[DtBuffDurationType["Once"] = 2] = "Once";
    DtBuffDurationType[DtBuffDurationType["AfterAtkJudge"] = 3] = "AfterAtkJudge";
    DtBuffDurationType[DtBuffDurationType["RoundOverSelf"] = 4] = "RoundOverSelf";
    DtBuffDurationType[DtBuffDurationType["RoundOverOpponent"] = 5] = "RoundOverOpponent";
    DtBuffDurationType[DtBuffDurationType["PhaseActiveOver"] = 6] = "PhaseActiveOver";
    DtBuffDurationType[DtBuffDurationType["PhaseActiveOverSelf"] = 7] = "PhaseActiveOverSelf";
    DtBuffDurationType[DtBuffDurationType["PhaseActiveOverOpponent"] = 8] = "PhaseActiveOverOpponent";
    DtBuffDurationType[DtBuffDurationType["CurrentEffectChainOver"] = 9] = "CurrentEffectChainOver";
})(DtBuffDurationType = exports.DtBuffDurationType || (exports.DtBuffDurationType = {}));
var DtBuffEffectToType;
(function (DtBuffEffectToType) {
    DtBuffEffectToType[DtBuffEffectToType["None"] = 0] = "None";
    DtBuffEffectToType[DtBuffEffectToType["Self"] = 1] = "Self";
    DtBuffEffectToType[DtBuffEffectToType["Opponent"] = 2] = "Opponent";
    DtBuffEffectToType[DtBuffEffectToType["Both"] = 3] = "Both";
})(DtBuffEffectToType = exports.DtBuffEffectToType || (exports.DtBuffEffectToType = {}));
var DtActionEffectType;
(function (DtActionEffectType) {
    DtActionEffectType[DtActionEffectType["None"] = 0] = "None";
    DtActionEffectType[DtActionEffectType["AttackDestroy"] = 1] = "AttackDestroy";
    DtActionEffectType[DtActionEffectType["EffectDestroy"] = 2] = "EffectDestroy";
    DtActionEffectType[DtActionEffectType["AtkZeroDestroy"] = 3] = "AtkZeroDestroy";
    DtActionEffectType[DtActionEffectType["BattleReturnHand"] = 4] = "BattleReturnHand";
    DtActionEffectType[DtActionEffectType["BattleReturnDeck"] = 5] = "BattleReturnDeck";
    DtActionEffectType[DtActionEffectType["BattleReturnDefense"] = 6] = "BattleReturnDefense";
    DtActionEffectType[DtActionEffectType["Degenerate"] = 7] = "Degenerate";
    DtActionEffectType[DtActionEffectType["CardCannotInBattle"] = 8] = "CardCannotInBattle";
    DtActionEffectType[DtActionEffectType["ChangeCardBattleState"] = 9] = "ChangeCardBattleState";
    DtActionEffectType[DtActionEffectType["PlaceCardUnderOtherDigimon"] = 10] = "PlaceCardUnderOtherDigimon";
})(DtActionEffectType = exports.DtActionEffectType || (exports.DtActionEffectType = {}));
var DtDegenerateType;
(function (DtDegenerateType) {
    DtDegenerateType[DtDegenerateType["None"] = 0] = "None";
    DtDegenerateType[DtDegenerateType["Degenerate"] = 1] = "Degenerate";
    DtDegenerateType[DtDegenerateType["ArmorPurge"] = 2] = "ArmorPurge";
    DtDegenerateType[DtDegenerateType["Discard"] = 3] = "Discard";
})(DtDegenerateType = exports.DtDegenerateType || (exports.DtDegenerateType = {}));
var DtChangeDigimonBattleStateReason;
(function (DtChangeDigimonBattleStateReason) {
    DtChangeDigimonBattleStateReason[DtChangeDigimonBattleStateReason["None"] = 0] = "None";
    DtChangeDigimonBattleStateReason[DtChangeDigimonBattleStateReason["Block"] = 1] = "Block";
})(DtChangeDigimonBattleStateReason = exports.DtChangeDigimonBattleStateReason || (exports.DtChangeDigimonBattleStateReason = {}));
var DtEvolutionType;
(function (DtEvolutionType) {
    DtEvolutionType[DtEvolutionType["None"] = 0] = "None";
    DtEvolutionType[DtEvolutionType["Normal"] = 1] = "Normal";
    DtEvolutionType[DtEvolutionType["Fusion"] = 2] = "Fusion";
})(DtEvolutionType = exports.DtEvolutionType || (exports.DtEvolutionType = {}));
class EFFECT_NAME {
    static BLOCKER = 1;
    static DIGIMON_BAOLIE = 2;
    static RESTART = 3;
    static MICHIZURE = 4;
    static FUSION = 5;
    static EVO_ATTACK = 6;
    static ABSORB = 7;
    static DELAY_EFFECT = 8;
    static ROLE_LOCK_3 = 9;
    static ARMOR_PURGE = 10;
    static ROLE_DEFENSE_TO_BATTLE = 11;
    static DELAY_MAGIC_DEFENSE_TO_BATTLE = 12;
    static DEFENSE_TO_HAND = 13;
    static Decoy = 14;
    static Destroy = 15;
    static DISTURB = 16;
    static PENETRATE = 17;
}
exports.EFFECT_NAME = EFFECT_NAME;
var DtEffectRoundValid;
(function (DtEffectRoundValid) {
    DtEffectRoundValid[DtEffectRoundValid["Self"] = 0] = "Self";
    DtEffectRoundValid[DtEffectRoundValid["Opponent"] = 1] = "Opponent";
    DtEffectRoundValid[DtEffectRoundValid["Both"] = 2] = "Both";
})(DtEffectRoundValid = exports.DtEffectRoundValid || (exports.DtEffectRoundValid = {}));
var DtSkillTargetToPlayer;
(function (DtSkillTargetToPlayer) {
    DtSkillTargetToPlayer[DtSkillTargetToPlayer["Self"] = 0] = "Self";
    DtSkillTargetToPlayer[DtSkillTargetToPlayer["Opponent"] = 1] = "Opponent";
    DtSkillTargetToPlayer[DtSkillTargetToPlayer["Both"] = 2] = "Both";
})(DtSkillTargetToPlayer = exports.DtSkillTargetToPlayer || (exports.DtSkillTargetToPlayer = {}));
var DtSkillReason;
(function (DtSkillReason) {
    DtSkillReason[DtSkillReason["None"] = 0] = "None";
    DtSkillReason[DtSkillReason["AddBuff"] = 1] = "AddBuff";
    DtSkillReason[DtSkillReason["AddBuffWithSelfHandCount"] = 2] = "AddBuffWithSelfHandCount";
    DtSkillReason[DtSkillReason["EffectPlayCard"] = 3] = "EffectPlayCard";
    DtSkillReason[DtSkillReason["EffectPlayCard_fromorigin"] = 4] = "EffectPlayCard_fromorigin";
    DtSkillReason[DtSkillReason["Discard"] = 5] = "Discard";
    DtSkillReason[DtSkillReason["AddToOrigin"] = 6] = "AddToOrigin";
    DtSkillReason[DtSkillReason["Destory"] = 7] = "Destory";
    DtSkillReason[DtSkillReason["EffectEvoCard"] = 8] = "EffectEvoCard";
    DtSkillReason[DtSkillReason["DiscardOrigin"] = 9] = "DiscardOrigin";
    DtSkillReason[DtSkillReason["DiscardOriginTopOrBottom"] = 10] = "DiscardOriginTopOrBottom";
    DtSkillReason[DtSkillReason["DiscardOriginWToBaolie"] = 11] = "DiscardOriginWToBaolie";
    DtSkillReason[DtSkillReason["ReturnTo"] = 12] = "ReturnTo";
    DtSkillReason[DtSkillReason["ToStateReset"] = 13] = "ToStateReset";
    DtSkillReason[DtSkillReason["ChangeBattleTarget"] = 14] = "ChangeBattleTarget";
    DtSkillReason[DtSkillReason["Degenerate"] = 15] = "Degenerate";
    DtSkillReason[DtSkillReason["ToStateActive"] = 16] = "ToStateActive";
    DtSkillReason[DtSkillReason["DrawCardFromDefense"] = 17] = "DrawCardFromDefense";
    DtSkillReason[DtSkillReason["MoveTo"] = 18] = "MoveTo";
    DtSkillReason[DtSkillReason["MoveToBottom"] = 19] = "MoveToBottom";
    DtSkillReason[DtSkillReason["EVO_ATTACK"] = 20] = "EVO_ATTACK";
    DtSkillReason[DtSkillReason["Fusion"] = 21] = "Fusion";
    DtSkillReason[DtSkillReason["FusionSort"] = 22] = "FusionSort";
    DtSkillReason[DtSkillReason["ForceOverActionEffect"] = 23] = "ForceOverActionEffect";
})(DtSkillReason = exports.DtSkillReason || (exports.DtSkillReason = {}));
var DtFilterCompare;
(function (DtFilterCompare) {
    DtFilterCompare[DtFilterCompare["None"] = 0] = "None";
    DtFilterCompare[DtFilterCompare["EQUAL"] = 1] = "EQUAL";
    DtFilterCompare[DtFilterCompare["GREATER"] = 2] = "GREATER";
    DtFilterCompare[DtFilterCompare["GREATE_EQUAL"] = 3] = "GREATE_EQUAL";
    DtFilterCompare[DtFilterCompare["LESS"] = 4] = "LESS";
    DtFilterCompare[DtFilterCompare["LESS_EQUAL"] = 5] = "LESS_EQUAL";
})(DtFilterCompare = exports.DtFilterCompare || (exports.DtFilterCompare = {}));
var DtCompareExtend;
(function (DtCompareExtend) {
    DtCompareExtend[DtCompareExtend["None"] = 0] = "None";
    DtCompareExtend[DtCompareExtend["NeedNum"] = 1] = "NeedNum";
})(DtCompareExtend = exports.DtCompareExtend || (exports.DtCompareExtend = {}));
var DtPlayerLogType;
(function (DtPlayerLogType) {
    DtPlayerLogType[DtPlayerLogType["DrawCard"] = 0] = "DrawCard";
    DtPlayerLogType[DtPlayerLogType["Block"] = 1] = "Block";
    DtPlayerLogType[DtPlayerLogType["DestroyDigimon"] = 2] = "DestroyDigimon";
    DtPlayerLogType[DtPlayerLogType["Attack"] = 3] = "Attack";
    DtPlayerLogType[DtPlayerLogType["AttackDefense"] = 4] = "AttackDefense";
})(DtPlayerLogType = exports.DtPlayerLogType || (exports.DtPlayerLogType = {}));
var DtGameOverReason;
(function (DtGameOverReason) {
    DtGameOverReason[DtGameOverReason["None"] = 0] = "None";
    DtGameOverReason[DtGameOverReason["ATTACK_LAST"] = 1] = "ATTACK_LAST";
    DtGameOverReason[DtGameOverReason["TIME_OVER"] = 2] = "TIME_OVER";
    DtGameOverReason[DtGameOverReason["NO_CARD_DRAW"] = 3] = "NO_CARD_DRAW";
    DtGameOverReason[DtGameOverReason["CARD_EFFECT"] = 4] = "CARD_EFFECT";
    DtGameOverReason[DtGameOverReason["QUIT_GAME"] = 5] = "QUIT_GAME";
})(DtGameOverReason = exports.DtGameOverReason || (exports.DtGameOverReason = {}));
var DtPlayerGameEvent;
(function (DtPlayerGameEvent) {
    DtPlayerGameEvent[DtPlayerGameEvent["None"] = 0] = "None";
    DtPlayerGameEvent[DtPlayerGameEvent["GameInitOK"] = 1] = "GameInitOK";
    DtPlayerGameEvent[DtPlayerGameEvent["AnimationPlayOver"] = 2] = "AnimationPlayOver";
})(DtPlayerGameEvent = exports.DtPlayerGameEvent || (exports.DtPlayerGameEvent = {}));
//# sourceMappingURL=DtEnum.js.map