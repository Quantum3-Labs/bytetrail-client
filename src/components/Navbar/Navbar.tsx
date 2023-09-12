import { Box, Flex, Image } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex as="nav" p={6} w="full">
      <Image src="/images/bytetrail-logo.svg" alt="ByteTrail Logo" />
    </Flex>
  );
}

export default Navbar;
