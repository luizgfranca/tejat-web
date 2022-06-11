import Account from "./account";

export default class Transaction {
    id: string;
    description: string;
    value: number;
    createdAt: string;
    origin: Account;
    destination: Account;
}