import { Tag, TagCloseButton, TagLabel, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TokenSelectionItemProps {
  isSelected?: boolean;
  onClick: () => void;
  symbol: string;
  image: string;
}

function TokenSelectionItem({
  isSelected = false,
  onClick,
  symbol,
  image,
}: TokenSelectionItemProps) {
  return (
    <Tag
      size="sm"
      borderRadius="full"
      px={2}
      py={1}
      cursor="pointer"
      variant={"unstyled"}
      borderColor={"gray.600"}
      borderStyle={"solid"}
      borderWidth={1}
      bgColor="transparent"
      display="flex"
      gap={2}
      _hover={{
        borderColor: "purple.500",
        borderWidth: "2",
        borderStyle: "solid",
      }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={symbol}
        width={20}
        height={20}
        style={{
          marginLeft: -1,
          marginRight: 2,
          aspectRatio: "1 / 1",
          borderRadius: "9999px",
        }}
      />
      <TagLabel>{symbol}</TagLabel>
      {isSelected && <TagCloseButton />}
    </Tag>
  );
}

export default TokenSelectionItem;
