import _baseCfg from "./_baseCfg";
export interface IaiRoleCfg {
    id: number;
    name: string;
    elo: number;
    group_id: number;
    ai: string;
    new_player_battle: number;
    player_name: string;
    player_avatar: number;
}
export default class aiRoleCfg extends _baseCfg {
    cfgList: IaiRoleCfg[];
    initCfg(): void;
    GetGroupIdWithRoleId(id: number): number;
    GetCfgWithRoleId(id: number): IaiRoleCfg;
}
