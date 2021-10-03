import Header from "./components/header";
import InputFile from "./components/inputFile";
import Duplicates from "./components/duplicateContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetDuplicates } from "./providers/getDuplicates";
import { useSendToDB } from "./providers/sendToDB";
import Instructions from "./components/instructions";
import { useState } from "react";

const App = () => {
  const { lineApproval } = useGetDuplicates();
  const [instructions, setInstructions] = useState(false);
  const { duplicateCheck } = useSendToDB();

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header inst={instructions} />
      <InputFile setInst={setInstructions} />
      {lineApproval.length > 0 && <Duplicates />}
      {duplicateCheck.length === 0 &&
        !instructions &&
        lineApproval.length === 0 && <Instructions />}
    </div>
  );
};

export default App;
