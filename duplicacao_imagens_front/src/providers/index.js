import { HashProvider } from "./getHash";


const providers = ({ children }) => {
  return (


       <HashProvider>{children}</HashProvider>


  );
};

export default providers;
