// import "./List.css";

import Card from '../Card/Card';
import { Resume } from './style';
function List({
  listTransactions,
  setListTransactions,
  removeCards,
  filteredAddTransaction,
  setFilteredAddTransaction,
  filteredSubTransaction,
  setFilteredSubTransaction,
}) {
  const filterdEntradas = listTransactions.filter(
    (entrada) => entrada.type !== 'Despesa',
  );

  const filterdDespesas = listTransactions.filter(
    (saida) => saida.type !== 'Entrada',
  );
  return (
    <Resume>
      <div className="container_cabecalho">
        <h5 className="titulo">Resumo financeiro</h5>
        <div className="conatainer_btn">
          <button
            className="btn_cards todos"
            onClick={() => setListTransactions({})}
          >
            Todos
          </button>
          <button
            className="btn_cards entradas"
            onClick={() => setListTransactions(filterdEntradas)}
          >
            Entradas
          </button>
          <button
            className="btn_cards saidas"
            onClick={() => setListTransactions(filterdDespesas)}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {listTransactions.map((transaction, index) => {
          return (
            <Card
              setListTransactions={setListTransactions}
              transaction={transaction}
              key={index}
              removeCards={removeCards}
              listTransactions={listTransactions}
              filteredAddTransaction={filteredAddTransaction}
              setFilteredAddTransaction={setFilteredAddTransaction}
              filteredSubTransaction={filteredSubTransaction}
              setFilteredSubTransaction={setFilteredSubTransaction}
            />
          );
        })}
      </ul>
    </Resume>
  );
}

export default List;
