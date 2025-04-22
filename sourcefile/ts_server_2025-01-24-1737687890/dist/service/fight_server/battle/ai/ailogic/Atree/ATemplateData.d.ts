import { DcgProto } from "../../../../cmn/proto/protoMsg";
export declare class ATemplateData {
    needLog: boolean;
}
export declare class AIEffectActivateData extends ATemplateData {
    data: Array<DcgProto.IS_EffectActivate>;
}
export declare class AIChooseData extends ATemplateData {
    choose: DcgProto.IS_PlayerChoose;
    data: Array<DcgProto.IS_OtherCard>;
    cancel: boolean;
}
export declare class AIChooseOption extends ATemplateData {
    option: DcgProto.IS_PlayerSelectOptions;
    set: number;
}
export declare class AIDefenseChoose extends ATemplateData {
    choose: DcgProto.IS_PlayerDefenseSelect;
    data: Array<DcgProto.IS_OtherCard>;
}
export declare class AIBattleStartIfChangeCards extends ATemplateData {
    aidecide: number;
}
export declare class AIRunGmCmds extends ATemplateData {
    cmds: Array<string>;
    constructor();
}
