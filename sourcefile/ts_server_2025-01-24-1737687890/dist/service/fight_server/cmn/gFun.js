"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("./Singleton");
const protoMsg_1 = require("./proto/protoMsg");
class _gFun extends Singleton_1.default {
    fillNum(num) {
        let str = 0 <= num && num < 10 ? "0" : "";
        return str + Math.floor(num);
    }
    CheckDigimonCanEvo(origin, evo) {
        if (evo.card_evo_condition != null) {
            for (let i = 0; i < evo.card_evo_condition.length; i++) {
                if (this.CheckCardColorIs(origin, evo.card_evo_condition[i].color)) {
                    if (origin.lv == evo.card_evo_condition[i].lv) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    CheckCardColorIs(card, color) {
        for (let i = 0; i < card.color.length; i++) {
            if (card.color[i] == color) {
                return true;
            }
        }
        return false;
    }
    stringToBytes(str) {
        var bytes = new Uint8Array(str.length);
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes[i] = (((c >> 18) & 0x07) | 0xF0);
                bytes[i] = (((c >> 12) & 0x3F) | 0x80);
                bytes[i] = (((c >> 6) & 0x3F) | 0x80);
                bytes[i] = ((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes[i] = (((c >> 12) & 0x0F) | 0xE0);
                bytes[i] = (((c >> 6) & 0x3F) | 0x80);
                bytes[i] = ((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes[i] = (((c >> 6) & 0x1F) | 0xC0);
                bytes[i] = ((c & 0x3F) | 0x80);
            }
            else {
                bytes[i] = (c & 0xFF);
            }
        }
        return bytes;
    }
    byteToString(byte) {
        if (typeof byte === 'string') {
            return byte;
        }
        var str = '', _arr = byte;
        for (var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2), v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            }
            else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;
    }
    IsArray(obj) {
        return obj && typeof obj == "object" && obj instanceof Array;
    }
    DeepClone(tSource, tTarget) {
        if (this.IsArray(tSource)) {
            tTarget = tTarget || [];
        }
        else {
            tTarget = tTarget || {};
        }
        for (const key in tSource) {
            if (Object.prototype.hasOwnProperty.call(tSource, key)) {
                if (typeof tSource[key] === "object" && typeof tSource[key] !== null) {
                    tTarget[key] = this.IsArray(tSource[key]) ? [] : {};
                    this.DeepClone(tSource[key], tTarget[key]);
                }
                else {
                    tTarget[key] = tSource[key];
                }
            }
        }
        return tTarget;
    }
    SimpleClone(tSource, tTarget) {
        if (this.IsArray(tSource)) {
            tTarget = tTarget || [];
        }
        else {
            tTarget = tTarget || {};
        }
        for (const key in tSource) {
            if (Object.prototype.hasOwnProperty.call(tSource, key)) {
                tTarget[key] = tSource[key];
            }
        }
        return tTarget;
    }
    Random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    GetPhaseText(phase) {
        switch (phase) {
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_NONE:
                return "游戏初始化";
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_BATTLE:
                return "游戏开始";
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_DRAW_CARD:
                return "抽卡阶段";
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_ACTIVE:
                return "激活阶段";
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_FOSTER:
                return "育成阶段";
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_MAIN:
                return "主要阶段";
            case protoMsg_1.DcgProto.E_BATTLE_PHASE.BP_OVER:
                return "结束阶段";
        }
        return "未知阶段";
    }
    GetAreaText(area) {
        switch (area) {
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_DECK:
                return "卡组";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_HAND:
                return "手牌";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_DEFENSE:
                return "安防";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_DIGITAMA:
                return "数码蛋";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_DIGITAMA_HATCH:
                return "养成区";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_IN_BATTLE:
                return "战斗区";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_EVO:
                return "进化源";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_TOKEN:
                return "卡组外";
            case protoMsg_1.DcgProto.E_AREA_TYPE.AT_GY:
                return "废弃区";
        }
        return "未知";
    }
    GetReasonText(area) {
        switch (area) {
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_DRAW:
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_APPOINT_DRAW:
                return "抽卡";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_SET_DEFENSE:
                return "设置安防";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_HATCH:
                return "孵化";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_HATCH_BATTLE:
                return "养成区移动到战斗区";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_PLAY_TO_BATTLE:
                return "登场";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_EFFECT_BATTLE:
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_EFFECT_TO_BATTLE_AND_REST:
                return "效果登场";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_CARD_EFFECT:
                return "效果";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_DISCARD:
                return "丢弃";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_DISCARD_EVOORIGIN:
                return "丢弃进化源";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_DEGENERATE:
                return "退化";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_BATTLE_DESTORY:
                return "战斗破坏";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_EFFECT_DRAW:
                return "效果抽卡";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_EVO_DRAW:
                return "进化奖励";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_RESTORE:
                return "恢复";
            case protoMsg_1.DcgProto.E_MOVE_REASON.MR_BODY_LEAVE_BATTLE:
                return "破坏";
        }
        return "其他";
    }
    GetMainPlayerId() {
        return null;
    }
    JsonToLong(json) {
        return null;
    }
    formatString(str, ...args) {
        return str.replace(/\{(\d+)\}/g, (match, index) => {
            return typeof args[index] !== "undefined" ? args[index] : match;
        });
    }
    GetBattleRoomFight() {
        let msg = new protoMsg_1.DcgProto.Req_RoomFight;
        msg.RoomIID = null;
        return msg;
    }
    GetCardInList(list, uid) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].UidEquals(uid)) {
                return list[i];
            }
        }
        return null;
    }
    PopCardInList(list, uid) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].UidEquals(uid)) {
                let card = list[i];
                list.splice(i, 1);
                return card;
            }
        }
        return null;
    }
    GetCardListWithCondition(list, func) {
        let ret = new Array();
        for (let i = 0; i < list.length; i++) {
            if (func(list[i])) {
                ret.push(list[i]);
            }
        }
        return ret;
    }
    CheckCardListWithCondition(list, func) {
        for (let i = 0; i < list.length; i++) {
            if (func(list[i])) {
                return true;
            }
        }
        return false;
    }
}
exports.default = _gFun;
;
//# sourceMappingURL=gFun.js.map