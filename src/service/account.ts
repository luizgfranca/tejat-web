import { getAccounts } from "../api/account";
import Account from "../model/account";

export default class AccountService {
  static async list(): Promise<Account[] | null> {
    try {
      const response = await getAccounts();
      return response.data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
