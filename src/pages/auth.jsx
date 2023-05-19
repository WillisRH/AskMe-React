import {
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import { LoginPanel } from "../components/auth/login";
import { RegisterPanel } from "../components/auth/register";

export const AuthPage = () => {
    return (
        <>
            <Flex
                w={"full"}
                h={"100vh"}
                bgColor={"gray.900"}
                justify={"center"}
            >
                <Box
                    boxShadow={"0 1px 12px 0 black"}
                    mx={5}
                    mt={300}
                    w={800}
                    h={500}
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
        </>
    );
};
