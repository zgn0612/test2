"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtRandom = void 0;
class DtRandom {
    constructor(seed) {
        this.seed = seed;
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
    }
    seed;
    get value() {
        return this.range(0, 1);
    }
    get insideUnitCircle() {
        var randomAngle = this.range(0, 360);
        var randomDis = this.range(0, 1);
        var randomX = randomDis * Math.cos(randomAngle * Math.PI / 180);
        var randomY = randomDis * Math.sin(randomAngle * Math.PI / 180);
        return [randomX, randomY];
    }
    get onUnitCircle() {
        var randomAngle = this.range(0, 360);
        var randomX = Math.cos(randomAngle * Math.PI / 180);
        var randomY = Math.sin(randomAngle * Math.PI / 180);
        return [randomX, randomY];
    }
    range(min, max) {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;
        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    }
    static seed;
    static get value() {
        return this.range(0, 1);
    }
    static get insideUnitCircle() {
        var randomAngle = this.range(0, 360);
        var randomDis = this.range(0, 1);
        var randomX = randomDis * Math.cos(randomAngle * Math.PI / 180);
        var randomY = randomDis * Math.sin(randomAngle * Math.PI / 180);
        return [randomX, randomY];
    }
    static get onUnitCircle() {
        var randomAngle = this.range(0, 360);
        var randomX = Math.cos(randomAngle * Math.PI / 180);
        var randomY = Math.sin(randomAngle * Math.PI / 180);
        return [randomX, randomY];
    }
    static range(min, max) {
        if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
        }
        max = max || 1;
        min = min || 0;
        this.seed = (this.seed * 9301 + 49297) % 233280;
        var rnd = this.seed / 233280.0;
        return min + rnd * (max - min);
    }
}
exports.DtRandom = DtRandom;
//# sourceMappingURL=DtRandom.js.map