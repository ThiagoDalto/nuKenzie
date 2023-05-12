/* import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TotalMoney from './components/TotalMoney/TotalMoney';
import List from './components/List/List';

import { useState } from 'react';

import './App.css';

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredAddTransaction, setFilteredAddTransaction] = useState([]);
  const [filteredSubTransaction, setFilteredSubTransaction] = useState([]);

  function addTransactions(newTransaction) {
    setListTransactions([...listTransactions, newTransaction]);
  }

  return (
    <div className="principal">
      <Header />
      <div className="main">
        <div className="main__auxiliar">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            addTransactions={addTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        {listTransactions.length ? (
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            filteredAddTransaction={filteredAddTransaction}
            setFilteredAddTransaction={setFilteredAddTransaction}
            filteredSubTransaction={filteredSubTransaction}
            setFilteredSubTransaction={setFilteredSubTransaction}
          />
        ) : (
          <h1 className="message">Você ainda não possui nenhum lançamento</h1>
        )}
      </div>
    </div>
  );
}

export default App;
 */
