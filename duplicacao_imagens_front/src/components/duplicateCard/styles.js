import styled from "styled-components";

const StyledContainer = styled.div`
  .cards {
    display: flex;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    margin: 10px 0;
    padding: 10px 0;
    background-color: var(--light-grey);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    .imageApproval {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 30%;
      padding: 10px;

      img {
        border: 1px solid grey;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding:5px;
        background-color: white;
      }

      p {
        margin-top: 5px;
        font-size: 1.3vw;
      }

      .buttonBox {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    .duplicateBox {
      width: 65%;
      display: flex;
      overflow-x: scroll;
      background-color: white;
      padding: 10px;

      .imageDuplicate {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          border: 1px solid grey;
          margin-right: 10px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          padding:5px;
          background-color: white;
        }

        p {
          margin-top: 5px;
          text-align: center;
          font-size: 1.3vw;
        }
      }
    }
  }
`;

export default StyledContainer;
