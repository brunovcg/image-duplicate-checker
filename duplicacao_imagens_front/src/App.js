import Header from "./components/header";
import InputFile from "./components/inputFile";
import Duplicates from "./components/duplicateContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetDuplicates } from "./providers/getDuplicates";
import Instructions from "./components/instructions"


const App = () => {

  const { lineApproval } = useGetDuplicates();


  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <InputFile />
      {lineApproval.length>0 && <Duplicates />}
      {lineApproval.length===0 && <Instructions />}
      
    </div>
  );
};

export default App;
