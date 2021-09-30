import { createContext, useContext} from "react";
import { api } from "../../services/api";
import {useGetDuplicates} from '../getDuplicates'
import { toast } from "react-toastify";


const AcceptDuplicateContext = createContext([]);


export const AcceptDuplicateProvider = ({ children }) => {

    const {getDuplicates} = useGetDuplicates()

    const acceptDuplicate = async (imageId) =>{

        api.post(`/approval/${imageId}`).then((_)=>{

        getDuplicates()
        toast.success("Arquivo aceito e salvo no banco de dados")

        })

        
    }


    return (
        <AcceptDuplicateContext.Provider value={{acceptDuplicate}}>
          {children}
        </AcceptDuplicateContext.Provider>
      );


}

export const useAcceptDuplicate = () => useContext(AcceptDuplicateContext);
