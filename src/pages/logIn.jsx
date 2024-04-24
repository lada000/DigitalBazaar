import React from "react";
import {
  Box,
  Container,
  Text,
  List,
  ListItem,
  Flex,
  Button,
  Image,
  Icon,
  GridItem,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import ButtonGoogle from "../components/LogInSignUp/buttonGoogle";
import FormLogIn from "../components/LogInSignUp/formLogIn";
import FormLogInSeparator from "../components/LogInSignUp/formLogInSeparator";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";

const LogIn = () => {
  return (
    <Box as='section' bgColor='green-black' w='100vw' h='100vh' overflow="auto">
      <HeaderLogIn />
      <Container maxW='8xl'>
        <Box display='flex' margin='50px auto'>
          <Box margin='0 100px 0 0' width='50%'>
            <Box display="flex" flexDirection="column" gap="10px" alignItems="center" margin="40px">
            <Text fontWeight="500" fontSize="80px">
            Hi there!
            </Text>
            <Text 
            fontFamily= "Arial"
        fontSize= "18px"
        fontWeight= "700"
        lineHeight= "20px">
            Welcom to our platform NeoBazaar
            </Text>
            </Box>
            <ButtonGoogle />
            <FormLogInSeparator />
            <FormLogIn />
          </Box>
          <Box margin='50px 0 0 100px' width='50%'>
            <LoginSquares />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LogIn;
