import React from "react";
import  {Link, Flex, Container, Box, Text, List, ListItem} from '@chakra-ui/react';

const Header = () => {
    return (
        <Box as="header" padding="8px">
            <Container maxW="8xl" textTransform="uppercase">
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="500" fontSize="30px" lineHeight="35.8px">NEOBAZAAR</Text>
                        <List textStyle="button-small">
                        <Flex direction="row" gap="40px" >
                            <ListItem>
                                <Link>about us</Link>
                            </ListItem>
                            <ListItem>
                                <Link>Features</Link>
                            </ListItem>
                            <ListItem>
                                <Link>pricing</Link>
                            </ListItem>
                            </Flex>
                        </List>
                    <Link textStyle="button-medium"> Log in </Link>
                </Flex>

            </Container>
        </Box>
    )
}

export default Header;