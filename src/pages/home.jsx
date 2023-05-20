import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { HomeWelcome } from "../components/home/welcoming";
import { HomeAbout } from "../components/home/about";

export const HomePage = () => {
    const bgColor = useColorModeValue("gray.200", "gray.800");

    return (
        <>
            <section id="home">
                <Box w={"full"} h={"5xl"}>
                    <HomeWelcome />
                </Box>
            </section>
            <section id="about">
                <Box w={"full"} h={"4xl"} bgColor={bgColor}>
                    <HomeAbout />
                </Box>
            </section>
        </>
    );
};
