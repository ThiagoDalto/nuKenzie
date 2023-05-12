// import "./Form.css";
import { useState } from 'react';
import { InputForm } from './style';

function Form({ listTransactions, setListTransactions, addTransactions }) {
  const [transactionInput, setTransactionInput] = useState('');
  const [valueTransactionInput, setvalueTransactionInput] = useState('');
  const [valueOption, setValueOption] = useState('Entrada');

  function addValues(event) {
    event.preventDefault();
    let transaction = {
      description: transactionInput,
      type: valueOption,
      value: valueTransactionInput,
    };
    addTransactions(transaction);
  }

  return (
    <InputForm onSubmit={addValues}>
      <h1 className="descricao">Descrição</h1>
      <input
        className="entrada__descricao"
        type="text"
        name="descrição"
        placeholder="    Digite aqui sua descrição"
        value={transactionInput}
        id=""
        onChange={(event) => setTransactionInput(event.target.value)}
      />
      <p className="exemplo_txt">EX: Compra de roupas</p>
      <div className="form_suporte2">
        <div className="form_suporte3">
          <h5 className="info_title">valor</h5>
          <div className="inputStyled">
            <input
              className="entrada__valor"
              type="text"
              name="valor"
              placeholder="    1"
              value={valueTransactionInput}
              onChange={(event) => setvalueTransactionInput(event.target.value)}
            />
            <span className="money">R$</span>
          </div>
        </div>
        <div>
          <h5 className="info_title">Tipo de valor</h5>
          <select
            className="entrada__valor noCorner"
            name=""
            id=""
            value={valueOption}
            onChange={(event) => setValueOption(event.target.value)}
          >
            <option className="option_entrada" value="Entrada">
              Entrada
            </option>
            <option className="option_despesa" value="Despesa">
              Despesa
            </option>
          </select>
        </div>
      </div>
      <button className="btn_submit" type="submit">
        Inserir Valor
      </button>
    </InputForm>
  );
}

export default Form;
