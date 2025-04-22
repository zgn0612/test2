"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DtEnum_1 = require("../../Data/DtEnum");
const DtDigimonPersistenceBuff_1 = require("../Effect/DtDigimonPersistenceBuff");
class EC_EX1_022_2 extends DtDigimonPersistenceBuff_1.default {
    colors;
    SetEffect() {
        this.colors = new Array();
        for (let i = 0; i < 8; i++) {
            this.colors.push(0);
        }
        this.CreatePersistenceBuff(DtEnum_1.DtBuffType.CHANGE_DP, DtEnum_1.DtEffectRoundValid.Self);
    }
    OnIntBuffCondition() {
        for (let i = 0; i < this.colors.length; i++) {
            this.colors[i] = 0;
        }
        let cards = this.parent.GetOriginDigimonList();
        for (let i = 0; i < cards.length; i++) {
            let cr = cards[i].config.color;
            for (let j = 0; j < cr.length; j++) {
                let idx = Number(cr[j]);
                this.colors[idx]++;
            }
        }
        let c = 0;
        for (let i = 0; i < this.colors.length; i++) {
            if (this.colors[i] > 0) {
                c += 1000;
            }
        }
        return c;
    }
}
exports.default = EC_EX1_022_2;
//# sourceMappingURL=EC_EX1_022_2.js.map