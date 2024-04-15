import React from "react";
import {
  Box,
  Container,
  Link ,
  Grid,
  Image,
  Text,
  Flex,
  Button,
  GridItem,
  Heading,
  Center,
  Divider,
} from "@chakra-ui/react";
import Gif3D from "../../image/Categories/Gif3D.gif";
import Education from "../../image/Categories/education.jpg";
import Code from "../../image/Categories/code.gif";
import Game from "../../image/Categories/Game.gif";
import Audio from "../../image/Categories/audio.gif";
import Paint from "../../image/Categories/paint.gif";
import Photo from "../../image/Categories/photo.jpg";
import Sport from "../../image/Categories/sport.jpg";
import Design from "../../image/Categories/design.jpg";
import ButtonStartSelling from "../../components/buttonStartSelling";

const linkCategories = {
  color: "#867777",
  fontFamily: "Arial",
  padding: "10px 20px",
  fontSize: "25px",
  lineHeight: "28.75px",
  fontWeight: "400",
  margin: "20px 0 0",
}

const Categories = () => {
  return (
    <Box as='section'>
      <Container maxW='8xl'>
        <ButtonStartSelling />
        <Center>
          <Text as="h2" fontSize='30px' m="80px 0 50px" lineHeight="34.5px" textAlign="center" fontFamily="Arial" fontWeight="400">
            Looking for inspiration on what you can sell?{" "}
            <Divider orientation='vertical' />
            Discover the best-selling products and creators
          </Text>
        </Center>
        <Grid
          templateColumns='repeat(3, 1fr)'
          templateRows='repeat(3, 1fr)'
          gap={6}>
          <GridItem>
            <Flex direction='column'>
              <Image src={Gif3D} maxH='390px' alt='3D gif' />
              <Link style={linkCategories}>3D →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Education} maxH='390px' alt='Education' />
              <Link style={linkCategories}>EDUCATION →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Audio} maxH='390px' alt='Audio gif' />
              <Link style={linkCategories}>AUDIO →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Design} maxH='390px' alt='Design' />
              <Link style={linkCategories}>DESIGN →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Paint} maxH='390px' alt='Paint gif' />
              <Link style={linkCategories}>DRAWING & PAINTING →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Photo} maxH='390px' alt='Photo' />
              <Link style={linkCategories}>PHOTOGRAPHY →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Game} maxH='390px' alt='Game gif' />
              <Link style={linkCategories}>GAMING →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Sport} maxH='390px' alt='Sport' />
              <Link style={linkCategories}>FITNESS & HEALTH →</Link >
            </Flex>
          </GridItem>

          <GridItem>
            <Flex direction='column'>
              <Image src={Code} maxH='390px' alt='Code gif' />
              <Link style={linkCategories}>SOFTWARE DEVELOPMENT →</Link >
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
