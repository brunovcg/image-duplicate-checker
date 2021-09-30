import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 4px solid var(--blue);

  .inputContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;

    input {
      border: 1px solid var(--blue);
      height: fit-content;
    }
  }

  .previewContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 200px;
    border-top: 4px solid var(--blue);
    border-bottom: 4px solid var(--blue);
    overflow-x: scroll;

    .previewTitle {
      color: var(--orange);
      height: 20%;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .previewImages {
      display: flex;
      height: 80%;
      align-items: center;
      figure {
        margin: 5px;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 300px;

        img {
          border: 2px solid black;
          width: 100px;
          height: 60px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default InputContainer;
