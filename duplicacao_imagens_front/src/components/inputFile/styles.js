import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--blue);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-bottom: 4px solid var(--dark-blue);

  .inputContainer {
    margin: 20px 0;
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
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    border-top: 4px solid var(--blue);

     .previewTitle {
      margin: 15px 0 15px 0;
      color: white;
      height: 20%;
      width: 100%;
      padding: 10px 0;
      background: var(--yellow);
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 20px;
      }
    }

    .previewImages {
      display: flex;
      height: 80%;
      width: 100%;
      align-items: center;
      overflow-x: auto;

   

      figure {
        margin: 25px 10px;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 180px;

        img {
          border: 2px solid white;
          width: 120px;
          height: 80px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          padding: 1px;
          background-color: white;
          transition: 0.5s;
        }

        p {
          margin-top: 5px;
          font-size: 0.5rem;
          color: white;
        }
      }
    }
  }

  .duplicateLoad {
    width: 100%;

    .duplicateTitle {
      text-align: center;
      margin: 20px 0 10px 0;
      color: white;
      background: var(--orange);
      height: 20%;
      width: 100%;
      padding: 10px 0;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 20px;
      }
    }
    .duplicateLoadBox {
      width: 100%;
      display: flex;
      height: fit-content;
      overflow-x: auto;
    }
  }
`;

export default InputContainer;
