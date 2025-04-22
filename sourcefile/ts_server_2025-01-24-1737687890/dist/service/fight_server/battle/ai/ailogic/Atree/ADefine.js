"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiCardType = exports.AiCardBattleState = exports.AiFilterContainerType = exports.AiFilterArea = exports.AiFilterCompare = exports.AIServerCammand = exports.AICommandType = void 0;
var AICommandType;
(function (AICommandType) {
    AICommandType[AICommandType["JUMP_TO_NEXT_TURN"] = 0] = "JUMP_TO_NEXT_TURN";
    AICommandType[AICommandType["CHOOSE_UID"] = 1] = "CHOOSE_UID";
    AICommandType[AICommandType["SEQ_UID"] = 2] = "SEQ_UID";
    AICommandType[AICommandType["HATCH"] = 3] = "HATCH";
    AICommandType[AICommandType["PLAY_CARD"] = 4] = "PLAY_CARD";
    AICommandType[AICommandType["ATTACK"] = 5] = "ATTACK";
    AICommandType[AICommandType["ATTCK_DEFENSE"] = 6] = "ATTCK_DEFENSE";
    AICommandType[AICommandType["EVO"] = 7] = "EVO";
    AICommandType[AICommandType["HatchToBattle"] = 8] = "HatchToBattle";
    AICommandType[AICommandType["USE_EFFECT"] = 9] = "USE_EFFECT";
    AICommandType[AICommandType["STAND_BY"] = 10] = "STAND_BY";
    AICommandType[AICommandType["CHOOSE_ACTIVE_EFFECT"] = 11] = "CHOOSE_ACTIVE_EFFECT";
    AICommandType[AICommandType["GM_STR"] = 12] = "GM_STR";
})(AICommandType = exports.AICommandType || (exports.AICommandType = {}));
class AIServerCammand {
    priority;
    type;
    cammandCard;
    target;
    targets;
    list;
    numberList;
    gmStr;
    log = "";
    constructor() {
        this.list = new Array();
        this.numberList = new Array();
    }
}
exports.AIServerCammand = AIServerCammand;
var AiFilterCompare;
(function (AiFilterCompare) {
    AiFilterCompare[AiFilterCompare["None"] = 0] = "None";
    AiFilterCompare[AiFilterCompare["EQUAL"] = 1] = "EQUAL";
    AiFilterCompare[AiFilterCompare["GREATER"] = 2] = "GREATER";
    AiFilterCompare[AiFilterCompare["GREATE_EQUAL"] = 3] = "GREATE_EQUAL";
    AiFilterCompare[AiFilterCompare["LESS"] = 4] = "LESS";
    AiFilterCompare[AiFilterCompare["LESS_EQUAL"] = 5] = "LESS_EQUAL";
})(AiFilterCompare = exports.AiFilterCompare || (exports.AiFilterCompare = {}));
var AiFilterArea;
(function (AiFilterArea) {
    AiFilterArea[AiFilterArea["None"] = 0] = "None";
    AiFilterArea[AiFilterArea["Self_Hand"] = 1] = "Self_Hand";
    AiFilterArea[AiFilterArea["Self_Battle"] = 2] = "Self_Battle";
    AiFilterArea[AiFilterArea["Self_Hatch"] = 3] = "Self_Hatch";
    AiFilterArea[AiFilterArea["Self_GY"] = 4] = "Self_GY";
    AiFilterArea[AiFilterArea["Opp_Battle"] = 5] = "Opp_Battle";
    AiFilterArea[AiFilterArea["Opp_Hatch"] = 6] = "Opp_Hatch";
    AiFilterArea[AiFilterArea["Opp_GY"] = 7] = "Opp_GY";
    AiFilterArea[AiFilterArea["Card_Origins"] = 8] = "Card_Origins";
    AiFilterArea[AiFilterArea["Card_CanEvos"] = 9] = "Card_CanEvos";
    AiFilterArea[AiFilterArea["Card_CanAttacks"] = 10] = "Card_CanAttacks";
    AiFilterArea[AiFilterArea["Self_HAND_BATTLE_HATCH"] = 11] = "Self_HAND_BATTLE_HATCH";
    AiFilterArea[AiFilterArea["Opp_HATCH_BATTLE"] = 12] = "Opp_HATCH_BATTLE";
    AiFilterArea[AiFilterArea["Self_Battle_AND_ALL_ORIGINS"] = 13] = "Self_Battle_AND_ALL_ORIGINS";
    AiFilterArea[AiFilterArea["Opp_Battle_AND_ALL_ORIGINS"] = 14] = "Opp_Battle_AND_ALL_ORIGINS";
    AiFilterArea[AiFilterArea["Self_Hand_Can_evo_cards"] = 15] = "Self_Hand_Can_evo_cards";
    AiFilterArea[AiFilterArea["Current_Attacker"] = 16] = "Current_Attacker";
    AiFilterArea[AiFilterArea["Current_Defenseer"] = 17] = "Current_Defenseer";
    AiFilterArea[AiFilterArea["self_battle_hatch"] = 18] = "self_battle_hatch";
})(AiFilterArea = exports.AiFilterArea || (exports.AiFilterArea = {}));
var AiFilterContainerType;
(function (AiFilterContainerType) {
    AiFilterContainerType[AiFilterContainerType["None"] = 0] = "None";
    AiFilterContainerType[AiFilterContainerType["DP"] = 1] = "DP";
    AiFilterContainerType[AiFilterContainerType["LV"] = 2] = "LV";
    AiFilterContainerType[AiFilterContainerType["COST"] = 3] = "COST";
    AiFilterContainerType[AiFilterContainerType["ORGIN_COUNT"] = 4] = "ORGIN_COUNT";
    AiFilterContainerType[AiFilterContainerType["NAME_IS"] = 5] = "NAME_IS";
    AiFilterContainerType[AiFilterContainerType["NAME_FORCE_IS"] = 6] = "NAME_FORCE_IS";
    AiFilterContainerType[AiFilterContainerType["FEATURE_IS"] = 7] = "FEATURE_IS";
    AiFilterContainerType[AiFilterContainerType["BATTLE_STATE"] = 8] = "BATTLE_STATE";
    AiFilterContainerType[AiFilterContainerType["CURRENT_CARD_DP_CHECK"] = 9] = "CURRENT_CARD_DP_CHECK";
    AiFilterContainerType[AiFilterContainerType["CARD_TYPE"] = 10] = "CARD_TYPE";
    AiFilterContainerType[AiFilterContainerType["HAS_EFFECT"] = 11] = "HAS_EFFECT";
    AiFilterContainerType[AiFilterContainerType["HAS_BUFF"] = 12] = "HAS_BUFF";
    AiFilterContainerType[AiFilterContainerType["CARD_NUMBER"] = 13] = "CARD_NUMBER";
    AiFilterContainerType[AiFilterContainerType["POWER"] = 14] = "POWER";
    AiFilterContainerType[AiFilterContainerType["NOT_HAS_BUFF"] = 15] = "NOT_HAS_BUFF";
    AiFilterContainerType[AiFilterContainerType["NOT_HAS_EFFECT"] = 16] = "NOT_HAS_EFFECT";
    AiFilterContainerType[AiFilterContainerType["MIN_DP"] = 17] = "MIN_DP";
    AiFilterContainerType[AiFilterContainerType["MIN_LV"] = 18] = "MIN_LV";
    AiFilterContainerType[AiFilterContainerType["MAX_DP"] = 19] = "MAX_DP";
    AiFilterContainerType[AiFilterContainerType["MAX_LV"] = 20] = "MAX_LV";
})(AiFilterContainerType = exports.AiFilterContainerType || (exports.AiFilterContainerType = {}));
var AiCardBattleState;
(function (AiCardBattleState) {
    AiCardBattleState[AiCardBattleState["None"] = 0] = "None";
    AiCardBattleState[AiCardBattleState["Reset"] = 1] = "Reset";
    AiCardBattleState[AiCardBattleState["Activate"] = 2] = "Activate";
})(AiCardBattleState = exports.AiCardBattleState || (exports.AiCardBattleState = {}));
var AiCardType;
(function (AiCardType) {
    AiCardType[AiCardType["None"] = 0] = "None";
    AiCardType[AiCardType["Monster"] = 1] = "Monster";
    AiCardType[AiCardType["Role"] = 2] = "Role";
    AiCardType[AiCardType["Magic"] = 3] = "Magic";
    AiCardType[AiCardType["DigiTama"] = 4] = "DigiTama";
})(AiCardType = exports.AiCardType || (exports.AiCardType = {}));
//# sourceMappingURL=ADefine.js.map