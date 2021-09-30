import { useState } from "react";
import InputContainer from "./styles";
import Button from "../button/index";
import { useSendToDB } from "../../providers/sendToDB";
import { useGetDuplicates } from "../../providers/getDuplicates";

const InputFile = () => {
  const [files, setFiles] = useState();
  const [preview, setPreview] = useState([]);

  const { sendAll, uploaded, needApproval } = useSendToDB();
  const { lineApproval, getDuplicates} = useGetDuplicates();

  const objectToArray = (obj) => {
    let array = [];

    Object.values(obj).map((item) =>
      array.push({ file: URL.createObjectURL(item), name: item.name })
    );

    return array;
  };

  const handleUploadFiles = (e) => {
    setFiles(e.target.files);

    setPreview(objectToArray(e.target.files));
  };

  const sendAndReset = () =>{
    
    sendAll(files)
    setPreview([])
  
  }

  return (
    <InputContainer>
   

      <div className="inputContainer">
        <input
          type="file"
          name="imageComparation"
          multiple
          onChange={handleUploadFiles}
        />
        <Button
          setBackground="var(--orange)"
          setColor="white"
          setClick={sendAndReset}
        >
          Enviar
        </Button>
      </div>
      <div className="previewContainer">
        <h3 className="previewTitle">Preview - Imagens para Upload</h3>
        <div className="previewImages">
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
      </div>
    </InputContainer>
  );
};

export default InputFile;
