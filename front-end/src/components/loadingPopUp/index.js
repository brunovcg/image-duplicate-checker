import StyledContainer from "./styles";



const Loading = ({ files }) => {
  


  return (
    <StyledContainer>
      <figure>
        {/* <img src="" alt="logoHapvida" /> */}
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
