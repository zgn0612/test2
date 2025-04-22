import { DcgProto } from "../../service/fight_server/cmn/proto/protoMsg";
export interface RespData {
    ErrorCode: DcgProto.E_ErrorCode;
    RespMsg: Uint8Array;
}
