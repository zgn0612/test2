"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtFsmEvolution_Evolution = void 0;
const DtEnum_1 = require("../../../Data/DtEnum");
const DtMessageData_1 = require("../../../Message/DtMessageData");
const DtFsmEvolution_BaseState_1 = require("./DtFsmEvolution_BaseState");
const DtFsmevolution_End_1 = require("./DtFsmevolution_End");
class DtFsmEvolution_Evolution extends DtFsmEvolution_BaseState_1.DtFsmEvolution_BaseState {
    Enter() {
        let evoCard = this.GetMachine().evoCard;
        let oriCard = this.GetMachine().oriCard;
        evoCard.ResetState();
        if (this.GetMachine().type == DtEnum_1.DtEvolutionType.Normal) {
            evoCard.cardBattleState = oriCard.cardBattleState;
            evoCard.cardSummonRound = oriCard.cardSummonRound;
            this.GetMachine().player.CardEvo(evoCard, oriCard);
            evoCard.SetCardEvoOriginSkill();
            evoCard.SetInheritBuff(oriCard.PopInheritBuff());
            evoCard.UpdateInheritEffectData(oriCard.effects);
            evoCard.UpdateInheritEffectDataWithOriCreator(oriCard.originEffect);
            evoCard.SetInheritEffect(oriCard.PopInheritEffects());
        }
        else if (this.GetMachine().type == DtEnum_1.DtEvolutionType.Fusion) {
            evoCard.cardBattleState = DtEnum_1.DtCardBattleState.Activate;
            evoCard.cardSummonRound = 0;
            this.GetMachine().player.CardFusionEvo(evoCard, oriCard, this.GetMachine().bottomCard);
            evoCard.SetCardEvoOriginSkill();
        }
        if (this.GetMachine().other != 100) {
            this.GetMachine().player.DrawCard(DtMessageData_1.DtProtoEnum_MoveReason.EvoDraw);
        }
        this.GetMachine().manager.ChangeReduceCost(evoCard, this.GetMachine().GetCost(), DtMessageData_1.DtProtoEnum_MoveReason.Evolution);
        this.GetMachine().ChangeState(DtFsmevolution_End_1.DtFsmevolution_End.name);
    }
}
exports.DtFsmEvolution_Evolution = DtFsmEvolution_Evolution;
//# sourceMappingURL=DtFsmEvolution_Evolution.js.map