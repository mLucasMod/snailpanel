export interface ApiConfig {
    host?: string;
    port?: number;
    cors?: {
        supportsCredentials?: boolean;
        origins?: string[];
        allowHeaders?: string[];
        allowMethods?: string[];
    }
    jwt?: {
        secret?: string;
        expiresIn?: number;
    }
    cookie?: {
        httpOnly?: boolean;
        secure?: boolean;
        sameSite?: "strict" | "lax" | "none";
        maxAge?: number;
    }
}
