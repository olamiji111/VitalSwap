// src/api/accounts-api.ts
import type { Account } from "../types";

const BASE_URL = "http://localhost:3000";

export const fetchAccounts = async (): Promise<Account[]> => {
    const res = await fetch(`${BASE_URL}/accounts`);

    if (!res.ok) {
        throw new Error("Failed to fetch accounts");
    }

    const data: Account[] = await res.json();
    return data;
};