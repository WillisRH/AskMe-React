import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";

export const HomeWelcome = () => {
    // to check if user is authenticated
    const isAuthed = useIsAuthenticated();
    // auth user id, email, dll
    const authUser = useAuthUser();

    return (
        <>
            <Flex
                justify={"center"}
                mx={"auto"}
                bgColor={"gray"}
                h={"full"}
                bgImage={
                    "linear-gradient(to bottom right, rgb(153,0,230), rgb(0,0,0))"
                }
            >
                <Box mt={225} textAlign={"center"}>
                    <HStack gap={300}>
                        {!isAuthed() ? (
                            <>
                                <VStack>
                                    <Heading
                                        fontSize={100}
                                        color={"white"}
                                        mx={40}
                                    >
                                        Welcome to <br />
                                        AskMe Website!
                                    </Heading>
                                    <Link>
                                        <Button
                                            leftIcon={<BiRightArrowAlt />}
                                            onClick={() =>
                                                (window.location.href =
                                                    "/#about")
                                            }
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                </VStack>
                            </>
                        ) : (
                            <VStack>
                                <Heading fontSize={100} color={"white"} mx={40}>
                                    Hello again, {authUser?.username}
                                </Heading>
                                <Link>
                                    <Button
                                        leftIcon={<BiRightArrowAlt />}
                                        onClick={() =>
                                            (window.location.href = "#about")
                                        }
                                    >
                                        Account Panel
                                    </Button>
                                </Link>
                            </VStack>
                        )}
                    </HStack>
                </Box>
            </Flex>
        </>
    );
};
