import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 4px solid var(--blue);

  input {
    border: 1px solid var(--blue);
  }

  .previewContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    figure {
        margin: 5px;
        overflow-x: auto;
        height: 120px;
        
      img {
        border: 2px solid black;
        width: 20%;

       
      }
      p {
          font-size: 15px;
      }
    }
  }
`;

export default InputContainer;
