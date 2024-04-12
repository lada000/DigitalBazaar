import React from "react";
import  {Link, Flex, Spacer, Container, Box, Text, List, ListItem} from '@chakra-ui/react';

const Header = () => {
    return (
        <Box as="header" padding="8px">
            <Container maxW="8xl" textTransform="uppercase">
                <Flex justifyContent="space-between">
                    <Text>NEOBAZAAR</Text>
                        <List>
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
                    <Link> Log in </Link>
                </Flex>

            </Container>
        </Box>
    )
}

export default Header;