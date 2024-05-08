import React, { useState } from "react";
import {
  Box,
  Input,
  InputRightElement,
  InputLeftElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      onSearch(searchQuery);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <Box padding='50px 0 25px' display='flex' gap={6}>
      <InputGroup position='relative'>
        <InputLeftElement
          pointerEvents='none' 
          children={<FaSearch color='gray' />}
        />
        <Input
          type='text'
          bg='white'
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <InputRightElement
          cursor='pointer'
          children={<BsXLg color='gray' />}
          onClick={handleClear}
        />
      </InputGroup>
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
};

export default Search;
