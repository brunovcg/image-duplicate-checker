import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 4px solid var(--blue);

  form{
    display: flex;
    align-items: center;
  input {
    border: 1px solid var(--blue);
    height: fit-content;

  }}

  .previewContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    figure {
        margin: 5px;
        overflow-y: auto;
        height: 200px;
        
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
