import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import HeaderLogIn from "../components/LogInSignUp/headerLogIn";
import ButtonGoogle from "../components/LogInSignUp/buttonGoogle";
import FormLogInSeparator from "../components/LogInSignUp/formSeparator";
import LoginSquares from "../components/LogInSignUp/loginSquares";
import FormSignUp from "../components/LogInSignUp/formSignUp";

const SignUp = () => {
  return (
    <Box as='section' bgColor='green-black' w='100vw' h='100vh' overflow='auto'>
      <HeaderLogIn />
      <Container maxW='8xl'>
        <Box display='flex' margin='50px auto'>
          <Box margin='0 100px 0 0' width='50%'>
            <Box
              display='flex'
              flexDirection='column'
              gap='10px'
              alignItems='center'
              margin='40px 0'>
              <Text fontWeight='500' fontSize='60px'>
                Create your account
              </Text>
              <Text
                fontFamily='Arial'
                fontSize='18px'
                fontWeight='700'
                lineHeight='20px'>
                Let’s get starded
              </Text>
            </Box>
            <ButtonGoogle />
            <FormLogInSeparator />
            <FormSignUp />
          </Box>
          <Box margin='50px 0 0 100px' width='50%'>
            <LoginSquares />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
