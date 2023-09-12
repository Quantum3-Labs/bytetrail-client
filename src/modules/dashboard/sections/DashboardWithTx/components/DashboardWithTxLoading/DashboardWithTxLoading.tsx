import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Skeleton,
  SkeletonText,
  VStack,
  HStack,
  Text,
  Center,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SkeletonCircle,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import AccountsTable from "../AccountsTable";

function DashboardWithTxLoading() {
  return (
    <>
      <HStack gap={"3rem"} w="full">
        <VStack align="left" w="full">
          <SkeletonText fontSize="sm" w="50%" noOfLines={1} />
          <Skeleton height="28px" w="100%" />
        </VStack>
        <VStack align="left" w="full">
          <SkeletonText fontSize="sm" w="50%" noOfLines={1} />
          <Skeleton height="28px" w="100%" />
        </VStack>
      </HStack>

      <Skeleton height={"27rem"} w="full" borderRadius={12}></Skeleton>
    </>
  );
}

export default DashboardWithTxLoading;
