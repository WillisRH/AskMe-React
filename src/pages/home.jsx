import { Box, Flex, Text } from "@chakra-ui/react";
import { HomeWelcome } from "../components/home/welcoming";

export const HomePage = () => {
    return (
        <>
            <section id="home">
                <Box w={"full"} h={"5xl"} bgColor={"gray.900"}>
                    <HomeWelcome />
                </Box>
            </section>
            <section id="about">
                <Box w={"full"} h={"4xl"} bgColor={"gray.900"}>
                    <Text fontSize={"xl"}>About</Text>
                </Box>
            </section>
        </>
    );
};
