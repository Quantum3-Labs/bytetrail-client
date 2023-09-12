import { useDashboardContext } from "@/modules/dashboard/context/DashboardContext";
import { useState } from "react";
import { PAGE_LIMIT } from "./AccountsTable.constants";

export default function useAccountsTableController() {
  const { txHashData } = useDashboardContext();

  const [page, setPage] = useState<number>(0);

  const isNextPageDisabled =
    page >= (txHashData.data?.foundAccounts ?? []).length / PAGE_LIMIT - 1;
  const isPrevPageDisabled = page <= 0;

  const goToNextPage = () => {
    if (!isNextPageDisabled) setPage(page + 1);
  };

  const goToPrevPage = () => {
    if (!isPrevPageDisabled) setPage(page - 1);
  };

  const displayData = (txHashData.data?.foundAccounts ?? []).slice(
    page * PAGE_LIMIT,
    page * PAGE_LIMIT + PAGE_LIMIT
  );

  const walletCount = (txHashData.data?.foundAccounts ?? []).length;

  return {
    page,
    goToNextPage,
    goToPrevPage,
    isNextPageDisabled,
    isPrevPageDisabled,
    displayData,
    walletCount,
  };
}
