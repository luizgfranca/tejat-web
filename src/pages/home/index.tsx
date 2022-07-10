import React from "react";
import Grid from "../../ui/grid";
import Selector from "../../ui/selector";
import "./style.css";
import { useState } from "react";
import Account from "../../model/account";
import {
  buidAccountsSelectorOptions,
  getTransactionListHeaders,
  loadAccounts,
} from "./action";
import Transaction from "../../model/transaction";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[] | null>(null);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  if (accounts === null) loadAccounts(setAccounts);

  return (
    <div className={"mainPage"}>
      <div className="navMenuContainer">
        <div className="navMenuItems">
          <Link className="navMenuLink" to={'/'}>
            <div className="navMenuItem">
              Transações
            </div>
          </Link>
          <Link className="navMenuLink" to={'/account/create'}>
            <div className="navMenuItem">
              Nova conta
            </div>
          </Link>
        </div>
      </div>
      <div className="contentContainer">
        <div className={"selectorContainer"}>
          <Selector
            options={buidAccountsSelectorOptions(accounts, setTransactions)}
          />
        </div>
        <div className={"gridContainer"}>
          <Grid
            headers={getTransactionListHeaders()}
            items={transactions || []}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
