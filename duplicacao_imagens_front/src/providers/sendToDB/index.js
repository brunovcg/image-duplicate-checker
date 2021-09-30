import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { useHash } from "../getHash";

const SendToDBContext = createContext([]);

export const SendToDBProvider = ({ children }) => {
  const { getHash } = useHash();

  const [uploaded, setUploaded] = useState([]);
  const [needApproval, setNeedApproval] = useState([]);

  const sendAll = async (files) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let nameHashed = await getHash(files[i]);

      formData.append(nameHashed, files[i]);
    }

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    await api.post("", formData, config).then((res) => {
      setUploaded(res.data["uploaded_to_db"]);
      setNeedApproval(res.data["need_approval"]);
    });
  };

  return (
    <SendToDBContext.Provider value={{ sendAll, uploaded, needApproval }}>
      {children}
    </SendToDBContext.Provider>
  );
};

export const useSendToDB = () => useContext(SendToDBContext);
