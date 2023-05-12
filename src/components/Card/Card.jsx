// import "./Card.css";
import { FaTrashAlt } from 'react-icons/fa';

function Card({ setListTransactions, transaction, listTransactions }) {
  function removeCard() {
    const removeCards = listTransactions.filter((card) => card !== transaction);
    setListTransactions(removeCards);
  }

  return (
    <li
      className={transaction.type === 'Entrada' ? 'card entrada' : 'card saida'}
    >
      <div className="card_suporte">
        <h5 className="card_titulo">{transaction.description}</h5>
        <div className="div_suporte2">
          <span>R$ {transaction.value},00</span>
          <button className="lixeira" onClick={removeCard}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <h4 className="type">{transaction.type}</h4>
    </li>
  );
}

export default Card;
