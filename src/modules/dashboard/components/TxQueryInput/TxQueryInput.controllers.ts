import { ChangeEvent, useState } from "react";
import { useDashboardContext } from "../../context/DashboardContext";
import { coins as coinList } from "./TxQueryInput.constants";

export default function useTxQueryInputController() {
  const {
    txHashInput,
    txHashInputError,
    handleSearchTransaction,
    selectedTokens,
    handleSelectToken,
    depth,
    width,
    handleSetWidth,
    setDepth,
  } = useDashboardContext();

  const [coinSearchQuery, setCoinSearchQuery] = useState("");

  const coins = (() => {
    const filteredList = coinList.filter((coin) =>
      coin.symbol.includes(coinSearchQuery.toUpperCase())
    );
    return filteredList;
  })();

  const handleCoinSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setCoinSearchQuery(e.target.value.toUpperCase());

  return {
    txHashInput,
    txHashInputError,
    handleSearchTransaction,
    selectedTokens,
    handleSelectToken,
    coins,
    coinSearchQuery,
    handleCoinSearch,
    depth,
    width,
    handleSetWidth,
    setDepth,
  };
}
