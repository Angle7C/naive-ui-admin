import type {Dynamic_Menu, Dynamic_User} from './';

export interface Dynamic_Role {
    readonly id?: number;
    readonly createTime?: string;
    readonly updateTime?: string;
    readonly createBy?: string;
    readonly createById?: number;
    readonly updateBy?: string;
    readonly updateById?: number;
    readonly deleted?: number;
    readonly name?: string;
    readonly code?: string;
    readonly status?: number;
    readonly sort?: number;
    readonly users?: ReadonlyArray<Dynamic_User>;
    readonly menus?: ReadonlyArray<Dynamic_Menu>;
}
