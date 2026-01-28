
export interface Account {
    bank: string;
    name: string;
    accountNumber: string;
    status: "verified" | "pending" | "unverified"; // you can extend as needed
    transactionType: string;
    primary: boolean;
}