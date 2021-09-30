import styled from "styled-components";

const StyledContainer = styled.div`
  .cards {
    display: flex;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    margin: 10px 0;
    padding: 10px 0;

    .imageApproval {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 30%;

      img {
        border: 1px solid grey;
      }

      p{
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
      width: 70%;
      display: flex;
      overflow-x: scroll;
      

      .imageDuplicate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

        
        img {
          border: 1px solid grey;
          margin-right: 5px;
        }

        p{
          text-align: center;
          font-size: 1.3vw;
        }
      }
    }
  }
`;

export default StyledContainer;
