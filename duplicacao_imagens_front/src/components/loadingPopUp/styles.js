import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  figure {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    img {
      width: 200px;
      margin-left: 20px;
    }
  }

  .animation {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 180px;
      height: 160px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 180px;
      height: 180px;
      margin: 20px;
      border: 20px solid var(--orange);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--orange) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .counter {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 3rem;
      color: var(--blue);
      font-weight: bold;
    }
  }
`;
export default StyledContainer;
