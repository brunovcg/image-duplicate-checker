import { createContext, useContext} from "react";
import { api } from "../../services/api";

const HashContext = createContext([]);

export const HashProvider = ({ children }) => {


    const getHash = (files)=>{

        let imageHash = ""

        const formData = new FormData();
        

        console.log(files[0].name.split('.')[0])


        for (let i = 0; i < files.length;i++ ){
        
            formData.append(files[i].name, files[i]);
        }

        const config = {
            headers: { 'content-type': 'multipart/form-data'
        }
        }

        // api.get('/info').then((res)=>{
        //     console.log(res.data["msg"])
        // })

        //     api.post('/info/1').then((res)=>{
        //     console.log(res.data["msg"])
        // })
        

        api.post(`/generate-hash-mock`, formData, config).then((res)=>{
            imageHash = res.data['image_hash']

            console.log(`>>>>>${res.data.image_hash}`)

        })

        return imageHash

    }



    return(
        <HashContext.Provider value={{getHash}}>

            {children}


        </HashContext.Provider>
    )


}

export const useHash = () => useContext(HashContext);