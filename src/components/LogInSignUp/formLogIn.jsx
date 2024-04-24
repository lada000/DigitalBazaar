import { React, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Text,
  Link,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import ButtonLogIn from "./buttonLogIn";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormLogIn = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems="flex-start" gap="0">
        <FormControl m="0 0 15px">
          <FormLabel htmlFor='email' />
          <Input
            id='email'
            type='email'
            placeholder='E-mail'
            autoComplete='email'
            {...register("email", { required: "Email is required." })}
            sx={{
              color: "black",
              bg: "white",
              border: "solid white 2px",
              "&:hover": {
                borderColor: "black",
              },
              "&:focus-visible": {
                borderColor: "black",
                boxShadow: "none",
              },
            }}
          />
        </FormControl>
        <Flex justifyContent="flex-end" width="100%">
          <Box>
            <Link textStyle="body-small">Forgot your password?</Link>
          </Box>
        </Flex>
        <FormControl>
          <FormLabel htmlFor='password' />
          <InputGroup>
            <Input
              id='password'
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              {...register("password", { required: "Password is required." })}
              sx={{
                color: "black",
                bg: "white",
                border: "solid white 2px",
                "&:hover": {
                  borderColor: "black",
                },
                "&:focus-visible": {
                  borderColor: "black",
                  boxShadow: "none",
                },
              }}
            />
            <InputRightElement>
              <IconButton
                bg='transparent'
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClick={togglePasswordVisibility}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Checkbox borderColor='black' bg='transparent' textStyle='body-small' margin="15px 0">
          Remember me
        </Checkbox>
        <ButtonLogIn />
      </VStack>
      <Text textStyle='body-small' margin='20px 0'>
        Don’t have an account? 
        <Link textStyle='button-medium' color='#fff' padding="0 5px">
          Sign up
        </Link>
      </Text>
    </Box>
  );
};

export default FormLogIn;
