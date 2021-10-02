import { createContext, useContext } from "react";
import { api } from "../../services/api";

const HashContext = createContext([]);

export const HashProvider = ({ children }) => {
  const getHash = async (file) => {

 
    let nameHash = "";

    const formData = new FormData();

    formData.append(file.name, file);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    await api.post(`/generate-hash-mock`, formData, config).then((res) => {
      nameHash = file.name.split(".")[0] + "." + res.data["image_hash"];
    });

    return nameHash;
  };

  return (
    <HashContext.Provider value={{ getHash }}>{children}</HashContext.Provider>
  );
};

export const useHash = () => useContext(HashContext);
