import { HeaderInit } from './style';
//import logo from '../../assets/NuKenzie.png';

function Header() {
  return (
    <HeaderInit>
      <div className="div__suporte">
        <figure>{/* <img src={logo} alt="Nu Kenzie" /> */}</figure>
        <button className="iniciar_btn">Início</button>
      </div>
    </HeaderInit>
  );
}

export default Header;
