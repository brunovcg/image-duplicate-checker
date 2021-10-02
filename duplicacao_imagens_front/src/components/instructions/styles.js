import styled from "styled-components";

const StyledConatiner = styled.div`
  padding: 50px 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  div {
    border: 1px solid var(--light-blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    h3 {
      margin: 20px 0;
      color: var(--orange);
      font-size: 2rem;
    }
    ul {
      width: 100%;

      li {
        padding: 0 30px;
        margin-bottom: 30px;
        h4 {
          color: var(--yellow);
          margin-bottom: 5px;
        }

        p {
          color: var(--blue);
          text-align: justify;
        }
      }
    }
  }
`;

export default StyledConatiner;
