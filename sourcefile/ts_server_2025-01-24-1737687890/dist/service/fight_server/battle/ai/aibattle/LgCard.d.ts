/// <reference types="long" />
import { Icfg_card_basic } from "../../../cfg/card_basic";
import { Long } from "../../../cmn/proto/Long";
import { DcgProto } from "../../../cmn/proto/protoMsg";
import { DtAreaType, DtBuffType, DtCardBattleState, DtCardColor, DtCardType } from "../../dtcg/Data/DtEnum";
import { DtCardDigimonType } from "../../dtcg/Data/DtCardDigimonType";
import { AIServerCammand } from "../ailogic/Atree/ADefine";
import { AtreeRoot } from "../ailogic/Atree/AtreeRoot";
import { LgArea } from "./LgArea";
import { LgPlayer } from "./LgPlayer";
export declare class LgCard {
    uid: Long;
    parent: LgPlayer;
    areaType: DtAreaType;
    sData: DcgProto.IS_OtherCard;
    sDetail: DcgProto.IS_OtherCardDetail;
    cardCfg: Icfg_card_basic;
    cardInfoData: DcgProto.IS_GameBattleCardInfo[];
    cardInBattleData: DcgProto.IS_GameBattleCard;
    cardInHandData: DcgProto.IS_GameHandCard;
    private serverCost;
    private AITrees;
    private AIEvo;
    private AIAttack;
    private AIChooseAI;
    private AIOptionAI;
    private AIDefenseAI;
    private AICheckOnceTree;
    private activateEffectDatas;
    constructor(parent: LgPlayer, uid: Long);
    SetData(data: DcgProto.IS_OtherCard, detail: DcgProto.IS_OtherCardDetail): void;
    CheckSetCfgId(cfgId: number): void;
    SetArea(area: LgArea): void;
    GetArea(): DtAreaType;
    UpdateGameBattleData(data: DcgProto.IS_GameBattleCard): void;
    UpdateGameHandData(data: DcgProto.IS_GameHandCard): void;
    GetBottomOriginDigimon(): LgCard;
    GetEvoOriginPrevCardIID(): Long;
    SetEvoOriginPrevCardIID(uid: Long): void;
    GetOriginDigimonList(): Array<LgCard>;
    GetBattleState(): DtCardBattleState;
    GetCfgName(): string;
    GetCfgDP(): number;
    GetCfgCardId(): number;
    GetCardLastDP(): number;
    GetCardLastPower(): number;
    GetCardColorCount(): number;
    GetCardLv(): number;
    GetCardCfgNumber(): string;
    private GetBattleScene;
    GetCardPlayCost(): number;
    CardTypeIs(type: DtCardType): boolean;
    HasBuff(buff: DtBuffType): boolean;
    ColorIs(color: DtCardColor): boolean;
    NameIs(name: DtCardDigimonType, isForce?: boolean): boolean;
    FeatureIs(type: DtCardDigimonType): boolean;
    HasEffect(skillid: number): boolean;
    CardCanBlock(): boolean;
    CardCanPlay(): boolean;
    CardCanEvo(): boolean;
    CardCanEvoThis(evoCard: LgCard): boolean;
    CheckCanEvoWithEffect(orCard: LgCard): number;
    CheckDigimonCanEvo(evo: LgCard): boolean;
    CardCanAttackDefense(): boolean;
    CardCanAttackMonster(): boolean;
    CanBeAttack(atkCard: LgCard): boolean;
    GetCardOriListCount(): number;
    CardCanAttack(): boolean;
    CheckEffectInBattle(): boolean;
    CheckEffectInHand(): boolean;
    CheckFusionInHand(): boolean;
    SetActivateEffectInCurrentRound(effectid: number): void;
    HasActivateEffectInCurrentRound(effectid: number): boolean;
    GetCardEffectFreLimit(carduid: Long, effectid: number): boolean;
    private SetAI;
    AIEvaluate(): AIServerCammand;
    SetTempAI(ai: string): void;
    GetChooseAI(): AtreeRoot;
}
