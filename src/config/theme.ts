import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const colors = {
  transparent: "transparent",
  purple: {
    50: "#F5F3FC",
    100: "#EAE7F9",
    200: "#D2CAF2",
    300: "#BDB1EC",
    400: "#A595E4",
    500: "#8F7BDE",
    600: "#5F43D0",
    700: "#432AA7",
    800: "#2C1C6E",
    900: "#170E39",
  },
  yellow: {
    50: "#FCFAF3",
    100: "#F8F4E3",
    200: "#F1EACB",
    300: "#EADFAE",
    400: "#E2D392",
    500: "#DBC877",
    600: "#CDB342",
    700: "#A18C2B",
    800: "#6D5E1D",
    900: "#342D0E",
  },
  blue: {
    50: "#F2F4FD",
    100: "#E4E8FB",
    200: "#C5CEF6",
    300: "#ABB7F2",
    400: "#90A0EE",
    500: "#7387EA",
    600: "#3754E1",
    700: "#1B35B6",
    800: "#122378",
    900: "#09123E",
  },
  green: {
    50: "#F1F9F5",
    100: "#E2F3EC",
    200: "#C9E9DB",
    300: "#ACDDC8",
    400: "#8FD1B4",
    500: "#75C6A3",
    600: "#49B184",
    700: "#378664",
    800: "#255A43",
    900: "#122B20",
  },
  neutral: {
    50: "#FFFFFF",
    100: "#1A1E23",
    200: "#21262C",
    300: "#293037",
    400: "#39424C",
    500: "#4E5A6E",
    600: "#718096",
    700: "#A0AEC0",
    800: "#FFFFFF",
    900: "#FFFFFF",
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

const components = {
  Input: {
    defaultProps: {
      focusBorderColor: "purple.500",
    },
  },
  InputGroup: {
    defaultProps: {
      focusBorderColor: "purple.500",
    },
  },
};

const shadows = {
  outline: "0 0 0 3px var(--chakra-colors-purple-500)",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, components, fonts, config, shadows });

export default theme;
