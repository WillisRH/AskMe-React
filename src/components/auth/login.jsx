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
            "https://f295-111-94-109-109.ngrok-free.app/login",
            {
                mode: "cors",
                method: "POST",
                body: JSON.stringify({
                    email: formik.values.email,
                    password: formik.values.password,
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        const statuscode = res.json;
        console.log(statuscode);
        if (res.status == 0) {
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
            .min(4, "Username must have atl 4 chars")
            .max(20, "Username can only have 20 max chars"),
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
                <Heading>Log-in to your existing account.</Heading>
                <Divider my={7} color={"gray"} />

                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            variant={"flushed"}
                            p={5}
                            placeholder="Insert your username..."
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
                            type="text"
                            variant={"flushed"}
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
