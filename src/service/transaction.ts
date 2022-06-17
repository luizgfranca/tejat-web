import { getTransactionsByOriginAccount } from "../api/transaction";
import Transaction from "../model/transaction";
import env from '../env.json';

export interface ListTransactionsOptions {
    formatTime: boolean;
}

export default class TransactionService {
    static async getByOriginAccount(originAccountId: string, options?: ListTransactionsOptions): Promise<Transaction[] | null> {
        try {
            const { data } = await getTransactionsByOriginAccount(originAccountId);
            
            if(!options || !data?.length)
                return data.map(t => new Transaction(t));

            return data.map((t): Transaction => {
                const transaction = new Transaction(t);
                transaction.formatDate(env.timeFormat);
                return transaction;
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}