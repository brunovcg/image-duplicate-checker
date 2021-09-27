import logo from "../../assets/logo.png";
import HeaderStyle from "./styles";

const Header = () => {
  return (
    <header className="headerContainer">
      <HeaderStyle>
   
          <figure>
            <img src={logo} alt="logo_hapvida" />
          </figure>
          <p>Duplicação de Imagens Hapvida - Front (Piloto)</p>
     
        
      </HeaderStyle>
    </header>
  );
};

export default Header;
