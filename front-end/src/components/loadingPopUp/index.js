import StyledContainer from "./styles";
import logo from "../../assets/logo.png";


const Loading = ({ files }) => {
  


  return (
    <StyledContainer>
      <figure>
        <img src={logo} alt="logoHapvida" />
      </figure>
      <div className="animation">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="counter">
        <p>
          Upload de {!files ? 0 : files.length}{" "}
          {!files ? "" : files.length === 1 ? "arquivo" : "arquivos"}{" "}
        </p>
      </div>
    </StyledContainer>
  );
};

export default Loading;
