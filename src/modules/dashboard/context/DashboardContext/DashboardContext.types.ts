import { UseQueryResult } from "@tanstack/react-query";
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import { GetTrackTxResponse } from "../../api";

export interface DashboardContextValue {
  txHashData: UseQueryResult<GetTrackTxResponse, unknown>;
  txHashInput: string;
  txHashInputError: string | null;
  selectedTokens: Set<string>;
  handleSearchTransaction: ChangeEventHandler;
  handleSelectToken: (newToken: string) => void;
  depth: number;
  width: number;
  handleSetWidth: ChangeEventHandler;
  isBackwards: boolean;
  setIsBackwards: Dispatch<SetStateAction<boolean>>;
  setDepth: Dispatch<SetStateAction<number>>;
  isInitial: boolean;
}

export interface DashboardProviderProps {
  children: ReactNode;
}

export interface DashboardConsumerProps {
  children: (value: DashboardContextValue | undefined) => JSX.Element;
}
