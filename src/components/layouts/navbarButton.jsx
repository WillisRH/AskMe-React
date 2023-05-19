import { Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

// the props is
// icon, name, link

export const NavMenuItem = (props) => {
    return (
        <Link href={props.link}>
            <Button
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                _hover={{ textColor: "white", bgColor: "blackAlpha.500" }}
                transition={"all 0.3s ease-in-out"}
                textColor={"black"}
                bgColor={"white"}
                variant={"solid"}
                leftIcon={props.icon}
                fontSize={20}
            >
                {props.name}
            </Button>
        </Link>
    );
};
