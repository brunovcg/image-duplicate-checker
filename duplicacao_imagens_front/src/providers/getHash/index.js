import { createContext, useContext} from "react";
import { api } from "../../services/api";

const HashContext = createContext([]);

export const HashProvider = ({ children }) => {

    // const [hash,setHash]= useState("")


    const getHash = ()=>{

        let imageHash = ""

        const FormData = require('form-data');
        // const fs = require('fs');

        // const formData = new FormData();
        // formData.append('image', new Blob([file]));
  




        // console.log(`.......${files}`)


        // const config = {
        //     headers: { 'Content-Type': 'multipart/form-data'
        // }
        // }
        

        api.get(`/info`).then((res)=>{
        console.log(`AQUI >>>>> ${res.data}`)}
        )


        // await api.post(`/generate-hash-mock`, formData, config).then((res)=>{
        //     imageHash = res.data.image_hash

        //     // console.log(res.data.image_hash)

        // })

        return imageHash

    }



    return(
        <HashContext.Provider value={{getHash}}>

            {children}


        </HashContext.Provider>
    )


}

export const useHash = () => useContext(HashContext);