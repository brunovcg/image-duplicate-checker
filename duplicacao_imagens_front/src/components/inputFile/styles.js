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
    }

    .previewImages {
      display: flex;
      height: 80%;
      width: 100%;
      align-items: center;
      overflow-x: auto;
      
      overflow-x: auto;
      figure {
        margin: 5px;
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
          font-size: 1.2vw;
          color: white;
        }
      }
    }
  }

  .duplicateLoad {
    width: 100%;

    .duplicateTitle{
      text-align: center;
      margin: 20px 0 10px 0;
      color: white;
      background: var(--yellow);
      height: 20%;
      width: 100%;
      padding: 10px 0;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .duplicateLoadBox {
      width: 100%;
      display: flex;
      height: fit-content;
    }
  }
`;

export default InputContainer;
