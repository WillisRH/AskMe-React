import { Box, Flex, Text } from "@chakra-ui/react";
import { HomeWelcome } from "../components/home/welcoming";

export const HomePage = () => {
    return (
        <>
            <section id="home">
                <Box w={"full"} h={"5xl"} bgColor={"blackAlpha.500"}>
                    <HomeWelcome />
                </Box>
            </section>
            <section id="about">
                <Box w={"full"} h={"4xl"} bgColor={"blackAlpha.500"}>
                    <Text fontSize={"xl"}>About</Text>
                </Box>
            </section>
        </>
    );
};
