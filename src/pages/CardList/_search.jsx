import React, { useState } from 'react';
import { Box, Input, InputRightElement, IconButton } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';


const Search = ({ products }) => {
 
  return (
    <Box       padding='50px 0 25px'
    >
      <Input
      bg='white' 
        placeholder="Search..."
        rightElement={
          <InputRightElement>
            <IconButton
              aria-label="Clear search"
              icon={<CloseIcon />}
            />
          </InputRightElement>
        }
      />
    </Box>
  );
};

export default Search;
