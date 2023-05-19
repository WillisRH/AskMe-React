import { Flex } from "@chakra-ui/react";

export const RegisterPanel = () => {
    return (
        <Flex>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Register</button>
            </form>
        </Flex>
    );
};
