import logo from "../../assets/logo.png";
import HeaderStyle from "./styles";

const Header = () => {
  return (
    <header className="headerContainer">
      <HeaderStyle>
        <figure>
          <img src={logo} alt="logo_hapvida" />
        </figure>
        <h1>Duplicação de Imagens - (Piloto)</h1>
      </HeaderStyle>
    </header>
  );
};

export default Header;
