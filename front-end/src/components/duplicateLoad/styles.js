import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  margin: 25px 0;

  figure {
    margin: 5px 0;
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

    .buttonBox {
      display: flex;
    }
  }
`;

export default StyledContainer;
