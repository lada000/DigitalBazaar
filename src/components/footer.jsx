import React from "react";
import {
  Link,
  Container,
  Box,
  Text,
  List,
  ListItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';




const Footer = () => {
  return (
    <Box as='footer' bg="rgba(255, 144, 232)" padding="50px 0 30px">
      <Container maxW='8xl' textTransform='uppercase'>
    <Grid
      templateColumns="repeat(2, 1.5fr) repeat(3, 1fr) 0.5fr 0.8fr"
      templateRows="0.7fr 1fr 0.5fr 0.7fr repeat(2, 1fr)"
      gap={0}
      w="full"
      h="full"
    >
      <GridItem
        gridArea="1 / 1 / 2 / 3"
      >
        <Text textStyle="button-medium">NEOBAZAAR</Text>
      </GridItem>
      <GridItem
        gridArea="2 / 1 / 3 / 3"
      >
        <Text textStyle="body-large">Join the more than 100,000 creators who use neobazaar
         to share their knowledge. Easily create and sell digital 
           downloads with our powerful yet simple platform.</Text>
      </GridItem>
      <GridItem
        gridArea="4 / 1 / 6 / 3"
      >
          <List fontWeight="500" fontSize="20px" lineHeight="23px" textTransform="none">
            <ListItem p="10px 0">Want to talk?</ListItem>
            <ListItem>neodigitalbazaar@gmail.com</ListItem>
          </List>
      </GridItem>
      <GridItem
        gridArea="6 / 1 / 7 / 3"
        display="flex" alignItems="flex-end"
      >
        <Text textStyle="button-medium">© 2024 NEOBAZAAR</Text>        
      </GridItem>
      <GridItem
        gridArea="1 / 4 / 2 / 5"
      >
        <Text textStyle="button-medium">INFORMATION</Text>
      </GridItem>
      <GridItem
        gridArea="1 / 5 / 2 / 6"
      >
        <Text textStyle="button-medium">PRODUCT</Text>
      </GridItem>
      <GridItem
        gridArea="1 / 6 / 2 / 7"
      >
        <Text textStyle="button-medium">Community</Text>
      </GridItem>
      <GridItem
        gridArea="2 / 4 / 3 / 5"
      >
        <List textStyle="body-large" display="flex" flexDirection="column" gap={3}>
          <ListItem >
            <Link>PRivacy POLICY</Link>
          </ListItem>
          <ListItem>
            <Link>tERMS OF SERVICE</Link>
          </ListItem>
        </List>
      </GridItem>
      <GridItem
        gridArea="2 / 5 / 3 / 6"
      >
        <List textStyle="body-large" display="flex" flexDirection="column" gap={3}>
          <ListItem>
            <Link>fEATURES</Link>
          </ListItem>
          <ListItem>
            <Link>PRICING</Link>
          </ListItem>
        </List>
      </GridItem>
      <GridItem
        gridArea="2 / 6 / 3 / 7"
      >
        <List textStyle="body-large" display="flex" flexDirection="column" gap={3}>
          <ListItem>
            <Link>HELP</Link>
          </ListItem>
          <ListItem>
            <Link>SECURITY</Link>
          </ListItem>
        </List>
      </GridItem>
      <GridItem
        gridArea="4 / 4 / 5 / 7"
      >
        <Text textStyle="button-medium" p="10px 0">CONTACT US</Text>
      </GridItem>
      <GridItem
        gridArea="5 / 4 / 6 / 7"
        bg="orange.500" // Example background color for div12
      >
        
          <List textStyle="body-large" display="flex" flexDirection="column" gap={2}>
            <ListItem>minsk</ListItem>
            <ListItem>Nezavisimosti proospect, 21 </ListItem>
            <ListItem>220095, Minsk, Belarus </ListItem>
            <ListItem>Phone: +37529 2144897</ListItem>
          </List>
      </GridItem>
      <GridItem
        gridArea="4 / 7 / 6 / 8"
        display="flex" alignItems="flex-end" 
      >
          <List display="flex" justifyContent="space-between" width="100%">
            <Link><ListItem><FaFacebook color="rgba(178, 51, 134, 1)" fontSize="x-Large"/></ListItem></Link>
            <Link><ListItem><FaInstagram color="rgba(178, 51, 134, 1)" fontSize="x-Large"/></ListItem></Link>
            <Link><ListItem><FaLinkedin color="rgba(178, 51, 134, 1)" fontSize="x-Large"/></ListItem></Link>
          </List>
      </GridItem>
    </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
