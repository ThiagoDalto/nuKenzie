// import "./TotalMoney.css";

function TotalMoney({ listTransactions, transaction }) {
  function saldoTotal(transactions) {
    const sumOfTransactions = transactions.reduce((acc, { value, type }) => {
      return type === 'Entrada' ? acc + Number(value) : acc - Number(value);
    }, 0);
    return sumOfTransactions;
  }

  return (
    <div className={listTransactions.length ? 'container' : 'containerNulo'}>
      <div className="saldoValor">
        <h5 className="titulo__valor">Valor total:</h5>
        <span className="saldo_valor">{saldoTotal(listTransactions)}$</span>
      </div>
      <span className="saldo_info">O valor se refere ao saldo</span>
    </div>
  );
}

export default TotalMoney;
