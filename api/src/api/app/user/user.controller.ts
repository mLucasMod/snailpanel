import { DatabaseInstance } from "@snail/utils";
import { User } from "./user";

export class UserController {

    public constructor(private readonly db: DatabaseInstance) {}

    async getAllUsers(): Promise<User[]> {
        return await this.db.fetchAll<User>("SELECT id, username, email FROM users");
    }

    async createUser(username: string, email: string, password: string): Promise<void> {
        await this.db.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);
    }

    async findUserById(id: number): Promise<User | null> {
        return await this.db.fetchOne<User>("SELECT id, username, email FROM users WHERE id = ?", [id]);
    }

    async findUserByLogin(login: string): Promise<User | null> {
        return await this.db.fetchOne<User>("SELECT id, username, email FROM users WHERE username = ? OR email = ?", [login, login]);
    }

    async findUserByUsernameOrEmail(username: string, email: string): Promise<User | null> {
        return await this.db.fetchOne<User>("SELECT id, username, email FROM users WHERE username = ? OR email = ?", [username, email]);
    }

    async updateUser(user: User): Promise<void> {
        await this.db.execute("UPDATE users SET username = ?, email = ? WHERE id = ?", [user.username, user.email, user.id]);
    }

    async updateUserPassword(id: number, password: string): Promise<void> {
        await this.db.execute("UPDATE users SET password = ? WHERE id = ?", [password, id]);
    }

    async deleteUser(id: number): Promise<void> {
        await this.db.execute("DELETE FROM users WHERE id = ?", [id]);
    }
}
