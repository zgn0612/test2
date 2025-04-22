import { DtFsmAttack_BaseState } from "./DtFsmAttack_BaseState";
export declare class DtFsmAttack_DefenseAttackJudge extends DtFsmAttack_BaseState {
    private state;
    private needDefenseJudge;
    private defCard;
    private oppPlayer;
    Enter(): void;
    private CheckIsOver;
    Excute(): void;
    SkipDefenseAttackJudge(): void;
    private DefenseJudge;
    private TriggerDefenseEffect;
    private CanActivateDefenseEffect;
    Clear(): void;
}
