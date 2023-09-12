import { Center, Heading, VStack } from "@chakra-ui/react";
import TxQueryInput from "../../components/TxQueryInput/TxQueryInput";

function DashboardMain() {
  return (
    <Center w="full" h="full">
      <VStack spacing={10} w="50%">
        <Heading>Trace Any Transaction</Heading>
        <TxQueryInput />
      </VStack>
    </Center>
  );
}

export default DashboardMain;
