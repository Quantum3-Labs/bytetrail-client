import {
  VStack,
  HStack,
  Box,
  Radio,
  RadioGroup,
  Stack,
  Button,
  LightMode,
  Center,
  Text,
  Divider,
  CircularProgress,
  CircularProgressLabel,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabIndicator,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Link,
} from "@chakra-ui/react";
import { useDashboardContext } from "../../context/DashboardContext";
import TxQueryInput from "../../components/TxQueryInput";
import { shortenAddress } from "@/utils/formatter";
import { InfoOutlineIcon, LinkIcon } from "@chakra-ui/icons";
import { GetTrackTxResponse } from "../../api";
import { ETHERSCAN_URL } from "@/constants/links";
import AccountsTable from "./components/AccountsTable";
import DashboardWithTxLoading from "./components/DashboardWithTxLoading";

function DashboardWithTx() {
  const { txHashData, txHashInput, isBackwards, setIsBackwards } =
    useDashboardContext();

  return (
    <>
      <VStack w="full" spacing={"36px"}>
        {/* Input Panel */}
        <HStack
          w="full"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <HStack w="70%" h="fit-content" gap={10} alignItems={"flex-start"}>
            <TxQueryInput isComplete />
            <Center h="3rem">
              <LightMode>
                <RadioGroup
                  onChange={(val) => setIsBackwards(val === "true")}
                  value={isBackwards.toString()}
                  colorScheme="purple"
                >
                  <Stack direction="row" spacing={4}>
                    <Radio value="false">Forward</Radio>
                    <Radio value="true">Backward</Radio>
                  </Stack>
                </RadioGroup>
              </LightMode>
            </Center>
          </HStack>
          <LightMode>
            <Button colorScheme="purple">Share</Button>
          </LightMode>
        </HStack>

        {txHashData.isFetching || txHashData.isLoading ? (
          <DashboardWithTxLoading />
        ) : (
          <>
            {/* Tx Info */}
            <HStack w="full" gap={"3rem"}>
              <VStack align="left">
                <Text fontSize="sm" color="gray.600">
                  Transaction Hash
                </Text>
                <Text fontSize="2xl">{txHashInput}</Text>
              </VStack>
              <VStack align="left">
                <Text fontSize="sm" color="gray.600">
                  More Info
                </Text>
                <HStack w="full" gap={4}>
                  <VStack align="left">
                    <Text fontSize="xs" color="white">
                      From
                    </Text>
                    <Text fontSize="sm">
                      {shortenAddress(
                        txHashData.data?.from.toString() as string
                      )}
                    </Text>
                  </VStack>
                  <VStack align="left">
                    <Text fontSize="xs" color="white">
                      To
                    </Text>
                    <Text fontSize="sm">
                      {shortenAddress(txHashData.data?.to.toString() as string)}
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </HStack>

            <HStack
              height={"27rem"}
              bgColor="gray.900"
              border={"1px solid"}
              borderColor="gray.600"
              borderRadius={12}
              w="full"
              p={6}
              alignItems={"flex-start"}
              gap={8}
            >
              {/* KYC Score */}
              <VStack h="full">
                <Text
                  fontSize="lg"
                  textAlign={"left"}
                  w="full"
                  fontWeight="semibold"
                >
                  KYC Score
                </Text>
                <HStack h="full">
                  <CircularProgress
                    value={txHashData.data?.score}
                    color="green.400"
                    thickness={"4px"}
                    size="160px"
                    trackColor="red.500"
                    capIsRound
                  >
                    <CircularProgressLabel
                      color={
                        txHashData.data?.score ?? 0 >= 50
                          ? "green.400"
                          : "red.500"
                      }
                    >{`${txHashData.data?.score.toFixed(
                      0
                    )}%`}</CircularProgressLabel>
                  </CircularProgress>
                  <Text
                    color="gray.400"
                    maxWidth="256px"
                    fontSize={"xs"}
                    fontStyle={"italic"}
                  >
                    KYC score is generated based on an algorithm which basically
                    needs a more polished explanation because I haven’t think of
                    one yet.
                  </Text>
                </HStack>
              </VStack>

              <Divider orientation="vertical" />

              {/* Endpoints */}
              <VStack h="full" w="full">
                <HStack w="full" justifyContent={"space-between"}>
                  <Text
                    fontSize="lg"
                    textAlign={"left"}
                    w="full"
                    fontWeight="semibold"
                  >
                    End-points
                  </Text>

                  {/* TODO: add list/traits switch here */}
                </HStack>

                <Tabs variant={"unstyled"} w="full">
                  <HStack width="full" justifyContent={"space-between"}>
                    <TabList display={"flex"} gap={10}>
                      <Tab
                        px="0"
                        color="gray.600"
                        _selected={{ color: "purple.500", fontWeight: "bold" }}
                      >
                        KYC-linked
                      </Tab>
                      <Tab
                        px="0"
                        _selected={{ color: "purple.500", fontWeight: "bold" }}
                        color="gray.600"
                      >
                        Suspicious
                      </Tab>
                    </TabList>
                    <Text color="gray.600">
                      {txHashData.data?.foundAccounts.length} wallets
                    </Text>
                  </HStack>

                  <TabPanels>
                    <TabPanel>
                      <AccountsTable />
                    </TabPanel>
                    <TabPanel>
                      {/* empty state, might want to isolate this */}
                      <Center w="full" h="200px">
                        <VStack color="gray.400">
                          <InfoOutlineIcon fontSize="4xl" />
                          <Text>No suspicious transaction detected</Text>
                        </VStack>
                      </Center>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </VStack>
            </HStack>
          </>
        )}
      </VStack>
    </>
  );
}

export default DashboardWithTx;
