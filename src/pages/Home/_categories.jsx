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
import Education from "../../image/Categories/education.gif";
import Code from "../../image/Categories/code.gif";
import Game from "../../image/Categories/Game.gif";
import Audio from "../../image/Categories/audio.gif";
import Paint from "../../image/Categories/paint.gif";
import Photo from "../../image/Categories/photo.gif";
import Sport from "../../image/Categories/sport.gif";
import Design from "../../image/Categories/Design.gif";
import ButtonStartSelling from "../../components/buttonStartSelling";

const linkCategories = {
  color: "#867777",
  fontFamily: "Arial",
  fontSize:{ base: "25px" },
  lineHeight: "28.75px",
  fontWeight: "400",
}

const backgroundImageStyle = {
  bgPosition: "center",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  width: "100%",
  height: "100%",
 };

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
      templateColumns="repeat(3, 1fr)"
      templateRows="1fr 0.1fr 1fr 0.1fr 1fr 0.1fr"
      gap={5}
    >
      <Box gridArea="1 / 1 / 2 / 2" bgImage={Gif3D} {...backgroundImageStyle}/>
      <Box gridArea="2 / 1 / 3 / 2" p="10px 20px">
      <Link style={linkCategories}>3D →</Link >
      </Box>

      <Box gridArea="1 / 2 / 2 / 3" bgImage={Education} {...backgroundImageStyle} > 
      </Box>
      <Box gridArea="2 / 2 / 3 / 3" p="10px 20px">
      <Link style={linkCategories}>EDUCATION →</Link >
      </Box>


      <Box gridArea="1 / 3 / 2 / 4" 
       bgImage={Audio} {...backgroundImageStyle}>        
      </Box>
      <Box gridArea="2 / 3 / 3 / 4" p="10px 20px">      
      <Link style={linkCategories}>AUDIO →</Link >
      </Box>


      <Box gridArea="3 / 1 / 4 / 2"  bgImage={Design} {...backgroundImageStyle}/>
      <Box gridArea="4 / 1 / 5 / 2" p="10px 20px">
      <Link style={linkCategories}>DESIGN →</Link >
      </Box>


      <Box gridArea="3 / 2 / 4 / 3"  bgImage={Paint} {...backgroundImageStyle} />
      <Box gridArea="4 / 2 / 5 / 3" p="10px 20px">
      <Link style={linkCategories}>DRAWING & PAINTING →</Link >
      </Box>


      <Box gridArea="3 / 3 / 4 / 4" >
      <Image src={Photo} objectFit="cover" alt='Photo' /> </Box>
      <Box gridArea="4 / 3 / 5 / 4" p="10px 20px">
      <Link style={linkCategories}>PHOTOGRAPHY →</Link >    
      </Box>


      <Box gridArea="5 / 1 / 6 / 2"  bgImage={Game} {...backgroundImageStyle} />
      <Box gridArea="6 / 1 / 7 / 2" p="10px 20px">
      <Link style={linkCategories}>GAMING →</Link >   
         </Box>


      <Box gridArea="5 / 2 / 6 / 3" bgImage={Sport} {...backgroundImageStyle} />
      <Box gridArea="6 / 2 / 7 / 3" p="10px 20px">
      <Link style={linkCategories}>FITNESS & HEALTH →</Link >     
      </Box>


      <Box gridArea="5 / 3 / 6 / 4"  bgImage={Code} {...backgroundImageStyle} />
      <Box gridArea="6 / 3 / 7 / 4" p="10px 20px">
      <Link style={linkCategories}>SOFTWARE DEVELOPMENT →</Link >
      </Box>
    </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
