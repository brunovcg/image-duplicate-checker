import { HashProvider } from "./getHash";
import { SendToDBProvider } from "./sendToDB";
import { GetDuplicatesProvider } from "./getDuplicates";
import { AcceptDuplicateProvider } from "./acceptDuplicate";
import { RefuseDuplicateProvider } from "./refuseDuplicate";
import { LoadingProvider } from "./loading";

const providers = ({ children }) => {
  return (
    <LoadingProvider>
      <GetDuplicatesProvider>
        <HashProvider>
          <SendToDBProvider>
            <AcceptDuplicateProvider>
              <RefuseDuplicateProvider>{children}</RefuseDuplicateProvider>
            </AcceptDuplicateProvider>
          </SendToDBProvider>
        </HashProvider>
      </GetDuplicatesProvider>
    </LoadingProvider>
  );
};

export default providers;
