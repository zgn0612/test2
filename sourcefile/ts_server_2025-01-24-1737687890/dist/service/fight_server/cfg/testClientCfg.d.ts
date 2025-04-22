import _baseCfg from "./_baseCfg";
interface ITestClientCfg {
    mid1: number;
    test_float: number;
    test_str: string;
    test_array: string[];
    test_dict: {
        [key: string]: number;
    };
}
export default class testClientCfg extends _baseCfg {
    cfgList: ITestClientCfg[];
    initCfg(): void;
}
export {};
