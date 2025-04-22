export declare class DtRandom {
    constructor(seed: number);
    seed: number;
    get value(): number;
    get insideUnitCircle(): number[];
    get onUnitCircle(): number[];
    range(min: number, max: number): number;
    static seed: number;
    static get value(): number;
    static get insideUnitCircle(): number[];
    static get onUnitCircle(): number[];
    static range(min: number, max: number): number;
}
