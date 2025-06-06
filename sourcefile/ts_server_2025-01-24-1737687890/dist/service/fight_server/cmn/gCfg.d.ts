import Singleton from "./Singleton";
import globalCfg from "../cfg/globalCfg";
import testClientCfg from "../cfg/testClientCfg";
import card_basic from "../cfg/card_basic";
import card_evo_condition from "../cfg/card_evo_condition";
import language_cfg from "../cfg/language_cfg";
import client_effect from "../cfg/client_effect";
import deckCfg from "../cfg/deckCfg";
import card_skill from "../cfg/card_skill";
import partsAvatarCfg from "../cfg/partsAvatarCfg";
import partsCardCoverCfg from "../cfg/partsCardCoverCfg";
import partsCardBoxCfg from "../cfg/partsCardBoxCfg";
import partsDuelCfg from "../cfg/partsDuelCfg";
import partsFieldCfg from "../cfg/partsFieldCfg";
import cardBagCfg from "../cfg/cardBagCfg";
import goodsShelvesDetailCfg from "../cfg/goodsShelvesDetailCfg";
import goodsPriceCfg from "../cfg/goodsPriceCfg";
import shopGoodsTypeCfg from "../cfg/shopGoodsTypeCfg";
import card_special_evo_condition from "../cfg/card_special_evo_condition";
import aiDeckCfg from "../cfg/aiDeckCfg";
import aiRoleCfg from "../cfg/aiRoleCfg";
export default class _Cfg extends Singleton {
    globalCfg: globalCfg;
    testClientCfg: testClientCfg;
    card_basic: card_basic;
    card_evo_condition: card_evo_condition;
    card_special_evo_condition: card_special_evo_condition;
    language: language_cfg;
    client_effect: client_effect;
    deck_cfg: deckCfg;
    card_skill: card_skill;
    partsAvatarCfg: partsAvatarCfg;
    partsCardCoverCfg: partsCardCoverCfg;
    partsCardBoxCfg: partsCardBoxCfg;
    partsDuelCfg: partsDuelCfg;
    partsFieldCfg: partsFieldCfg;
    cardBagCfg: cardBagCfg;
    goodsShelvesDetailCfg: goodsShelvesDetailCfg;
    goodsPriceCfg: goodsPriceCfg;
    shopGoodsTypeCfg: shopGoodsTypeCfg;
    aiDeckCfg: aiDeckCfg;
    aiRoleCfg: aiRoleCfg;
    initCfg(): void;
}
