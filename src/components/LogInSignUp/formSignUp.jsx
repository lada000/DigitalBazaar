import { React, useState } from "react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Link as ChakraLink,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const inputSyle = {
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
};

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  const isAgreed = watch("agree", false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems='flex-start' spacing={2}>
        <FormControl>
          <FormLabel htmlFor='userName' />
          <Input
            id='userName'
            type='text'
            placeholder='User Name'
            {...register("userName", { required: true })}
            sx={inputSyle}
          />
        </FormControl>

        <FormControl m='0 0 15px'>
          <FormLabel htmlFor='email' />
          <Input
            id='email'
            type='email'
            placeholder='E-mail'
            autoComplete='email'
            {...register("email", { required: true })}
            sx={inputSyle}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='password' />
          <InputGroup>
            <Input
              id='password'
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              autoComplete='new-password'
              {...register("password", { required: true })}
              sx={inputSyle}
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

        <FormControl>
          <FormLabel htmlFor='passwordConfirmation' />
          <InputGroup>
            <Input
              id='passwordConfirmation'
              type={showPassword ? "text" : "password"}
              placeholder='Password Confirmation'
              autoComplete='new-password'
              {...register("passwordConfirmation", { required: true })}
              sx={inputSyle}
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

        <Button
          width='100%'
          type='submit'
          margin='20px 0 0'
          bg='#000'
          color='#fff'
          isDisabled={!isAgreed || isSubmitting}
          _hover={{ bg: "#000" }}>
          Sign up
        </Button>

        <FormControl display='flex' alignItems='center'>
          <Checkbox
            {...register("agree")}
            isChecked={isAgreed}
            sx={{
              ".chakra-checkbox__control": {
                backgroundColor: "transparent",
                
                borderColor: "black",                
                textStyle: "body-small",
                _checked: {
                  backgroundColor: "transparent",
                  borderColor: "black",
                  color: "black",
                },
                _hover: {
                  bg: "transparent",
                },
              },
            }}
          />
          <FormLabel m='0 10px'>
            I agree to the
            <ChakraLink
              as={ReactRouterLink}
              to='/terms-of-service'
              padding='0 5px'>
              terms of service
            </ChakraLink>
            and
            <ChakraLink
              as={ReactRouterLink}
              to='/privacy-policy'
              padding='0 5px'>
              privacy policy
            </ChakraLink>
          </FormLabel>
        </FormControl>
      </VStack>
    </Box>
  );
};

export default FormSignUp;
