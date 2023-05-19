import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import "@fontsource/lato";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavMenuItem } from "./navbarButton";
import { BiCard, BiHome, BiUser } from "react-icons/bi";

export const Navbar = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [isOpen, onToggle] = useState(false);
    const path = window.location.pathname;

    const toggleMenu = () => {
        onToggle(!isOpen);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Flex
            top={0}
            zIndex={9999}
            pos={"fixed"}
            w={"100vw"}
            h={"110px"}
            transition={"all 0.2s ease-in-out"}
            bgColor={
                isOpen == true
                    ? "gray.800"
                    : path == "/" && scrollTop == 0
                    ? "transparent"
                    : "gray.800"
            }
        >
            {/* logo brand */}
            <Flex
                cursor={"pointer"}
                w={"200px"}
                justify={"flex-start"}
                p={25}
                pl={75}
            >
                {/* TODO: check if user is logged in or nah */}
                <Text
                    as={motion.div}
                    whileHover={{ scale: 1.5 }}
                    fontSize={"4xl"}
                    color={"white"}
                    fontFamily={"Lato"}
                    fontWeight={900}
                    onClick={() => window.location.reload}
                >
                    AskMe
                </Text>
            </Flex>

            <Flex
                justify={"flex-end"}
                pos={"relative"}
                w={"full"}
                p={25}
                pr={75}
            >
                <HStack gap={10}>
                    <NavMenuItem icon={<BiHome />} link={"/"} name="Home" />
                    <NavMenuItem
                        icon={<BiCard />}
                        link="/creators"
                        name="Creators"
                    />
                    <NavMenuItem
                        icon={<BiUser />}
                        link={"/auth"}
                        name="Login/Register"
                    />
                </HStack>
            </Flex>
        </Flex>
    );
};
