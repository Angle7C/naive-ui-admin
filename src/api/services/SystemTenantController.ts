import type {Executor} from '../';
import type {Dynamic_TenantEntity} from '../model/dynamic/';

export class SystemTenantController {
    
    constructor(private executor: Executor) {}
    
    readonly list: () => Promise<
        ReadonlyArray<Dynamic_TenantEntity>
    > = async() => {
        let _uri = '/system/tenant/listNoAuth';
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<ReadonlyArray<Dynamic_TenantEntity>>;
    }
}

export type SystemTenantControllerOptions = {
    'list': {}
}
