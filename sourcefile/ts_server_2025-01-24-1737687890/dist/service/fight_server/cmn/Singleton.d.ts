export default class Singleton {
    constructor();
    private static _instance;
    static getInstance<T>(_class: {
        new (): T;
    }): T;
    getName(): string;
}
