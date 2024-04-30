import { React, useState } from "react";
import { Container, Text, Box, Center } from "@chakra-ui/react";
import Girl from "../../image/Girl.png";

const Reviews = () => {
  const blocks = [
    {
      avatar: Girl,
      name: "Alena",
      role: "Business analyst",
      description:
        "Пришёл в проект модератором, но задачи по модерации контента отодвинулись в сторону. Получал рутинные задачи, но хотел большего. Занимался тестированием, копирайтингом, переводами и дизайном. Команда разработки помогала и учила. Руководство доверяло и видело мой потенциал. Бывший руководитель подсказал, что могу стать продакт менеджером, и так и случилось. Теперь яувереннее в своих решениях и знаниях. Компания поддерживает развитие сотрудников и есть замечательные коллеги. Очень ценю и обожаю наш проект, это мотивирует меня делать его лучше.",
    },
    {
      avatar: Girl,
      name: "Lada",
      role: "Backend",
      description: "Description for Lada...",
    },
    {
      avatar: Girl,
      name: "Ekaterina",
      role: "Designer",
      description: "Description for Ekaterina...",
    },
    {
      avatar: Girl,
      name: "Kristina",
      role: "Tester",
      description: "Description for Kristina...",
    },
    {
      avatar: Girl,
      name: "Eugenia",
      role: "Frontend",
      description: "Description for Eugenia...",
    },
  ];

  const [isHovered, setIsHovered] = useState(Array(blocks.length).fill(false));

  const handleMouseEnter = (index) => {
    setIsHovered(isHovered.map((hovered, i) => (i === index ? true : false)));
  };

  const handleMouseLeave = () => {
    setIsHovered(Array(blocks.length).fill(false));
  };

  const avatarStyle = {
    borderRadius: "16px",
    backgroundColor: "rgba(203,153,249,100)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom, left top",
    backgroundSize: "contain, cover",
    color: "#fff",
    position: "relative",
    transition: "all .4s ease-in-out",
  };

  const flexTextStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "10px 10px",
  };

  const reviewStyle = {
    display: "inline-block",
    padding: "1.1em",
    borderRadius: "24px",
    backgroundColor: "#fff",
    height: "445px",
    width: "300px",
    overflow: "hidden",
    margin: "0 1em",
    overflowY: "scroll",
    scrollbarWidth: "none",
  };
  return (
    <Box
      as='section'
      bg='rgba(167, 217, 212, 1)'
      padding='50px 0'
      overflowX='scroll'
      style={{
        "scrollbar-width": "none",
        "overflow-x": "scroll",
      }}>
      <Container className='reviews' maxW='max-content' margin='0 auto' whiteSpace='nowrap'>
        <Center>
          <Text
            as='h2'
            textStyle='heading-small'
            textAlign='center'
            padding='30px 0'>
            Why I love NeoBazaar
          </Text>
        </Center>
        {blocks.map((block, index) => (
          <Box
            key={index}
            className='review'
            bgColor='green'
            style={reviewStyle}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            <Box
              className='Avatar'
              style={{
                backgroundImage: `url(${block.avatar})`,
                ...avatarStyle,
                ...flexTextStyle,
                height: isHovered[index] ? "75px" : "350px",
              }}>
              <Text
                as='h3'
                style={{
                  opacity: isHovered[index] ? "1" : "0",
                  transition: "all .25s",
                }}>
                {block.name}
              </Text>
              <Text
                as='h4'
                style={{
                  opacity: isHovered[index] ? "1" : "0",
                  transition: "all .25s",
                }}>
                {block.role}
              </Text>
            </Box>
            <Box className='name' style={flexTextStyle}>
              <Text
                as='h3'
                style={{
                  display: isHovered[index] ? "none" : "block",
                  transition: "all .25s",
                  fontSize: "20px",
                }}>
                {block.name}
              </Text>
              <Text
                as='h4'
                style={{
                  display: isHovered[index] ? "none" : "block",
                  transition: "all .25s",
                }}>
                {block.role}
              </Text>
            </Box>
            <Box
              className='desc'
              style={{
                display: isHovered[index] ? "block" : "none",
                transition: "all .25s",
                whiteSpace: 'wrap'
              }}>
              {block.description}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Reviews;
