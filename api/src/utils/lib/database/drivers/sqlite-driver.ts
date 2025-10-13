import path from "path";
import { Database, open } from "sqlite";
import sqlite3 from "sqlite3";
import { Config } from "../../config/config";
import { DatabaseInstance } from "../database-instance";

export class SQLiteDriver extends DatabaseInstance {
    private db!: Database<sqlite3.Database, sqlite3.Statement>;

    async _connect(): Promise<void> {
        try {
            const filepath = Config.database.filepath ?? "data"
            const filename = Config.database.filename ?? "database.db"

            const dbPath = path.isAbsolute(filepath)
                ? path.join(filepath, filename)
                : path.join(process.cwd(), filepath, filename);
            this.db = await open({
                filename: dbPath,
                driver: sqlite3.Database,
            });
        } catch (error: any) {
            this.handleError(error);
        }
    }

    public async isConnected(): Promise<boolean> {
        try {
            await this.db.get("SELECT 1");
            return true;
        } catch (error: any) {
            return false;
        }
    }

    public async execute(sql: string, params: any[] = []): Promise<void> {
        try {
            await this.db.run(sql, params);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    public async fetchOne<T = any>(sql: string, params: any[] = []): Promise<T | null> {
        try {
            return await this.db.get<T>(sql, params) ?? null;
        } catch (error: any) {
            this.handleError(error);
        }
    }

    public async fetchAll<T = any>(sql: string, params: any[] = []): Promise<T[]> {
        try {
            return await this.db.all<T[]>(sql, params);
        } catch (error: any) {
            this.handleError(error);
        }
    }
}
