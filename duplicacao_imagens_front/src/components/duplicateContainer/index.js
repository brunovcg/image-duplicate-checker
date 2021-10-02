import StyledContainer from "./styles";
import DuplicateCard from "../duplicateCard";
import { SearchIcon} from '@chakra-ui/icons'

const Duplicates = () => {
  return (
    <StyledContainer>
      <h3> <div className="icon"><SearchIcon/></div>  <span>Avaliação de Duplicatas no Banco</span></h3>
      <div className="duplicatesBox">
        <DuplicateCard />
      </div>
    </StyledContainer>
  );
};

export default Duplicates;
