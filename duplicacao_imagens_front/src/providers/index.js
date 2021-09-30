import { HashProvider } from "./getHash";
import { SendToDBProvider } from "./sendToDB";
import { GetDuplicatesProvider } from "./getDuplicates";
import { AcceptDuplicateProvider } from "./acceptDuplicate";
import { RefuseDuplicateProvider } from "./refuseDuplicate";

const providers = ({ children }) => {
  return (
    <GetDuplicatesProvider>
      <HashProvider>
        <SendToDBProvider>
          <AcceptDuplicateProvider>
            <RefuseDuplicateProvider>{children}</RefuseDuplicateProvider>
          </AcceptDuplicateProvider>
        </SendToDBProvider>
      </HashProvider>
    </GetDuplicatesProvider>
  );
};

export default providers;
