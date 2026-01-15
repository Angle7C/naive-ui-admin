import type {MenuTypeEnum} from '../enums/';
import type {Dynamic_Role} from './';

export interface Dynamic_Menu {
    readonly id?: number;
    readonly createTime?: string;
    readonly updateTime?: string;
    readonly createBy?: string;
    readonly createById?: number;
    readonly updateBy?: string;
    readonly updateById?: number;
    readonly deleted?: number;
    readonly code?: string;
    readonly name?: string;
    readonly icon?: string;
    readonly sort?: number;
    readonly type?: MenuTypeEnum;
    readonly component?: string;
    readonly treePath?: string;
    readonly parent?: Dynamic_Menu | undefined;
    readonly children?: ReadonlyArray<Dynamic_Menu>;
    readonly roles?: ReadonlyArray<Dynamic_Role>;
}
