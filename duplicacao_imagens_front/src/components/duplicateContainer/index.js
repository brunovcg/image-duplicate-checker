import StyledContainer from "./styles";
import DuplicateCard from "../duplicateCard";

const Duplicates = () => {
  return (
    <StyledContainer>
      <h3>Avaliação de Duplicatas no Banco</h3>
      <div className="duplicatesBox">
        <DuplicateCard />
      </div>
    </StyledContainer>
  );
};

export default Duplicates;
