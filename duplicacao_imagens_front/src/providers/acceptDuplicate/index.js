import { createContext, useContext} from "react";
import { api } from "../../services/api";
import {useGetDuplicates} from '../getDuplicates'


const AcceptDuplicateContext = createContext([]);


export const AcceptDuplicateProvider = ({ children }) => {

    const {getDuplicates} = useGetDuplicates()

    const acceptDuplicate = async (imageId) =>{

        api.post(`/approval/${imageId}`)

        getDuplicates()
    }


    return (
        <AcceptDuplicateContext.Provider value={{acceptDuplicate}}>
          {children}
        </AcceptDuplicateContext.Provider>
      );


}

export const useAcceptDuplicate = () => useContext(AcceptDuplicateContext);
