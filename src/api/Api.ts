import type {Executor} from './';
import {
    SystemDeptController, 
    SystemMenuController, 
    SystemMenuService, 
    SystemTenantController, 
    SystemUserController
} from './services/';

export class Api {
    
    readonly systemDeptController: SystemDeptController
    
    readonly systemMenuController: SystemMenuController
    
    readonly systemTenantController: SystemTenantController
    
    readonly systemUserController: SystemUserController
    
    readonly systemMenuService: SystemMenuService
    
    constructor(executor: Executor) {
        this.systemDeptController = new SystemDeptController(executor);
        this.systemMenuController = new SystemMenuController(executor);
        this.systemTenantController = new SystemTenantController(executor);
        this.systemUserController = new SystemUserController(executor);
        this.systemMenuService = new SystemMenuService(executor);
    }
}