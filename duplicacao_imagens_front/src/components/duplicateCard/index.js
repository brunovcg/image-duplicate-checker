import StyledContainer from "./styles";
import Button from "../button";

import { useGetDuplicates } from "../../providers/getDuplicates";

const DuplicateCard = () => {
  const { lineApproval } = useGetDuplicates();

  return (
    <StyledContainer>
     
        {lineApproval &&
          lineApproval.map((item, index) => (
            <div>
              <figure key={index} className="imageApproval">
                <img alt={item.name} src={item.image} />

                <div className="buttonBox">
                  <Button setBackground="green" setColor="white">
                    Aceitar
                  </Button>
                  <Button setBackground="red" setColor="white">
                    Descartar
                  </Button>
                </div>
              </figure>
              <div className="duplicateBox">

                 {item && item.images_duplicate.map((duplicate, indexDup)=>(

                    <figure key={indexDup} className="imageDuplicate">
                        <img alt="" src={duplicate.image}/>
                    </figure>


                 ))}

              </div>
              
            </div>
          ))}
   
    </StyledContainer>
  );
};

export default DuplicateCard;
