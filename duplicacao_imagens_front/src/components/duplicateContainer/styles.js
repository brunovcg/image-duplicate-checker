import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  margin-top: 50px;

  h3 {
    margin: 10px 0;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--light-grey);
    display: flex;
    justify-content: center;
    background-color: var(--blue);

    .icon {
      border: 1px solid white;
      border-radius: 50%;
      width: 35px;
      height: 35px;
    }
    span {
      margin-left: 10px;
    }
  }

  .duplicateBox {
    height: 90%;
  }
`;

export default StyledContainer;
