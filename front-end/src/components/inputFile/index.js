import { useState } from "react";
import InputContainer from "./styles";
import Button from "../button/index";
import { useSendToDB } from "../../providers/sendToDB";
import { useLoading } from "../../providers/loading";
import Modal from "react-modal";
import customStyles from "../../utils/customStyles";
import Loading from "../../components/loadingPopUp";
import { toast } from "react-toastify";
import { WarningTwoIcon, ViewIcon } from "@chakra-ui/icons";

import DuplicateLoadImage from "../duplicateLoad";

const InputFile = ({ setInst, inst }) => {
  const [files, setFiles] = useState();
  const [preview, setPreview] = useState([]);
  const { sendAll, duplicateCheck } = useSendToDB();
  const { modalIsOpen, setModalIsOpen } = useLoading();

  const objectToArray = (obj) => {
    let array = [];

    Object.values(obj).map((item) =>
      array.push({ image: URL.createObjectURL(item), name: item.name })
    );
    return array;
  };

  const handleUploadFiles = (e) => {
    setFiles(e.target.files);

    setPreview(objectToArray(e.target.files));
    setInst(true);
  };

  const sendAndReset = () => {
    if (files) {
      sendAll(files);
      setPreview([]);
      setInst(false);
    } else {
      toast.error("Você precisa selecionar pelo menos 1 imagem!");
    }
  };

  return (
    <InputContainer>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        <Loading files={files} />
      </Modal>

      <div className="inputContainer">
        <input
          type="file"
          name="imageComparation"
          id="imageComparation"
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

      {preview.length > 0 && (
        <div className="previewContainer">
          <h3 className="previewTitle">
            <ViewIcon w={35} h={35} />{" "}
            <span>Preview - Imagens para Upload</span>
          </h3>
          <div className="previewImages">
            {preview &&
              preview.map((file, index) => (
                <figure key={index}>
                  <img
                    src={file.image}
                    alt={file.name}
                    encType="multipart/form-data"
                  />
                  <p>{file.name}</p>
                </figure>
              ))}
          </div>
        </div>
      )}

      {duplicateCheck.length > 0 && (
        <div className="duplicateLoad">
          <h3 className="duplicateTitle">
            <WarningTwoIcon w={25} h={25} /> <span>Duplicatas Carregadas</span>
          </h3>

          <div className="duplicateLoadBox">
            {duplicateCheck &&
              duplicateCheck.map((file, index) => (
                <DuplicateLoadImage
                  key={index}
                  source={file.image}
                  alternative={file.name}
                  fileInfo={file}
                ></DuplicateLoadImage>
              ))}
          </div>
        </div>
      )}
    </InputContainer>
  );
};

export default InputFile;
