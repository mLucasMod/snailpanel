import { Config } from "@snail/utils";
import { DatabaseInstance } from "./database-instance";
import { SQLiteDriver } from "./drivers/sqlite-driver";

export class Database {
    private static instance: DatabaseInstance | null = null;

    public static async getInstance(): Promise<DatabaseInstance> {
        if (this.instance === null) {
            let instance: DatabaseInstance;
            switch (Config.database.driver) {
                case "sqlite":
                default:
                    instance = new SQLiteDriver();
                    break;
            }
            await instance._connect();
            this.instance = instance;
        }
        return this.instance;
    }
}
