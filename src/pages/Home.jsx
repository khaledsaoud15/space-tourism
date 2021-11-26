import React from "react";
import styled from "styled-components";
import bg from "../images/home/background-home-desktop.jpg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Text = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 10%;
`;

const TextHeader = styled.span`
  margin-bottom: 10px;
  letter-spacing: 5px;
`;
const TextHeaderBold = styled.h1`
  margin: 20px 0;
  font-size: 100px;
  letter-spacing: 10px;
  font-weight: 400;
`;
const TextParagraph = styled.span`
  margin-top: 10px;
  line-height: 30px;
  letter-spacing: 2px;
`;
const Circle = styled.div`
  z-index: 2;
  color: #000;
  position: absolute;
  top: 60%;
  right: 20%;
  padding: 80px 40px;
  background: #fff;
  border-radius: 50%;
  font-size: 30px;
  font-weight: 400;
`;

const Home = () => {
  return (
    <Container>
      <Img src={bg} />
      <ContentContainer>
        <Text>
          <TextHeader>SO,YOU WANT TO TRAVEL TO</TextHeader>
          <TextHeaderBold>SPACE</TextHeaderBold>
          <TextParagraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </TextParagraph>
        </Text>
        <Circle>EXPLORE</Circle>
      </ContentContainer>
    </Container>
  );
};

export default Home;
