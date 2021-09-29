import { HashProvider } from "./getHash";
import { SendToDBProvider } from "./sendToDB";

const providers = ({ children }) => {
  return (
    <HashProvider>
      <SendToDBProvider>{children}</SendToDBProvider>
    </HashProvider>
  );
};

export default providers;
