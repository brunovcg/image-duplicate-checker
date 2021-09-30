import StyledContainer from "./styles";
import Button from "../button";
import { useAcceptDuplicate } from "../../providers/acceptDuplicate";
import { useRefuseDuplicate } from "../../providers/refuseDuplicate";
import { useGetDuplicates } from "../../providers/getDuplicates";

const DuplicateCard = () => {
  const { lineApproval } = useGetDuplicates();
  const { refuseDuplicate } = useRefuseDuplicate();
  const { acceptDuplicate } = useAcceptDuplicate();

  return (
    <StyledContainer>
      {lineApproval &&
        lineApproval.map((item) => (
          <div className="cards" key={item.imageId}>
            <figure className="imageApproval">
              <img alt={item.name} src={item.image} />
              <p>{item.filename}</p>
              <p>{item.date}</p>

              <div className="buttonBox">
                <Button
                  setBackground="green"
                  setColor="white"
                  setWidth="85px"
                  setClick={() => acceptDuplicate(item.imageId)}
                >
                  Aceitar
                </Button>
                <Button
                  setBackground="red"
                  setColor="white"
                  setWidth="85px"
                  setClick={() => refuseDuplicate(item.imageId)}
                >
                  Descartar
                </Button>
              </div>
            </figure>
            <div className="duplicateBox">
              {item &&
                item.images_duplicate.map((duplicate) => (
                  <figure key={duplicate.imageId} className="imageDuplicate">
                    <img alt="" src={duplicate.image} />
                    <p>{duplicate.filename}</p>
                    <p>{duplicate.date}</p>
                  </figure>
                ))}
            </div>
          </div>
        ))}
    </StyledContainer>
  );
};

export default DuplicateCard;
