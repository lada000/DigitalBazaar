import React from 'react'
import  { Box, Grid, GridItem} from '@chakra-ui/react';
import { Md3DRotation } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { SiAudiomack } from "react-icons/si";


const YellowSquares = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" bgColor="orange" boxSize="78px" color="#fff">
        <CiFaceSmile fontSize="40px"/>
    </Box>
  )  
}

const PinkSquares = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" bgColor="rgba(255, 144, 232, 1)" boxSize="78px" color="#fff"> 
          <SiAudiomack fontSize="40px"/>
      </Box>
    )  
  }

  const FuchsiaSquares = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" bgColor="fuchsia" boxSize="78px" color="#fff">
          <Md3DRotation fontSize="40px"/>
      </Box>
    )  
  }

  const LilacSquares = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" bgColor="lilac" boxSize="78px" color="#fff">
          <TbWorld fontSize="40px"/>
      </Box>
    )  
  }



const LoginSquares = () => {
  return (
    <Grid
    templateColumns="repeat(7, 1fr)"
    templateRows="repeat(7, 1fr)"
    gap={0}
    maxW="545px"
  >
    <GridItem
      colStart={1}
      colEnd={2}
      rowStart={1}
      rowEnd={2}
      boxSize="78px"
    >
      <YellowSquares/>
    </GridItem>
    <GridItem
      colStart={3}
      colEnd={4}
      rowStart={1}
      rowEnd={2}
      boxSize="78px"
    >
      <PinkSquares/>
    </GridItem>
    <GridItem
      colStart={2}
      colEnd={3}
      rowStart={2}
      rowEnd={3}
      boxSize="78px"
    >
      <FuchsiaSquares/>
    </GridItem>
    <GridItem
      colStart={4}
      colEnd={5}
      rowStart={2}
      rowEnd={3}
      boxSize="78px"
    >
      <YellowSquares/>
    </GridItem>
    <GridItem
      colStart={6}
      colEnd={7}
      rowStart={2}
      rowEnd={3}
      boxSize="78px"
    >
      <PinkSquares/>
    </GridItem>
    <GridItem
      colStart={3}
      colEnd={4}
      rowStart={3}
      rowEnd={4}
      boxSize="78px"
    >
      <LilacSquares/>
    </GridItem>
    <GridItem
      colStart={5}
      colEnd={6}
      rowStart={3}
      rowEnd={4}
      boxSize="78px"
    >
      <LilacSquares/>
    </GridItem>
    <GridItem
      colStart={7}
      colEnd={8}
      rowStart={3}
      rowEnd={4}
      boxSize="78px"
    >
      <LilacSquares/>
    </GridItem>
    <GridItem
      colStart={2}
      colEnd={3}
      rowStart={4}
      rowEnd={5}
      boxSize="78px"
    >
      <YellowSquares/>
    </GridItem>
    <GridItem
      colStart={4}
      colEnd={5}
      rowStart={4}
      rowEnd={5}
      boxSize="78px"
    >
      <PinkSquares/>
    </GridItem>
    <GridItem
      colStart={6}
      colEnd={7}
      rowStart={4}
      rowEnd={5}
      boxSize="78px"
    >
      <FuchsiaSquares/>
    </GridItem>
    <GridItem
      colStart={3}
      colEnd={4}
      rowStart={5}
      rowEnd={6}
      boxSize="78px"
    >
      <LilacSquares/>
    </GridItem>
    <GridItem
      colStart={5}
      colEnd={6}
      rowStart={5}
      rowEnd={6}
      boxSize="78px"
    >
      <YellowSquares/>
    </GridItem>
    <GridItem
      colStart={7}
      colEnd={8}
      rowStart={5}
      rowEnd={6}
      boxSize="78px"
    >
      <YellowSquares/>
    </GridItem>
    <GridItem
      colStart={4}
      colEnd={5}
      rowStart={6}
      rowEnd={7}
      boxSize="78px"
    >
      <FuchsiaSquares/>
    </GridItem>
    <GridItem
      colStart={6}
      colEnd={7}
      rowStart={6}
      rowEnd={7}
      boxSize="78px"
    >
      <LilacSquares/>
    </GridItem>
    <GridItem
      colStart={5}
      colEnd={6}
      rowStart={7}
      rowEnd={8}
      boxSize="78px"
    >
      <PinkSquares/>
    </GridItem>
    <GridItem
      colStart={7}
      colEnd={8}
      rowStart={7}
      rowEnd={8}
      boxSize="78px"
    >
      <FuchsiaSquares/>
    </GridItem>
  </Grid>
  )
}

export default LoginSquares;