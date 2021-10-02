import StyledContainer from "./styles";
import Button from "../button";
import { useDuplicateLoad } from "../../providers/dupllicateLoadAccept";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

const DuplicateLoadImage = ({ source, alternative, fileInfo }) => {
  const { deleteFromArray, accept } = useDuplicateLoad();

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
            setHeight="2rem"
            setClick={() => accept(fileInfo)}
          >
            <CheckIcon w={16} h={16} />
          </Button>

          <Button
            setBackground="red"
            setColor="white"
            setFont="1.5vw"
            setWidth="2rem"
            setHeight="2rem"
            setClick={() => deleteFromArray(fileInfo)}
          >
            <DeleteIcon w={15} h={15} />
          </Button>
        </div>
      </figure>
    </StyledContainer>
  );
};

export default DuplicateLoadImage;
