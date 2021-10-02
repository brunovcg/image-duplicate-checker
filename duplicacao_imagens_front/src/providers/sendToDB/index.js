import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useHash } from "../getHash";
import { useGetDuplicates } from "../getDuplicates";
import { toast } from "react-toastify";
import { useLoading } from "../loading";

const SendToDBContext = createContext([]);

export const SendToDBProvider = ({ children }) => {
  const { getHash } = useHash();
  const { setModalIsOpen } = useLoading();

  const [uploaded, setUploaded] = useState([]);
  const [needApproval, setNeedApproval] = useState([]);
  const { getDuplicates } = useGetDuplicates();

  const [duplicateCheck, setDuplicateCheck] = useState([]);

  const fileToImage = (file) => {
    return { image: URL.createObjectURL(file), name: file.name, file: file };
  };

  const sendAll = async (files) => {


    const formData = new FormData();

    let fileIsSent = 0;

    let hashStock = {};

    for (let file = 0; file < files.length; file++) {
      let nameHashed = await getHash(files[file]);

      let hash = nameHashed.split(".")[1];

      if (!hashStock[hash]) {
        hashStock[hash] = [files[file]];
      } else {
        hashStock[hash] = [...hashStock[hash], files[file]];
      }
    }

    let hashKeys = Object.keys(hashStock);

    for (let index = 0; index < hashKeys.length; index++) {
      let nameHashed = `${hashStock[hashKeys[index]].filename}.${
        hashKeys[index]
      }`;

      if (hashStock[hashKeys[index]].length === 1) {
        formData.append(nameHashed, hashStock[hashKeys[index]]);

        fileIsSent += 1;
      } else {
        let fileIsDuplicate = 0;

        let arrayToSend = [];

        for (let item = 0; item < hashStock[hashKeys[index]].length; item++) {
          arrayToSend.push(fileToImage(hashStock[hashKeys][item]));

          fileIsDuplicate += 1;
        }

        if (fileIsDuplicate > 0) {
          toast.info(
            `${fileIsDuplicate} ${
              fileIsDuplicate === 1
                ? "arquivo duplicata carregado"
                : "arquivos duplicatas carregados"
            } `
          );
        }

        setDuplicateCheck([...duplicateCheck, ...arrayToSend]);
      }
    }

    setModalIsOpen(true);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    await api
      .post("", formData, config)
      .then((res) => {
        setUploaded(res.data["uploaded_to_db"]);
        setNeedApproval(res.data["need_approval"]);
      })
      .then(() => {
        getDuplicates();

        if (fileIsSent > 0) {
          toast.info(
            `${fileIsSent} ${
              fileIsSent === 1 ? "arquivo enviado" : "arquivos enviados"
            } `
          );
        }

        setModalIsOpen(false);
      });
  };

  return (
    <SendToDBContext.Provider
      value={{ sendAll, uploaded, needApproval, duplicateCheck,setDuplicateCheck }}
    >
      {children}
    </SendToDBContext.Provider>
  );
};

export const useSendToDB = () => useContext(SendToDBContext);
