import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  VStack,
  HStack,
  Button,
  Divider,
  SliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  FormLabel,
  Text,
  InputRightAddon,
  useDisclosure,
  IconButton,
  Box,
} from "@chakra-ui/react";
import React, { memo, useState } from "react";
import useTxQueryInputController from "./TxQueryInput.controllers";
import TokenSelectionItem from "./components/TokenSelectionItem/TokenSelectionItem";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "@/utils/localStorage";

interface TxQueryInputProps {
  isComplete?: boolean;
}

function TxQueryInput({ isComplete = false }: TxQueryInputProps) {
  const {
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
  } = useTxQueryInputController();

  // const [isAdvancedSearch, setIsAdvancedSearch] = useState<boolean>(false);

  const optionsDisclosure = useDisclosure();
  const tokenDropdownDisclosure = useDisclosure();

  return (
    <>
      {isComplete ? (
        <>
          <Box h="11rem" w="full">
            <VStack
              align="left"
              bgColor="gray.900"
              border={"1px solid"}
              borderColor="gray.600"
              borderRadius={12}
              px={4}
              py={3}
              spacing={3}
            >
              <HStack justifyContent={"space-between"}>
                <InputGroup
                  size="lg"
                  variant={"unstyled"}
                  display="flex"
                  alignItems={"center"}
                  gap={4}
                >
                  <SearchIcon color="gray.600" h="full" fontSize="lg" />
                  <Input
                    value={txHashInput}
                    onChange={handleSearchTransaction}
                    placeholder="Query for any transaction hash"
                  />
                </InputGroup>
                <Button
                  variant="outline"
                  bgColor="gray.900"
                  border={"1px solid"}
                  borderColor="gray.600"
                  borderRadius={12}
                  onClick={optionsDisclosure.onToggle}
                >
                  Adv
                </Button>
              </HStack>

              {optionsDisclosure.isOpen && (
                <>
                  <Divider />
                  <HStack
                    justifyContent={"space-between"}
                    h="5.5rem"
                    gap={8}
                    mt={1}
                  >
                    {/* Token search */}
                    <FormControl h="full" flex={3}>
                      <FormLabel>Token</FormLabel>
                      <VStack
                        bgColor="gray.900"
                        border={"1px solid"}
                        borderColor="gray.600"
                        borderRadius={12}
                        w="full"
                        px={4}
                        py={3}
                      >
                        <HStack justifyContent={"space-between"} w="full">
                          {/* Input bar */}
                          <InputGroup
                            size="sm"
                            variant={"unstyled"}
                            display="flex"
                            alignItems={"center"}
                            gap={4}
                          >
                            <Input
                              value={coinSearchQuery}
                              onChange={handleCoinSearch}
                              placeholder="Search token to query"
                            />
                          </InputGroup>

                          {/* Selected tokens */}
                          <HStack flex={2}>
                            {coins.map((coin) => {
                              if (!selectedTokens.has(coin.symbol)) return null;
                              return (
                                <TokenSelectionItem
                                  key={coin.symbol}
                                  onClick={() => handleSelectToken(coin.symbol)}
                                  isSelected
                                  {...coin}
                                />
                              );
                            })}
                          </HStack>

                          {/* dropdown toggler */}
                          <IconButton
                            variant="ghost"
                            size="xs"
                            icon={
                              tokenDropdownDisclosure.isOpen ? (
                                <ChevronUpIcon fontSize="2xl" />
                              ) : (
                                <ChevronDownIcon fontSize="2xl" />
                              )
                            }
                            aria-label={"Open token selection dropdown"}
                            onClick={tokenDropdownDisclosure.onToggle}
                          />
                        </HStack>
                        {tokenDropdownDisclosure.isOpen && (
                          <>
                            <Divider />
                            <HStack
                              flex={2}
                              justifyContent={"flex-start"}
                              w="full"
                            >
                              {coins.map((coin) => {
                                if (selectedTokens.has(coin.symbol))
                                  return null;
                                return (
                                  <TokenSelectionItem
                                    key={coin.symbol}
                                    onClick={() =>
                                      handleSelectToken(coin.symbol)
                                    }
                                    {...coin}
                                  />
                                );
                              })}
                            </HStack>
                          </>
                        )}
                      </VStack>
                    </FormControl>

                    {/* Depth Slider */}
                    <FormControl h="full" flex={1}>
                      <HStack
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <FormLabel>Depth</FormLabel>
                        <Text color="gray.300" fontSize="xs" mb={2}>
                          {depth} Layers
                        </Text>
                      </HStack>

                      <Slider
                        aria-label="slider-ex-1"
                        min={1}
                        max={5}
                        onChange={(val) => setDepth(val)}
                        value={depth}
                      >
                        <SliderTrack>
                          <SliderFilledTrack bgColor="purple.500" />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider>
                    </FormControl>

                    {/* Width */}
                    <FormControl h="full" flex={1}>
                      <FormLabel>Width</FormLabel>
                      <InputGroup
                        size="sm"
                        variant={"outline"}
                        border={"1px solid"}
                        borderColor="gray.600"
                        borderRadius={12}
                      >
                        <Input
                          border="none"
                          placeholder="1"
                          type="number"
                          value={width / 86400}
                          onChange={handleSetWidth}
                          _focus={{
                            borderColor: "purple.400",
                          }}
                        />
                        <InputRightAddon
                          bgColor="gray.900"
                          borderLeft={"1px solid"}
                          borderLeftColor={"gray.600"}
                          borderRightRadius={12}
                        >
                          Days
                        </InputRightAddon>
                      </InputGroup>
                    </FormControl>
                  </HStack>
                </>
              )}
            </VStack>
          </Box>
        </>
      ) : (
        <FormControl isInvalid={!!txHashInputError}>
          <InputGroup
            bgColor="gray.900"
            border={"1px solid"}
            borderColor="gray.600"
            borderRadius={12}
            size="lg"
            variant={"filled"}
          >
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.600" />
            </InputLeftElement>
            <Input
              value={txHashInput}
              onChange={handleSearchTransaction}
              placeholder="Query for any transaction hash"
            />
          </InputGroup>
          <FormErrorMessage>{txHashInputError}</FormErrorMessage>
        </FormControl>
      )}
    </>
  );
}

export default memo(TxQueryInput);
