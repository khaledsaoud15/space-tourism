import React, { useState } from "react";
import styled from "styled-components";
import { technology } from "../data";
import bg from "../images/technology/background-technology-desktop.jpg";

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  height: 545px;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 500px;
`;

const ContentContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 50%;
  color: #fff;
  margin-left: 150px;
  margin-top: 60px;
`;

const Tech = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 3%;
  left: 9.7%;
`;

const S1 = styled.span`
  font-weight: 700;
  color: #999;
  margin-right: 15px;
  font-size: 20px;
`;

const S2 = styled.span`
  color: #999;
  font-weight: 400;
  letter-spacing: 8px;
  font-size: 14px;
`;

const TechNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 100px;
  position: absolute;
  left: 5%;
  color: #fff;
`;

const Num = styled.span`
  margin: 20px 0;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 25px;
  cursor: pointer;
`;

const TechTerm = styled.span`
  font-size: 14px;
  color: #999;
  letter-spacing: 5px;
`;

const TchName = styled.h1`
  margin: 10px 0;
  font-size: 70px;
  font-weight: 400;
  letter-spacing: 5px;
`;

const TechDesc = styled.span`
  font-size: 14px;
  color: #999;
  letter-spacing: 2px;
  line-height: 25px;
  margin-top: 20px;
`;

const TechDescCntr = styled.div`
  width: 70%;
`;

const ImgContainer = styled.div`
  margin-left: 40px;
  margin-top: 40px;
`;

const ShipImg = styled.img`
  width: 500px;
  height: 500px;
`;

const Technology = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlider = (number) => {
    if (number === "1") {
      setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 0);
    } else {
      if (number === "2") {
        setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 1);
      } else {
        if (number === "3") {
          setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 2);
        }
      }
    }
  };

  return (
    <div>
      <Img src={bg} />
      <Container>
        <Tech>
          <S1>03</S1>
          <S2>SPACE LAUNCH 101</S2>
        </Tech>

        <Wrapper slideIndex={slideIndex}>
          {technology.map((item) => (
            <Slider>
              <ContentContainer>
                <TechTerm>THE TERMINOLOGY</TechTerm>
                <TchName>{item.name}</TchName>
                <TechDescCntr>
                  <TechDesc>{item.description}</TechDesc>
                </TechDescCntr>
              </ContentContainer>
              <ImgContainer>
                <ShipImg src={item.image} />
              </ImgContainer>
            </Slider>
          ))}
        </Wrapper>
        <TechNumbers>
          <Num
            style={
              slideIndex === 0
                ? { background: "#fff", color: "#000" }
                : { background: "transparent" }
            }
            onClick={() => nextSlider("1")}
          >
            1
          </Num>
          <Num
            style={
              slideIndex === 1
                ? { background: "#fff", color: "#000" }
                : { background: "transparent" }
            }
            onClick={() => nextSlider("2")}
          >
            2
          </Num>
          <Num
            style={
              slideIndex === 2
                ? { background: "#fff", color: "#000" }
                : { background: "transparent" }
            }
            onClick={() => nextSlider("3")}
          >
            3
          </Num>
        </TechNumbers>
      </Container>
    </div>
  );
};

export default Technology;
