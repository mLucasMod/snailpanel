import { Database } from "@snail/utils";
import fs from "fs";
import path from "path";

async function runMigrations() {
    const db = await Database.getInstance();

    await db.execute(`
        CREATE TABLE IF NOT EXISTS migrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    const applied = await db.fetchAll<{ name: string }>("SELECT name FROM migrations");
    const appliedNames = applied.map(m => m.name);

    const migrationsDir = path.join(process.cwd(), "migrations");
    const files = fs.readdirSync(migrationsDir).filter(file => file.endsWith(".sql")).sort();

    for (const file of files) {
        if (appliedNames.includes(file)) {
            console.log(`⚪ Skipped ${file}`);
            continue;
        }

        try {
            const content = fs.readFileSync(path.join(migrationsDir, file), "utf-8");
            await db.execute(content);
            await db.execute("INSERT INTO migrations (name) VALUES (?)", [file]);
            console.log(`✅ Applied ${file}`);
        } catch (error: any) {
            console.error(`❌ Failed to apply ${file}: ${error.message}`);
            break;
        }
    }

    console.log("🎉 Migrations complete");
}

runMigrations();
