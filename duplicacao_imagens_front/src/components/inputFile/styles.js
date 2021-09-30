import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--blue);
  border-bottom: 4px solid var(--dark-blue);

  .inputContainer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
    width: 100%;

    input {
      border: 1px solid var(--blue);
      height: 30px;
      background-color: white;
      border-radius: 5px;
      padding: 3px 10px 0 3px;
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

    .previewTitle {
      color: white;
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
      overflow-x: auto;
      figure {
        margin: 5px;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 300px;

        img {
          border: 2px solid white;
          width: 100px;
          height: 60px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: 0.5s;

          :hover {
            width: 150px;
            height: 90px;
          }
        }

        p {
          margin-top: 5px;
          font-size: 15px;
          color: white;
        }
      }
    }
  }
`;

export default InputContainer;
