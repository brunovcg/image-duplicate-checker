import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api.js";

const GetDuplicatesContext = createContext([]);

export const GetDuplicatesProvider = ({ children }) => {
  const [lineApproval, setLineApproval] = useState([]);

  const getDuplicates = async () => {
    api.get("/approval").then((res) => {
      setLineApproval(res.data);
    });
  };

  useEffect(() => {
    getDuplicates();
  }, []);

  return (
    <GetDuplicatesContext.Provider
      value={{ getDuplicates, lineApproval, setLineApproval }}
    >
      {children}
    </GetDuplicatesContext.Provider>
  );
};

export const useGetDuplicates = () => useContext(GetDuplicatesContext);
