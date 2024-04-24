import React from 'react'
import {
    Divider,
    Text,
    Box,
   } from '@chakra-ui/react';


const FormLogInSeparator = () => {
  return (
    <Box display="flex" alignItems="center" m="20px 0">
    <Divider orientation='horizontal' />
    <Text p="0 10px" fontFamily= "Arial"
        fontSize= "18px"
        fontWeight= "700"
        lineHeight= "20px">or</Text>
    <Divider orientation='horizontal' />
    </Box>
  )
}

export default FormLogInSeparator;