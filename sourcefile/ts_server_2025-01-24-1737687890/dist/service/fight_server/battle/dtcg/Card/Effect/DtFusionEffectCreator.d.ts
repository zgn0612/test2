/// <reference types="long" />
import { Long } from "../../../../cmn/proto/Long";
import { DtCardBase } from "../DtCardBase";
import { DtEffect, DtEffectResult } from "../Effect/DtEffect";
import { DtEffectCreator } from "../Effect/DtEffectCreator";
export default class DtFusionEffectCreator extends DtEffectCreator {
    private fusionCost;
    private list;
    private fusionCardTop;
    private fusionCardBottom;
    protected SetFusionCost(cost: number): void;
    CheckTopCardCondition(card: DtCardBase): boolean;
    CheckBottomCardCondition(card: DtCardBase): boolean;
    protected SetFusionEffect(): void;
    private GetDesc1;
    protected FusionCondition(): boolean;
    protected FusionEffect1(effect: DtEffect): DtEffectResult;
    protected FusionChoose1(uid: Long, effect: DtEffect): void;
    FusionEffect2(effect: DtEffect): DtEffectResult;
    FusionChoose2(uid: Long, effect: DtEffect): void;
    GetFusionCost(): number;
    CheckMaterialContaion(material: DtCardBase): boolean;
    GetOtherMaterialCards(material: DtCardBase): Array<DtCardBase>;
}
