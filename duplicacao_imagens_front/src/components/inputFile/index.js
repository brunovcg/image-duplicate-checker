import { useState } from "react";
import InputContainer from "./styles";
import Button from '../button/index'
import {useHash} from '../../providers/getHash'
import {useSendToDB} from '../../providers/sendToDB'

const InputFile = () => {
  const [files, setFiles] = useState();
  const [preview, setPreview] = useState([]);


  const {getHash} = useHash()
  const {sendAll, uploaded, needApproval} = useSendToDB()



  const objectToArray = (obj) => {
    let array = [];

    Object.values(obj).map((item) =>
      array.push({ file: URL.createObjectURL(item), name : item.name })
    );

    return array;
  };

  const handleUploadFiles = (e) => {
    setFiles(e.target.files);

    setPreview(objectToArray(e.target.files));
  };


  const teste = () => {
   
 
  }



  return (
    <InputContainer>
      <button onClick={()=>console.log(uploaded)}>teste</button>
      <button onClick={()=>console.log(needApproval)}>teste2</button>
      <div>
        <input
          type="file"
          name="imageComparation"
          multiple
          onChange={handleUploadFiles}
        />
        <Button
          setBackground="var(--orange)"
          setColor="white"
          setClick={()=>sendAll(files)}
        
        >Enviar</Button>
      </div>
      <div className="previewContainer">
        {preview &&
          preview.map((file, index) => (
            <figure key={index}>
              <img
                src={file.file}
                alt={file.name}
                encType="multipart/form-data"
              />
              <p>{file.name}</p>
            
            </figure>
          ))}
      </div>
    </InputContainer>
  );
};

export default InputFile;
