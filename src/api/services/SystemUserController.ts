import type {Executor} from '../';
import type {Dynamic_User} from '../model/dynamic/';
import type {
    LoginUser, 
    Page, 
    PageReq, 
    TokenView, 
    UpdateUser, 
    UserReq
} from '../model/static/';

export class SystemUserController {
    
    constructor(private executor: Executor) {}
    
    readonly Login: (options: SystemUserControllerOptions['Login']) => Promise<
        TokenView
    > = async(options) => {
        let _uri = '/system/user/login';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<TokenView>;
    }
    
    readonly createUser: (options: SystemUserControllerOptions['createUser']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/user/create';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<void>;
    }
    
    readonly deleteUser: (options: SystemUserControllerOptions['deleteUser']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/user/delete';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.id;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'id='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        return (await this.executor({uri: _uri, method: 'DELETE'})) as Promise<void>;
    }
    
    readonly getUserInfo: () => Promise<
        Dynamic_User
    > = async() => {
        let _uri = '/system/user/getUserInfo';
        return (await this.executor({uri: _uri, method: 'GET'})) as Promise<Dynamic_User>;
    }
    
    readonly page: (options: SystemUserControllerOptions['page']) => Promise<
        Page<Dynamic_User>
    > = async(options) => {
        let _uri = '/system/user/page';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<Page<Dynamic_User>>;
    }
    
    readonly updateUser: (options: SystemUserControllerOptions['updateUser']) => Promise<
        void
    > = async(options) => {
        let _uri = '/system/user/update';
        return (await this.executor({uri: _uri, method: 'POST', body: options.body})) as Promise<void>;
    }
}

export type SystemUserControllerOptions = {
    'Login': {
        readonly body: LoginUser
    }, 
    'getUserInfo': {}, 
    'createUser': {
        readonly body: Dynamic_User
    }, 
    'updateUser': {
        readonly body: UpdateUser
    }, 
    'deleteUser': {
        readonly id?: number | undefined
    }, 
    'page': {
        readonly body: PageReq<UserReq>
    }
}
