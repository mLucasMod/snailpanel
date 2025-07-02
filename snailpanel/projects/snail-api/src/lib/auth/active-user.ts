import { User } from "@snail/api";

export interface ActiveUser {
    authenticated: boolean;
    user: User | null;
}
