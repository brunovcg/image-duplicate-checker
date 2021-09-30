import StyledContainer from "./styles";
import DuplicateCard from "../duplicateCard";

const Duplicates = () => {



    return(
        <StyledContainer>
            <h3>Duplicatas no Banco de Dados</h3>
            <div className="duplicatesBox">


                <DuplicateCard/>

               



            </div>

        </StyledContainer>
    )



}


export default Duplicates;