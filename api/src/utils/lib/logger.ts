import chalk from "chalk";

// XXX improve this logger
export class Logger {
    private logs: string[] = [];

    public log(message: string, level: "info" | "warn" | "error" = "info") {
        const now = new Date().toLocaleTimeString();
        const color = level === "error"
            ? chalk.red : level === "warn"
                ? chalk.yellow : chalk.gray;
        this.logs.push(color(`[${level.toUpperCase()}] ${message}`));
    }

    public dump() {
        return ` ↳ ${this.logs.join("\n ↳ ")}`;
    }
}
