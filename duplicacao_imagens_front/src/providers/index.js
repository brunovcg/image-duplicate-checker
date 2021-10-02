import { HashProvider } from "./getHash";
import { SendToDBProvider } from "./sendToDB";
import { GetDuplicatesProvider } from "./getDuplicates";
import { AcceptDuplicateProvider } from "./acceptDuplicate";
import { RefuseDuplicateProvider } from "./refuseDuplicate";
import { LoadingProvider } from "./loading";
import { DuplicateLoadAcceptProvider } from "./dupllicateLoadAccept";
import { SendOneToDBProvider } from "./sendOneToDB";

const providers = ({ children }) => {
  return (
    <LoadingProvider>
      <GetDuplicatesProvider>
        <HashProvider>
          <SendToDBProvider>
            <SendOneToDBProvider>
              <DuplicateLoadAcceptProvider>
                <AcceptDuplicateProvider>
                  <RefuseDuplicateProvider>{children}</RefuseDuplicateProvider>
                </AcceptDuplicateProvider>
              </DuplicateLoadAcceptProvider>
            </SendOneToDBProvider>
          </SendToDBProvider>
        </HashProvider>
      </GetDuplicatesProvider>
    </LoadingProvider>
  );
};

export default providers;
