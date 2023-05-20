import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
