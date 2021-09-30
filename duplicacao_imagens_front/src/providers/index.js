import { HashProvider } from "./getHash";
import { SendToDBProvider } from "./sendToDB";
import { GetDuplicatesProvider } from "./getDuplicates";

const providers = ({ children }) => {
  return (
    <HashProvider>
      <SendToDBProvider>
        <GetDuplicatesProvider>{children}</GetDuplicatesProvider>
      </SendToDBProvider>
    </HashProvider>
  );
};

export default providers;
