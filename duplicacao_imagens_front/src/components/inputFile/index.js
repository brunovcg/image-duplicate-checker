import { useState } from "react";
import InputContainer from "./styles";

const InputFile = () => {
  const [files, setFiles] = useState();
  const [preview, setPreview] = useState([]);

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
    console.log(files);
  };

  return (
    <InputContainer>
      <button onClick={teste}>teste</button>
      <form>
        <input
          type="file"
          name="imageComparation"
          multiple
          onChange={handleUploadFiles}
        />
      </form>
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
