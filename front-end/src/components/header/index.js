import HeaderStyle from "./styles";
import Button from "../button";
import { InfoIcon } from "@chakra-ui/icons";
import { useSendToDB } from "../../providers/sendToDB";
import { useGetDuplicates } from "../../providers/getDuplicates";
import { useState } from "react";
import Instructions from "../../components/instructions";

const Header = ({ inst }) => {
  const [openInstruction, setOpenStruction] = useState(false);
  const { lineApproval } = useGetDuplicates();
  const { duplicateCheck } = useSendToDB();

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
        {/* <img alt="logo"/> */}
        </figure>
        <h1>Duplicação de Imagens - (Piloto)</h1>

        <div className="buttonBox">
          {lineApproval.length > 0 || duplicateCheck.length > 0 || inst ? (
            <Button
              setBackground="var(--light-blue)"
              setWidth="40px"
              setHeight="40px"
              setClick={modifyInstruction}
            >
              <InfoIcon w={25} h={25} color="white" />
            </Button>
          ) : (
            ""
          )}
        </div>
      </HeaderStyle>
    </header>
  );
};

export default Header;
