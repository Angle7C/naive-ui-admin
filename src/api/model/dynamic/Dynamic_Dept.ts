import type {Dynamic_User} from './';

export interface Dynamic_Dept {
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
    readonly sort?: number;
    readonly status?: number;
    readonly treePath?: string;
    readonly users?: ReadonlyArray<Dynamic_User>;
    readonly parent?: Dynamic_Dept | undefined;
    readonly children?: ReadonlyArray<Dynamic_Dept>;
}
