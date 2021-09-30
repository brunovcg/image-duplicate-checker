import { createContext, useContext} from "react";
import { api } from "../../services/api";
import {useGetDuplicates} from '../getDuplicates'
import { toast } from "react-toastify";


const RefuseDuplicateContext = createContext([]);


export const RefuseDuplicateProvider = ({ children }) => {

    const {getDuplicates} = useGetDuplicates()


    const refuseDuplicate =  (imageId) =>{


        api.delete(`/approval/${imageId}`).then((_) => {
        
        toast.error("Arquivo eliminado da análise")

        getDuplicates()
        }
        )

    }



    return (
        <RefuseDuplicateContext.Provider value={{refuseDuplicate}}>
          {children}
        </RefuseDuplicateContext.Provider>
      );

}

export const useRefuseDuplicate = () => useContext(RefuseDuplicateContext);
