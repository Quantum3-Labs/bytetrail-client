import { Box, Container, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <VStack
      w="screen"
      h="100vh"
      spacing={0}
      bgImage={`url('/images/bg-image.svg')`}
      bgSize="cover"
      pb={12}
    >
      <Navbar />
      <Box
        flex="1"
        w={"95vw"}
        h="90vh"
        bgColor="blackAlpha.700"
        borderColor={"gray.600"}
        borderWidth="1px"
        borderRadius={12}
        p={6}
      >
        {children}
      </Box>
    </VStack>
  );
}

export default Layout;
