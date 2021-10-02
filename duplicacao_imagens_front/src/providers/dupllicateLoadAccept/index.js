import { createContext, useContext } from "react";
import { useSendToDB } from "../sendToDB";
import { useSendOneToDB } from "../sendOneToDB";
import { toast } from "react-toastify";

const DuplicateLoadAcceptContext = createContext([]);

export const DuplicateLoadAcceptProvider = ({ children }) => {
  const { duplicateCheck, setDuplicateCheck } = useSendToDB();
  const { sendOne } = useSendOneToDB();

  const deleteFromArray = (file) => {
    let array = duplicateCheck;

    let arrayObj = [];

    array.map((item) => arrayObj.push({ name: item.name, image: item.image }));

    let newArray = [];

    for (let i = 0; i < arrayObj.length; i++) {
      if (arrayObj[i].name !== file.name) {
        newArray.push({ image: arrayObj[i].image, name: arrayObj[i].name });
      }
    }

    setDuplicateCheck(newArray);
  };

  const accept = (file) => {
    sendOne(file.file);

    toast.sucess("Arquivo enviado")

    deleteFromArray(file);
  };

  return (
    <DuplicateLoadAcceptContext.Provider value={{ accept, deleteFromArray }}>
      {children}
    </DuplicateLoadAcceptContext.Provider>
  );
};

export const useDuplicateLoad = () => useContext(DuplicateLoadAcceptContext);
