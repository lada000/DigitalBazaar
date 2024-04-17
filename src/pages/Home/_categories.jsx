import React from "react";
import { Container,
  Link ,
  Grid,
  GridItem,
  Text,
  Center,
  Divider,
  Image,
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
import { Box } from "@chakra-ui/react";

const linkCategories = {
  color: "#867777",
  fontFamily: "Arial",
  fontSize:{ base: "25px" },
  lineHeight: "28.75px",
  fontWeight: "400",
}

const backgroundImageStyle  = {
  bgPosition: "center",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  width: "100%",
  height: "100%",
 };

const Categories = () => {
  return (
    <Box as='section' >
      <Container maxW='8xl'>
        <ButtonStartSelling />
        <Center>
          <Text as="h2" fontSize='30px' m="80px 0 50px" lineHeight="34.5px" textAlign="center" fontFamily="Arial" fontWeight="400">
            Looking for inspiration on what you can sell?{" "}
            <Divider orientation='vertical' />
            Discover the best-selling products and creators
          </Text>
        </Center>
     <Center>   
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="1fr 0.1fr 1fr 0.1fr 1fr 0.1fr"
      width="80%"
      columnGap={14}
      rowGap={1}
    >
      <GridItem gridArea="1 / 1 / 2 / 2" bgImage={Gif3D} {...backgroundImageStyle} />
      <GridItem gridArea="2 / 1 / 3 / 2" p="10px 20px" gap={0}>
      <Link style={linkCategories}>3D →</Link >
      </GridItem>

      <GridItem gridArea="1 / 2 / 2 / 3" bgImage={Education} {...backgroundImageStyle}  > 
      </GridItem>
      <GridItem gridArea="2 / 2 / 3 / 3" p="10px 20px">
      <Link style={linkCategories}>EDUCATION →</Link >
      </GridItem>


      <GridItem gridArea="1 / 3 / 2 / 4" 
       bgImage={Audio} {...backgroundImageStyle}  />
      <GridItem gridArea="2 / 3 / 3 / 4" p="10px 20px">      
      <Link style={linkCategories}>AUDIO →</Link >
      </GridItem>


      <GridItem gridArea="3 / 1 / 4 / 2"  bgImage={Design} {...backgroundImageStyle} />
      <GridItem gridArea="4 / 1 / 5 / 2" p="10px 20px">
      <Link style={linkCategories}>DESIGN →</Link >
      </GridItem>


      <GridItem gridArea="3 / 2 / 4 / 3"  bgImage={Paint} {...backgroundImageStyle}  />
      <GridItem gridArea="4 / 2 / 5 / 3" p="10px 20px">
      <Link style={linkCategories}>DRAWING & PAINTING →</Link >
      </GridItem>


      <GridItem gridArea="3 / 3 / 4 / 4"> 
      <Image src={Photo} objectFit="cover" alt='Photo' /></GridItem>
      <GridItem gridArea="4 / 3 / 5 / 4" p="10px 20px">
      <Link style={linkCategories}>PHOTOGRAPHY →</Link >    
      </GridItem>


      <GridItem gridArea="5 / 1 / 6 / 2"  bgImage={Game} {...backgroundImageStyle}  />
      <GridItem gridArea="6 / 1 / 7 / 2" p="10px 20px">
      <Link style={linkCategories}>GAMING →</Link >   
         </GridItem>


      <GridItem gridArea="5 / 2 / 6 / 3" bgImage={Sport} {...backgroundImageStyle}  />
      <GridItem gridArea="6 / 2 / 7 / 3" p="10px 20px">
      <Link style={linkCategories}>FITNESS & HEALTH →</Link >     
      </GridItem>


      <GridItem gridArea="5 / 3 / 6 / 4"  bgImage={Code} {...backgroundImageStyle}  />
      <GridItem gridArea="6 / 3 / 7 / 4" p="10px 20px">
      <Link style={linkCategories}>SOFTWARE DEVELOPMENT →</Link >
      </GridItem>
    </Grid>
    </Center>
      </Container>
    </Box>
  );
};

export default Categories;
