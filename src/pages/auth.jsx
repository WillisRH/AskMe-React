import {
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { LoginPanel } from "../components/auth/login";
import { RegisterPanel } from "../components/auth/register";
import { useIsAuthenticated } from "react-auth-kit";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
    const isAuthed = useIsAuthenticated();
    const navigate = useNavigate();
    const bgColor = useColorModeValue("gray.200", "gray.800");

    return (
        <>
            {!isAuthed() ? (
                <Flex
                    w={"full"}
                    h={"full"}
                    bgColor={bgColor}
                    justify={"center"}
                >
                    <Box
                        mx={5}
                        mt={300}
                        mb={144}
                        w={800}
                        h={600}
                        borderRadius={25}
                        bgColor={"gray.800"}
                    >
                        <Tabs
                            isFitted
                            size={"lg"}
                            colorScheme="linkedin"
                            variant={"soft-rounded"}
                        >
                            <TabList gap={3}>
                                <Tab textColor={"white"}>Register</Tab>
                                <Tab textColor={"white"}>Login</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <RegisterPanel />
                                </TabPanel>
                                <TabPanel>
                                    <LoginPanel />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Flex>
            ) : (
                useEffect(() => {
                    return navigate("/account/admin");
                })
            )}
        </>
    );
};
