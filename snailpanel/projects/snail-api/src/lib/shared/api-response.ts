export interface ApiResponse<T = null> {
    payload: T;
    status: number;
}
