import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Text,
  Box,
  Divider,
  Center,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";



const SliderWrapper = styled(Box)`
  .slick-slide {
    padding: 10px 20px;
  }

  .slick-prev {
    left: -35px;
  }
`;

const StyledArrow = styled.div`
  &:before {
    color: grey;
    cursor: pointer;
    font-size: 35px;
  }
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <StyledArrow className={className} style={{ ...style }} onClick={onClick} />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <StyledArrow className={className} style={{ ...style }} onClick={onClick} />
  );
}

const Reviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box as='section'>
      <Container maxW='8xl' margin='100px auto'>
        <Center><Text as="h2" textStyle="heading-small" textAlign="center" padding="70px 0">Trusted by over 100,000 authors<Divider orientation='vertical'/>
We help authors grow their business and turn their passion into profit.</Text></Center>
        <SliderWrapper>
          <Slider {...settings}>
            <Card bgColor='green' minH='500px' position='relative'>
              <CardHeader
                position='absolute'
                width='100%'
                bgColor='orange'
                top='15px'
                textAlign='center'>
                <Text>Евгения</Text>
              </CardHeader>
              <CardBody
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'>
                <Text>Шикарно поработали, сайт топ, всем спасибо!</Text>
              </CardBody>
            </Card>

            <Card bgColor='yellow' minH='500px' position='relative'>
              <CardHeader
                position='absolute'
                width='100%'
                bgColor='fuchsia'
                top='15px'
                textAlign='center'>
                <Text>Евгения</Text>
              </CardHeader>
              <CardBody 
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'>
                <Text>Шикарно поработали, сайт топ, всем спасибо!</Text>
              </CardBody>
            </Card>

            <Card bgColor='green' minH='500px' position='relative'>
              <CardHeader
                position='absolute'
                width='100%'
                bgColor='orange'
                top='15px'
                textAlign='center'>
                <Text>Евгения</Text>
              </CardHeader>
              <CardBody
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'>
                <Text>Шикарно поработали, сайт топ, всем спасибо!</Text>
              </CardBody>
            </Card>

            <Card bgColor='pink' minH='500px' position='relative'>
              <CardHeader
                position='absolute'
                width='100%'
                bgColor='green-black'
                top='15px'
                textAlign='center'>
                <Text>Евгения</Text>
              </CardHeader>
              <CardBody
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'>
                <Text>Шикарно поработали, сайт топ, всем спасибо!</Text>
              </CardBody>
            </Card>

            <Card bgColor='yellow' minH='500px' position='relative'>
              <CardHeader
                position='absolute'
                width='100%'
                bgColor='fuchsia'
                top='15px'
                textAlign='center'>
                <Text>Евгения</Text>
              </CardHeader>
              <CardBody
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'>
                <Text>Шикарно поработали, сайт топ, всем спасибо!</Text>
              </CardBody>
            </Card>
          </Slider>
        </SliderWrapper>
      </Container>
    </Box>
  );
};

export default Reviews;
