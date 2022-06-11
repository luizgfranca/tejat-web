import { Dispatch, SetStateAction } from "react";
import Account from "../../model/account";
import AccountService from "../../service/account";
import { SelectorPropItem } from "../../ui/selector";

export async function loadAccounts(
  setAccounts: Dispatch<SetStateAction<Account[] | null>>
) {
  const accounts = await AccountService.list();
  if (accounts) setAccounts(accounts);
  else setAccounts([]);
}

export function getAccountsSelectorOptions(accounts: Account[] | null): SelectorPropItem[] {
    if(!accounts) return [];
    return accounts.map(account => {
        return {
            description: account.name,
            action: () => alert(account.id)
        }
    })
}
