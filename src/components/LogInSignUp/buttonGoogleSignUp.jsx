import React from "react";
import { Button, Center } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";


const ButtonGoogleSignUp = () => {
  return (
    <Center>
      <Button leftIcon={<FcGoogle />}
        bg='rgba(255, 144, 232, 1)'
        p='10px 20px'
        color='#fff'
        width='100%'
        borderRadius='10px'
        fontFamily= "Arial"
        fontSize= "18px"
        fontWeight= "700"
        lineHeight= "20px"
        _hover={{ bg: "fuchsia" }}
        >
        Sign Up with Google
      </Button>
    </Center>
  );
};

export default ButtonGoogleSignUp;
