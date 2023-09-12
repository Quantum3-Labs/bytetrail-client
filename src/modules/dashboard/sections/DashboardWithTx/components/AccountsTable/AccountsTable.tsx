import { ETHERSCAN_URL } from "@/constants/links";
import { GetTrackTxResponse } from "@/modules/dashboard/api";
import { useDashboardContext } from "@/modules/dashboard/context/DashboardContext";
import { shortenAddress } from "@/utils/formatter";
import { ArrowBackIcon, ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons";
import {
  VStack,
  TableContainer,
  Table,
  Tbody,
  Td,
  Tr,
  HStack,
  IconButton,
  Text,
  Avatar,
  Box,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";

import useAccountsTableController from "./AccountsTable.controller";

const AccountsTableItem = (item: GetTrackTxResponse["foundAccounts"][0]) => (
  <Tr>
    <Td alignSelf={"flex-end"}>
      <HStack gap={3}>
        <Avatar size="xs" name={item.account} />
        <Text fontSize={"sm"}>{shortenAddress(item.account)}</Text>
      </HStack>
    </Td>
    <Td alignSelf={"flex-end"}>
      <HStack gap={3}>
        <Avatar
          as={"a"}
          href={item.exchange.exchangeLink}
          target="_blank"
          size="xs"
          name={item.exchange.exchangeName}
        />
        <Text fontSize={"sm"}>
          {shortenAddress(item.exchange.exchangeWallet)}
        </Text>
      </HStack>
    </Td>
    <Td>
      <Center
        p={1}
        borderRadius="full"
        borderColor="gray.400"
        borderWidth={"1px"}
        borderStyle={"solid"}
        fontSize={"xs"}
      >
        {item?.interactions} interactions
      </Center>
    </Td>
    <Td isNumeric>
      <Link href={`${ETHERSCAN_URL}/address/${item?.account}`} target="_blank">
        <LinkIcon color="gray.600" _hover={{ color: "white" }} />
      </Link>
    </Td>
  </Tr>
);
function AccountsTable() {
  const {
    goToNextPage,
    goToPrevPage,
    isNextPageDisabled,
    isPrevPageDisabled,
    displayData,
  } = useAccountsTableController();

  return (
    <VStack>
      <TableContainer w="full" flex="1" h="full">
        {/* Transactions table */}
        <Table variant="simple" size={"md"}>
          <Tbody>
            {displayData.map((account, index) => (
              <AccountsTableItem {...account} key={index} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack w="full" justifyContent="flex-end">
        <HStack gap={4}>
          <IconButton
            icon={<ArrowBackIcon fontSize="xl" />}
            aria-label={"Table back button"}
            onClick={goToPrevPage}
            isDisabled={isPrevPageDisabled}
            borderRadius="full"
            borderColor="gray.400"
            borderWidth={"1px"}
            borderStyle={"solid"}
            variant="ghost"
          />
          <IconButton
            icon={<ArrowForwardIcon fontSize="xl" />}
            aria-label={"Table forward"}
            onClick={goToNextPage}
            isDisabled={isNextPageDisabled}
            borderRadius="full"
            borderColor="gray.400"
            borderWidth={"1px"}
            borderStyle={"solid"}
            variant="ghost"
          />
        </HStack>
      </HStack>
    </VStack>
  );
}

export default AccountsTable;
