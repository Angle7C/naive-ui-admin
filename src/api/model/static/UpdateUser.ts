export interface UpdateUser {
    readonly id?: number | undefined;
    readonly username: string;
    readonly email: string;
    readonly password: string;
}
