import StyledContainer from "./styles";

const Instructions = () => {
  return (
    <StyledContainer>
      <div>
        <h3>Instruções</h3>

        <ul>
          <li>
            <h4>Carregando Imagens</h4>
            <p>
              Utilize a barra superior para escolher os arquivos que deseja
              fazer UPLOAD, clique em Enviar.
            </p>
          </li>
          <li>
            <h4>Preview de Imagens</h4>
            <p>Antes do envio, será exibido um preview das imagens que serão carregadas.</p>
          </li>
          <li>
            <h4>Duplicatas Carregadas</h4>
            <p>
              A aplicação exibirá imagens que foram carregadas em duplicata pelo
              usuário, podendo estas ser excluidas ou aceitas. Imagens que
              foram carregadas sem duplicatas serão enviadas direto ao banco.
            </p>
          </li>
          <li>
            <h4>Duplicatas no Banco</h4>
            <p>
              A aplicação irá verificar se existe duplicatas no
              banco da imagens enviadas. Caso não haja, a imagem é salva, do contrário será
              salva em um banco provisório onde aguardará o descarte ou aceite
              do usuário, neste último caso sendo enviada ao banco principal.
            </p>
          </li>
        </ul>
      </div>
    </StyledContainer>
  );
};

export default Instructions;
