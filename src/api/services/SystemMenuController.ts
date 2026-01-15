import type {Executor} from '../';
import type {Dynamic_Menu} from '../model/dynamic/';

export class SystemMenuController {
    
    constructor(private executor: Executor) {}
    
    readonly findUserMenu: () => Promise<
        ReadonlyArray<Dynamic_Menu>
    > = async() => {
        let _uri = '/system/menu/findUserMenu';
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<Dynamic_Menu>>;
    }
}

export type SystemMenuControllerOptions = {
    'findUserMenu': {}
}
