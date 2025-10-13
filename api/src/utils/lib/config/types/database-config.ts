export interface DatabaseConfig {
    driver?: "sqlite" | "mysql" | "mariadb";
    filepath?: string;
    filename?: string;
    host?: string;
    port?: number;
    user?: string;
    password?: string;
    database?: string;
}
