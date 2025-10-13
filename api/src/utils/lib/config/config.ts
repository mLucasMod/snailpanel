import fs from "fs";
import path from "path";
import { ApiConfig } from "./types/api-config";
import { DaemonConfig } from "./types/daemon-config";
import { DatabaseConfig } from "./types/database-config";

export class Config {
  private static _api: ApiConfig;
  private static _daemon: DaemonConfig;
  private static _database: DatabaseConfig;

  public static get api(): ApiConfig {
    if (!this._api) this._api = this.load<ApiConfig>("api");
    return this._api;
  }

  public static get daemon(): DaemonConfig {
    if (!this._daemon) this._daemon = this.load<DaemonConfig>("daemon");
    return this._daemon;
  }

  public static get database(): DatabaseConfig {
    if (!this._database) this._database = this.load<DatabaseConfig>("database");
    return this._database;
  }

  private static load<T>(name: string): T {
    const configPath = path.join(process.cwd(), "config", `${name}.json`);

    if (!fs.existsSync(configPath)) {
      throw new Error(`Missing config file: ${configPath}`);
    }

    const raw = fs.readFileSync(configPath, "utf-8");
    try {
      return JSON.parse(raw) as T;
    } catch (error: any) {
      throw new Error(`Invalid JSON in ${name}.json: ${error.message}`);
    }
  }
}
