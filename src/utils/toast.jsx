import { useToast } from "@chakra-ui/react";

export const setToast = () => {
    const toast = useToast();

    const makeToast = (title, message, status) => {
        return toast({
            title: title,
            description: message,
            status: status,
            isClosable: true,
            duration: 3000,
            position: "bottom",
        });
    };

    return { makeToast };
};
