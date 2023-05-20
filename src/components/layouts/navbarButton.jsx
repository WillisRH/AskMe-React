import { Button, Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
    btnDark,
    btnLight,
    textDark,
    textLight,
} from "../../utils/themeConfigs";

// the props is
// icon, name, link

export const NavMenuItem = (props) => {
    const bgColorBtn = useColorModeValue("white", "black");
    const textColorBtn = useColorModeValue("black", "white");

    return (
        <Link href={props.link}>
            <Button
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                _hover={{ textColor: "white", bgColor: "blackAlpha.500" }}
                transition={"all 0.3s ease-in-out"}
                textColor={textColorBtn}
                bgColor={bgColorBtn}
                variant={"solid"}
                leftIcon={props.icon}
                fontSize={20}
            >
                {props.name}
            </Button>
        </Link>
    );
};

export const NavInvisibleMenuItem = (props) => {
    return (
        <Link href={props.link}>
            <Button
                size={{ base: "md", sm: "lg" }}
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                leftIcon={props.icon}
                variant={"ghost"}
                color="white"
                _hover={{ bgColor: "none" }}
                _active={{ bgColor: "none" }}
            >
                {props.name}
            </Button>
        </Link>
    );
};
