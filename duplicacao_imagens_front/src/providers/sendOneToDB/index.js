import { createContext, useContext } from "react";
import { api } from "../../services/api";
import { useGetDuplicates } from "../getDuplicates";
import { useHash } from "../getHash";

const SendOneToDBContext = createContext([]);

export const SendOneToDBProvider = ({ children }) => {
  const { getDuplicates } = useGetDuplicates();
  const { getHash } = useHash();

  const sendOne = async (file) => {
    const formData = new FormData();

    let nameHashed = await getHash(file.file);

    formData.append(nameHashed, file.file);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    console.log(formData);

    await api
      .post("", formData, config)

      .then((res) => {
        getDuplicates();
      });
  };

  return (
    <SendOneToDBContext.Provider value={{ sendOne }}>
      {children}
    </SendOneToDBContext.Provider>
  );
};

export const useSendOneToDB = () => useContext(SendOneToDBContext);
