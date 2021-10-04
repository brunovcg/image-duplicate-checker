import { createContext, useContext } from "react";
import { useSendToDB } from "../sendToDB";
import { useSendOneToDB } from "../sendOneToDB";
import { toast } from "react-toastify";

const DuplicateLoadAcceptContext = createContext([]);

export const DuplicateLoadAcceptProvider = ({ children }) => {
  const { duplicateCheck, setDuplicateCheck } = useSendToDB();
  const { sendOne } = useSendOneToDB();

  const deleteFromArray = (file, update = false) => {
    let array = duplicateCheck;

    let arrayObj = [];

    array.map((item) =>
      arrayObj.push({ name: item.name, image: item.image, file: file.file })
    );

    let newArray = [];

    for (let i = 0; i < arrayObj.length; i++) {
      if (arrayObj[i].name !== file.name) {
        newArray.push({
          image: arrayObj[i].image,
          name: arrayObj[i].name,
          file: arrayObj[i].file,
        });
      }
    }

    setDuplicateCheck(newArray);

    if (!update) {
      toast.error("Arquivo descartado");
    }
  };

  const accept = (file) => {
    sendOne(file);

    toast.success("Arquivo enviado");

    deleteFromArray(file, true);
  };

  return (
    <DuplicateLoadAcceptContext.Provider value={{ accept, deleteFromArray }}>
      {children}
    </DuplicateLoadAcceptContext.Provider>
  );
};

export const useDuplicateLoad = () => useContext(DuplicateLoadAcceptContext);
