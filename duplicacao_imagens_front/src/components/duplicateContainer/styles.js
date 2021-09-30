import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 50vh;

  h3 {
    margin-top: 10px;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: var(--orange);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--light-grey);
  }

  .duplicateBox {
    height: 90%;
  }
`;

export default StyledContainer;
