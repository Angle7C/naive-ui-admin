export interface PageReq<T> {
    readonly currentIndex: number;
    readonly pageSize: number;
    readonly query: T;
}
