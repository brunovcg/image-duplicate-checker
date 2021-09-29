import { useState } from "react";
import InputContainer from "./styles";
import Button from '../button/index'
import {useHash} from '../../providers/getHash'

const InputFile = () => {
  const [files, setFiles] = useState();
  const [preview, setPreview] = useState([]);


  const {getHash} = useHash()



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
    getHash()
  // console.log("teste")
  }



  return (
    <InputContainer>
      {/* <button onClick={teste}>teste</button> */}
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
          setClick={teste}
        
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
