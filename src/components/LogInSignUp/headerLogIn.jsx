import React from "react";
import  {Link as ChakraLink, Flex, Container, Box, List, ListItem} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';


const HeaderLogIn = () => {
    return (
        <Box as="header" padding="8px" position="fixed" top={0} w="100%" zIndex="10" bg="white">
            <Container maxW="8xl" textTransform="uppercase">
                <Flex justifyContent="space-between" alignItems="center">
                    <ChakraLink as={ReactRouterLink} to="/" style={{ textDecoration: "none" }} fontWeight="500" fontSize="30px" lineHeight="35.8px">NEOBAZAAR</ChakraLink>
                    <ChakraLink textStyle="button-medium" as={ReactRouterLink} to="/sign-up"> Sign Up </ChakraLink>
                </Flex>

            </Container>
        </Box>
    )
}

export default HeaderLogIn;