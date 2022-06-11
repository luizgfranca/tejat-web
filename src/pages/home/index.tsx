import React from "react";
import Grid from "../../ui/grid";
import Selector from "../../ui/selector";
import './style.css'
import { useState } from "react";
import Account from "../../model/account";
import { getAccountsSelectorOptions, loadAccounts } from "./action";

const Home: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[] | null>(null)

  if(accounts === null)
    loadAccounts(setAccounts);

  return (
    <div className={'mainPage'}>
      <div className={'selectorContainer'}>
        <Selector options={getAccountsSelectorOptions(accounts)}/>
      </div>
      <div className={'gridContainer'}>
        <Grid 
          headers={[
            {propertyName: 'col1', description: 'first'},
            {propertyName: 'col2', description: 'second'},
            {propertyName: 'col3', description: 'third'}
          ]}
          items={
            [
              {col1: 1, col2: 2, col3: 3},
              {col1: 4, col2: 5, col3: 6},
              {col1: 7, col2: 8, col3: 9},
              {col1: 10, col2: 11, col3: 12}
            ]
          }
        />
      </div>
      
    </div>
    
  );
};

export default Home;
