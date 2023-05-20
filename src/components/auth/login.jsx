import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormErrorIcon,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
} from "@chakra-ui/react";
import { setToast } from "../../utils/toast";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export const LoginPanel = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const { makeToast } = setToast();

    const loginSubmit = async () => {
        const res = await fetch(
            "https://cc29-111-94-109-109.ngrok-free.app/login",
            {
                method: "POST",
                body: JSON.stringify({
                    email: formik.values.email,
                    password: formik.values.password,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.status == 202) {
            makeToast(
                "Failed to login!",
                "Your password is incorrect. Please try again!",
                "error"
            );
            console.log("test");
        } else if (res.status == 201) {
            makeToast("Failed to login!", "User not found!", "error");
            console.log("test2");
        }
    };

    const validSchema = yup.object({
        email: yup
            .string()
            .required("Required")
            .email("Please input a valid email address"),
        password: yup
            .string()
            .required("Required")
            .min(7, "Password must have atl 7 chars"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validateOnBlur: true,
        validationSchema: validSchema,
        onSubmit: loginSubmit,
    });

    return (
        <Flex>
            <Box w={"full"} h={"full"} textColor={"white"}>
                <Heading my={7}>Log-in to your existing account.</Heading>

                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            textColor={"black"}
                            type="text"
                            variant={"solid"}
                            p={5}
                            placeholder="Insert your email..."
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <FormErrorMessage>
                            <FormErrorIcon />
                            {formik.errors.email}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mt={7} isInvalid={formik.errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            textColor={"black"}
                            type="text"
                            variant={"solid"}
                            p={5}
                            placeholder="Insert your password..."
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <FormErrorMessage>
                            <FormErrorIcon />
                            {formik.errors.password}
                        </FormErrorMessage>
                    </FormControl>
                    <Button
                        w={"100%"}
                        mt={10}
                        type="submit"
                        colorScheme="facebook"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Flex>
    );
};
