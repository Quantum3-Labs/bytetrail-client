import { ChangeEvent, createContext, useContext, useState } from "react";
import type {
  DashboardConsumerProps,
  DashboardContextValue,
  DashboardProviderProps,
} from "./DashboardContext.types";
import { useQuery } from "@tanstack/react-query";
import { getTrackTx } from "../../api";
import { isValidEthereumTxHash } from "../../dashboard.helpers";

const DashboardContext = createContext<DashboardContextValue | undefined>(
  undefined
);

const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [txHashInput, setTxHashInput] = useState<string>("");
  const [txHashInputError, setTxHashInputError] = useState<string | null>(null);
  const [selectedTokens, setSelectedTokens] = useState<Set<string>>(new Set());
  const [depth, setDepth] = useState<number>(1);
  const [width, setWidth] = useState<number>(3592000);
  const [isBackwards, setIsBackwards] = useState<boolean>(true);

  const handleSearchTransaction = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isValidEthereumTxHash(newValue))
      setTxHashInputError("Invalid address");
    else setTxHashInputError(null);
    setTxHashInput(newValue);
  };

  // will deselect if token is found in selection
  const handleSelectToken = (newToken: string) => {
    // a bit long because we want to deep copy
    const tempSelectedTokens = new Set<string>(
      JSON.parse(JSON.stringify(Array.from(selectedTokens)))
    );

    if (tempSelectedTokens.has(newToken)) {
      tempSelectedTokens.delete(newToken);
    } else {
      tempSelectedTokens.add(newToken);
    }

    setSelectedTokens(tempSelectedTokens);
  };

  const handleSetWidth = (e: ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(e.target.value) * 86400);
  };

  const txHashData = useQuery({
    queryKey: [
      "txHashData",
      { txHashInput, selectedTokens, depth, width, isBackwards },
    ],
    queryFn: async () => {
      if (isInitial) setIsInitial(false);

      return getTrackTx({
        txHash: txHashInput,
        tokens: Array.from(selectedTokens),
        chain: 1, // currently hardcoded to ETH
        isBackwards,
        depth,
        width, // Sample timestamp (Unix timestamp in seconds)
      });
    },
    enabled: !Boolean(txHashInputError) && Boolean(txHashInput.length > 0),
    refetchOnWindowFocus: false,
  });

  return (
    <DashboardContext.Provider
      value={{
        txHashData,
        txHashInput,
        txHashInputError,
        selectedTokens,
        handleSearchTransaction,
        handleSelectToken,
        depth,
        width,
        handleSetWidth,
        isBackwards,
        setIsBackwards,
        setDepth,
        isInitial,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const DashboardConsumer = ({ children }: DashboardConsumerProps) => (
  <DashboardContext.Consumer>{children}</DashboardContext.Consumer>
);

const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error(
      `"useDashboardContext" must be used with "DashboardProvider"`
    );

  return context;
};

export { DashboardProvider, useDashboardContext, DashboardConsumer };
