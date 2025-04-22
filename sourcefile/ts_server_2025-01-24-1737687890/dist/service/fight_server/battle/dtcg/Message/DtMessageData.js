"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtSkillReasonDesc = exports.DtSkillDesc = exports.DtEffectDesc = exports.DtRoomType = exports.DtRoomData = exports.DtProtoEnum_CardInfoType = exports.ClientShowType = exports.DtProtoEnum_ChooseDecideType = exports.DtProtoEnum_Compare = exports.DtProtoEnum_MoveReason = void 0;
var DtProtoEnum_MoveReason;
(function (DtProtoEnum_MoveReason) {
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["None"] = 0] = "None";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Draw"] = 1] = "Draw";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["EvoDraw"] = 2] = "EvoDraw";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["SetDefense"] = 3] = "SetDefense";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Hatch"] = 4] = "Hatch";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Hatch2Battle"] = 5] = "Hatch2Battle";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["PlayToBattle"] = 6] = "PlayToBattle";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["EffectToBattle"] = 7] = "EffectToBattle";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["FromOriginToBattle"] = 8] = "FromOriginToBattle";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Discard"] = 9] = "Discard";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["DiscardEvoOrigin"] = 10] = "DiscardEvoOrigin";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Degenerate"] = 11] = "Degenerate";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["BattleDestory"] = 12] = "BattleDestory";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["BodyLeaveBattle"] = 13] = "BodyLeaveBattle";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["SetToOri"] = 14] = "SetToOri";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Evolution"] = 15] = "Evolution";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["PlayCard"] = 16] = "PlayCard";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["AttackReset"] = 17] = "AttackReset";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["BlockReset"] = 18] = "BlockReset";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["PhaseActive_thenStateActive"] = 19] = "PhaseActive_thenStateActive";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["BaolieDicard"] = 20] = "BaolieDicard";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["DefenseExcavatedWait"] = 21] = "DefenseExcavatedWait";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["DefenseOverToGy"] = 22] = "DefenseOverToGy";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["CardPlayMagicFromHand"] = 23] = "CardPlayMagicFromHand";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["MagicHaUseToGy"] = 24] = "MagicHaUseToGy";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["DelayUse"] = 25] = "DelayUse";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Brownse"] = 26] = "Brownse";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["CAN_NOT_IN_BATTLE"] = 27] = "CAN_NOT_IN_BATTLE";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["START_GAME_CHANGE_CARDS"] = 28] = "START_GAME_CHANGE_CARDS";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["CardEffect"] = 29] = "CardEffect";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["CardEffectMoveToHandAndShowCard"] = 30] = "CardEffectMoveToHandAndShowCard";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["CardEffectMoveShowCardFromHand"] = 31] = "CardEffectMoveShowCardFromHand";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Evo"] = 32] = "Evo";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Excavated"] = 33] = "Excavated";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Check"] = 34] = "Check";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ExcavatedToHand"] = 35] = "ExcavatedToHand";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["SORT"] = 36] = "SORT";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ATTACK"] = 37] = "ATTACK";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["DESTROY"] = 38] = "DESTROY";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["CHOOSE"] = 39] = "CHOOSE";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ArmorPurge"] = 40] = "ArmorPurge";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Restore"] = 41] = "Restore";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["AddDefense"] = 42] = "AddDefense";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ReturnToHand"] = 43] = "ReturnToHand";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ReturnToDeck"] = 44] = "ReturnToDeck";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ReturnToDigitama"] = 45] = "ReturnToDigitama";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["ImmueEffect"] = 46] = "ImmueEffect";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["FusionEvo"] = 47] = "FusionEvo";
    DtProtoEnum_MoveReason[DtProtoEnum_MoveReason["Other"] = 48] = "Other";
})(DtProtoEnum_MoveReason = exports.DtProtoEnum_MoveReason || (exports.DtProtoEnum_MoveReason = {}));
var DtProtoEnum_Compare;
(function (DtProtoEnum_Compare) {
    DtProtoEnum_Compare[DtProtoEnum_Compare["EQUAL_CARD_COUNT"] = 0] = "EQUAL_CARD_COUNT";
    DtProtoEnum_Compare[DtProtoEnum_Compare["SORT"] = 1] = "SORT";
    DtProtoEnum_Compare[DtProtoEnum_Compare["LESS_THAN_OR_EQUAL"] = 2] = "LESS_THAN_OR_EQUAL";
    DtProtoEnum_Compare[DtProtoEnum_Compare["GREATE_EQUAL"] = 3] = "GREATE_EQUAL";
    DtProtoEnum_Compare[DtProtoEnum_Compare["Over_Attack"] = 4] = "Over_Attack";
})(DtProtoEnum_Compare = exports.DtProtoEnum_Compare || (exports.DtProtoEnum_Compare = {}));
var DtProtoEnum_ChooseDecideType;
(function (DtProtoEnum_ChooseDecideType) {
    DtProtoEnum_ChooseDecideType[DtProtoEnum_ChooseDecideType["None"] = 0] = "None";
    DtProtoEnum_ChooseDecideType[DtProtoEnum_ChooseDecideType["IF_USE"] = 1] = "IF_USE";
    DtProtoEnum_ChooseDecideType[DtProtoEnum_ChooseDecideType["UP_OR_DOWN"] = 2] = "UP_OR_DOWN";
    DtProtoEnum_ChooseDecideType[DtProtoEnum_ChooseDecideType["EFFECT_INDEX"] = 3] = "EFFECT_INDEX";
    DtProtoEnum_ChooseDecideType[DtProtoEnum_ChooseDecideType["Degenerate"] = 4] = "Degenerate";
    DtProtoEnum_ChooseDecideType[DtProtoEnum_ChooseDecideType["Choose_Number"] = 5] = "Choose_Number";
})(DtProtoEnum_ChooseDecideType = exports.DtProtoEnum_ChooseDecideType || (exports.DtProtoEnum_ChooseDecideType = {}));
var ClientShowType;
(function (ClientShowType) {
    ClientShowType[ClientShowType["None"] = 0] = "None";
    ClientShowType[ClientShowType["CardEffect"] = 1] = "CardEffect";
    ClientShowType[ClientShowType["CardEffectOver"] = 2] = "CardEffectOver";
    ClientShowType[ClientShowType["CardAttack"] = 3] = "CardAttack";
    ClientShowType[ClientShowType["CardAttackOver"] = 4] = "CardAttackOver";
    ClientShowType[ClientShowType["CardAttackJudge"] = 5] = "CardAttackJudge";
    ClientShowType[ClientShowType["ShowDefenseCard"] = 6] = "ShowDefenseCard";
    ClientShowType[ClientShowType["OverBrowse"] = 7] = "OverBrowse";
    ClientShowType[ClientShowType["Card_Effect_DISTURB"] = 8] = "Card_Effect_DISTURB";
    ClientShowType[ClientShowType["Card_Effect_PENETRATE"] = 9] = "Card_Effect_PENETRATE";
    ClientShowType[ClientShowType["card_Effect_def_be_PENETRATE"] = 10] = "card_Effect_def_be_PENETRATE";
    ClientShowType[ClientShowType["START_GAME_CHANGE_CARDS"] = 11] = "START_GAME_CHANGE_CARDS";
    ClientShowType[ClientShowType["NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC"] = 12] = "NO_TRIGGER_DEFENSE_EFFECT_WITH_MAGIC";
    ClientShowType[ClientShowType["BROWSE_AND_SHOW"] = 13] = "BROWSE_AND_SHOW";
    ClientShowType[ClientShowType["TIME_OUT_AUTO_SKIP"] = 14] = "TIME_OUT_AUTO_SKIP";
    ClientShowType[ClientShowType["OVER_CHANGE_CARDS"] = 15] = "OVER_CHANGE_CARDS";
    ClientShowType[ClientShowType["CHANGE_ATTACK_TARGET"] = 16] = "CHANGE_ATTACK_TARGET";
    ClientShowType[ClientShowType["ATTACK_DEFENSE_DP_CHECK"] = 17] = "ATTACK_DEFENSE_DP_CHECK";
    ClientShowType[ClientShowType["IMMUE_EFFECT"] = 18] = "IMMUE_EFFECT";
    ClientShowType[ClientShowType["HasChooseCard"] = 19] = "HasChooseCard";
    ClientShowType[ClientShowType["BeDisCardEvo"] = 20] = "BeDisCardEvo";
    ClientShowType[ClientShowType["AddGlobalBuff"] = 21] = "AddGlobalBuff";
    ClientShowType[ClientShowType["RemoveGlobalBuff"] = 22] = "RemoveGlobalBuff";
    ClientShowType[ClientShowType["WillEvo"] = 23] = "WillEvo";
    ClientShowType[ClientShowType["WillPlay"] = 24] = "WillPlay";
    ClientShowType[ClientShowType["PlayerTimeFlow"] = 25] = "PlayerTimeFlow";
    ClientShowType[ClientShowType["Card_Activate_Effect"] = 26] = "Card_Activate_Effect";
    ClientShowType[ClientShowType["NeedChangeCardState"] = 27] = "NeedChangeCardState";
})(ClientShowType = exports.ClientShowType || (exports.ClientShowType = {}));
var DtProtoEnum_CardInfoType;
(function (DtProtoEnum_CardInfoType) {
    DtProtoEnum_CardInfoType[DtProtoEnum_CardInfoType["None"] = 0] = "None";
    DtProtoEnum_CardInfoType[DtProtoEnum_CardInfoType["Buff"] = 1] = "Buff";
    DtProtoEnum_CardInfoType[DtProtoEnum_CardInfoType["Effect"] = 2] = "Effect";
})(DtProtoEnum_CardInfoType = exports.DtProtoEnum_CardInfoType || (exports.DtProtoEnum_CardInfoType = {}));
class DtRoomData {
    room;
    roomId;
    seed = 0;
    cost = 0;
    round = 0;
    actionPlayerId;
    type = DtRoomType.None;
    Custom;
    playerACardId;
    playerBCardId;
    battleCardLimit;
}
exports.DtRoomData = DtRoomData;
var DtRoomType;
(function (DtRoomType) {
    DtRoomType[DtRoomType["None"] = 0] = "None";
    DtRoomType[DtRoomType["NoCost"] = 1] = "NoCost";
    DtRoomType[DtRoomType["NoSortInStartBattle"] = 2] = "NoSortInStartBattle";
    DtRoomType[DtRoomType["NoChangeCardsInStartBattle"] = 4] = "NoChangeCardsInStartBattle";
    DtRoomType[DtRoomType["CustomStartRule"] = 8] = "CustomStartRule";
    DtRoomType[DtRoomType["FirstTurnCanDraw"] = 16] = "FirstTurnCanDraw";
    DtRoomType[DtRoomType["SkipHatchPhase"] = 32] = "SkipHatchPhase";
    DtRoomType[DtRoomType["IsReplay"] = 64] = "IsReplay";
    DtRoomType[DtRoomType["BATTLE_CARD_LIMIT"] = 128] = "BATTLE_CARD_LIMIT";
    DtRoomType[DtRoomType["RIDDLE_MODE"] = 256] = "RIDDLE_MODE";
    DtRoomType[DtRoomType["FIRST_TUN_SKIL_ACTIVE_PHASE"] = 512] = "FIRST_TUN_SKIL_ACTIVE_PHASE";
    DtRoomType[DtRoomType["FIRST_TURN_JUMP_TO_MAIN_PHASE"] = 1024] = "FIRST_TURN_JUMP_TO_MAIN_PHASE";
})(DtRoomType = exports.DtRoomType || (exports.DtRoomType = {}));
class DtEffectDesc {
    effectid;
    skills;
}
exports.DtEffectDesc = DtEffectDesc;
class DtSkillDesc {
    indexStage;
    effectToPlayer;
    area;
    compare;
    count;
    cardTypes;
    skill;
    otherSkill;
    group = "";
    constructor() {
        this.area = new Array();
        this.cardTypes = new Array();
    }
}
exports.DtSkillDesc = DtSkillDesc;
class DtSkillReasonDesc {
    reason;
    type;
    num;
}
exports.DtSkillReasonDesc = DtSkillReasonDesc;
//# sourceMappingURL=DtMessageData.js.map