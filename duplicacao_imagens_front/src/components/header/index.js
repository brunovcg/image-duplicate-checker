import logo from "../../assets/logo.png";
import HeaderStyle from "./styles";
import Button from "../button";
import { InfoIcon } from "@chakra-ui/icons";

import { useState } from "react";
import Instructions from "../../components/instructions";

const Header = ({ inst }) => {
  const [openInstruction, setOpenStruction] = useState(false);

  const modifyInstruction = () => {
    setOpenStruction(!openInstruction);
  };

  return (
    <header className="headerContainer">
      {openInstruction && (
        <div className="instructions">
          <Instructions />
        </div>
      )}

      <HeaderStyle>
        <figure>
          <img src={logo} alt="logo_hapvida" />
        </figure>
        <h1>Duplicação de Imagens - (Piloto)</h1>
        <div className="buttonBox">
          {inst && (
            <Button
              setBackground="var(--light-blue)"
              setWidth="40px"
              setHeight="40px"
              setClick={modifyInstruction}
            >
              <InfoIcon w={25} h={25} color="white" />
            </Button>
          )}
        </div>
      </HeaderStyle>
    </header>
  );
};

export default Header;
