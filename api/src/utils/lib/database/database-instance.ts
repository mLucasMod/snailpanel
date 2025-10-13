import { DatabaseError } from "./database-error";

export abstract class DatabaseInstance {
    abstract _connect(): Promise<void>;
    abstract isConnected(): Promise<boolean>;
    abstract execute(sql: string, params?: any[]): Promise<void>;
    abstract fetchOne<T = any>(sql: string, params?: any[]): Promise<T | null>;
    abstract fetchAll<T = any>(sql: string, params?: any[]): Promise<T[]>;

    protected handleError(error: Error): never {
        throw new DatabaseError(error.message);
    }
}
