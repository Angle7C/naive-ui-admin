import type {Dynamic_Dept, Dynamic_Role} from './';

export interface Dynamic_User {
    readonly id?: number;
    readonly createTime?: string;
    readonly updateTime?: string;
    readonly createBy?: string;
    readonly createById?: number;
    readonly updateBy?: string;
    readonly updateById?: number;
    readonly deleted?: number;
    readonly username?: string;
    readonly email?: string;
    readonly phone?: string;
    readonly code?: string;
    readonly password?: string;
    readonly avatar?: string;
    readonly dept?: Dynamic_Dept;
    readonly roles?: ReadonlyArray<Dynamic_Role>;
}
