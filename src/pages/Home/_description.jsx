import React from "react";
import {
    Box,
    Container,
    Text,
    Grid,
    GridItem,
    Heading,
  } from "@chakra-ui/react";


const Description = () => {
    return (
        <Box as='section' bg='#B23386'>
        <Container maxW='8xl'>
          <Box color='white' minH='730px'>
            <Grid
              templateColumns='repeat(7, 1fr)'
              templateRows='repeat(3, 1fr)'
              gap={0}>
              <GridItem gridColumn='5 / span 3' gridRow='2 / 3'>
                <Box
                  textTransform='uppercase'
                  display='flex'
                  flexDirection='column'
                  gap='20px'
                  >
                  <Text textStyle="body-large">digital platform</Text>
                  <Text fontWeight="400" fontSize="16px" lineHeight="18.4px" fontFamily="Arial">
                    This is a space for interaction between creators and users,
                    promotes the distribution of digital content and provides
                    opportunities for monetization and development in the
                    digital environment.
                  </Text>
                </Box>{" "}
              </GridItem>
              <GridItem gridColumn='1 / span 3' gridRow='3 / 4'>
                <Heading fontSize='180px' lineHeight='170px' fontWeight="500" >
                  Digital
                </Heading>
              </GridItem>
              <GridItem
                gridColumn='4 / span 3'
                gridRow='4 / 5'
                position='relative'>
                <Heading
                  fontSize='180px'
                  lineHeight='140px'
                  position='absolute'
                  fontWeight="500"
                  left='3vw'>
                  Products
                </Heading>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>
    )
}

export default Description;