import StyledContainer from "./styles";
import Button from "../button";
import {useDuplicateLoad} from "../../providers/dupllicateLoadAccept"

const DuplicateLoadImage = ({ source, alternative, fileInfo }) => {


  const {deleteFromArray, accept} = useDuplicateLoad()

  return (
    <StyledContainer>
      <figure>
        <img src={source} alt={alternative} encType="multipart/form-data" />
        <p>{alternative}</p>
        <div className="buttonBox">
          <Button
            setBackground="green"
            setColor="white"
            setFont="1.5vw"
            setWidth="4rem"
            setHeight="20px"
            setClick={()=>accept(fileInfo)}
          >
            Enviar
          </Button>

          <Button
            setBackground="red"
            setColor="white"
            setFont="1.5vw"
            setWidth="8vw"
            setHeight="20px"
            setClick={()=>deleteFromArray(fileInfo)}
          >
            Cancelar
          </Button>
        </div>
      </figure>
    </StyledContainer>
  );
};

export default DuplicateLoadImage;
