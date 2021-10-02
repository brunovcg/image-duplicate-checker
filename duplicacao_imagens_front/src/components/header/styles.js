import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  height: 8vh;
  background-color: white;
  display: flex;
  align-items: center;

  figure {
    width: 30%;
    margin-left: 5px;
    img {
      width: 100%;
      max-width: 200px;
    }
  }
  h1 {
    width: 70%;
    font-size: 1.8rem;
    color: var(--grey);
  }

  .buttonBox{
    margin-right: 40px;
  }
`;

export default HeaderStyle;
