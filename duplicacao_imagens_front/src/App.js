import Header from "./components/header";
import InputFile from "./components/inputFile"
import Duplicates from './components/duplicateContainer'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <InputFile/>
      <Duplicates/>
    </div>
  );
};

export default App;
