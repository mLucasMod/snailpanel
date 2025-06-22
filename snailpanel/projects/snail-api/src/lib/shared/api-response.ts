export interface ApiResponse<T = null> {
    payload: T;
    status: number;
    requestCode: string;
    resultCode: string;
}
