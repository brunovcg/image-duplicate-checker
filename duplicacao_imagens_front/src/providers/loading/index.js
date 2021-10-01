import { createContext, useContext, useState } from "react";

const LoadingContext = createContext([]);

export const LoadingProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <LoadingContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </LoadingContext.Provider>
  );
};
export const useLoading = () => useContext(LoadingContext);
