import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 50vh;

  h3 {
    margin: 10px 0;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: var(--orange);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--light-grey);
    display: flex;
    justify-content: center;

    .icon{
      border: 1px solid var(--orange);
      border-radius: 50%;
      width: 35px;
      height: 35px;
    }
    span{
      margin-left: 10px;
    }
  }

  .duplicateBox {
    height: 90%;
  }
`;

export default StyledContainer;
