import StyledContainer from "./styles";
import Button from "../button"

const DuplicateLoadImage = ({source, alternative}) => {



    return (
        <StyledContainer>
            <figure>
                <img src={source} alt={alternative} encType="multipart/form-data"/>
                <p>{alternative}</p>
                <Button
                setBackground="var(--orange)"
                setColor="white"
                
                >Enviar</Button>
            </figure>

        </StyledContainer>
    )
}

export default DuplicateLoadImage

