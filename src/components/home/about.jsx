import { Box, Flex, Text } from "@chakra-ui/react";
import "@fontsource/lato";

export const HomeAbout = () => {
    return (
        <Flex justify={"center"}>
            <Box mt={225}>
                <Text fontSize={"6xl"} fontFamily={"Lato"} fontWeight={900}>
                    About AskMe.
                </Text>
            </Box>
        </Flex>
    );
};
