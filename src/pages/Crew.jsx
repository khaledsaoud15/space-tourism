import React, { useState } from "react";
import styled from "styled-components";
import { crew } from "../data";
import bg from "../images/crew/background-crew-desktop.jpg";

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

const Slider = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  height: 545px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 50%;
  color: #fff;
  margin-left: 150px;
  margin-bottom: 80px;
`;

const CrewContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 2.5%;
`;

const CrewNum = styled.span`
  font-weight: 700;
  color: #999;
  margin-right: 15px;
  font-size: 20px;
`;
const CrewText = styled.span`
  color: #999;
  font-weight: 400;
  letter-spacing: 8px;
  font-size: 14px;
`;

const CrewContent = styled.div``;

const CrewRole = styled.span`
  color: #999;
  letter-spacing: 5px;
  font-size: 25px;
`;
const CrewName = styled.h1`
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
`;
const CrewBio = styled.span`
  line-height: 30px;
  color: #999;
  font-size: 18px;
`;

const CrewBioContainer = styled.div`
  width: 80%;
`;

const SliderDots = styled.div`
  display: flex;
  position: absolute;
  top: 90%;
  left: 9%;
`;
const Span = styled.span`
  width: 15px;
  height: 15px;
  border: 1px solid #fff;
  margin: 0 20px;
  border-radius: 50%;
  cursor: pointer;
`;

const ImgContainer = styled.div``;

const ImgPersone = styled.img`
  width: 350px;
  position: absolute;
  bottom: 0;
  margin-left: 100px;
`;

const Crew = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlider = (number) => {
    if (number === "1") {
      setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 0);
    } else {
      if (number === "2") {
        setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 1);
      } else {
        if (number === "3") {
          setSlideIndex(slideIndex < 1 ? slideIndex + 2 : 2);
        } else {
          if (number === "4") {
            setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 3);
          }
        }
      }
    }
  };

  return (
    <div>
      <Img src={bg} />
      <Container>
        <Wrapper slideIndex={slideIndex}>
          {crew.map((item) => (
            <Slider>
              <ContentContainer>
                <CrewContainer>
                  <CrewNum>02</CrewNum>
                  <CrewText>MEET YOUR CREW</CrewText>
                </CrewContainer>
                <CrewContent>
                  <CrewRole>{item.role.toUpperCase()}</CrewRole>
                  <CrewName>{item.name.toUpperCase()}</CrewName>
                  <CrewBioContainer>
                    <CrewBio>{item.bio}</CrewBio>
                  </CrewBioContainer>
                </CrewContent>
              </ContentContainer>
              <ImgContainer>
                <ImgPersone src={item.image} />
              </ImgContainer>
            </Slider>
          ))}
        </Wrapper>
        <SliderDots>
          <Span
            style={
              slideIndex === 0
                ? { background: "#fff" }
                : { background: "transparent" }
            }
            onClick={() => {
              nextSlider("1");
            }}
          ></Span>
          <Span
            style={
              slideIndex === 1
                ? { background: "#fff" }
                : { background: "transparent" }
            }
            onClick={() => {
              nextSlider("2");
            }}
          ></Span>
          <Span
            style={
              slideIndex === 2
                ? { background: "#fff" }
                : { background: "transparent" }
            }
            onClick={() => {
              nextSlider("3");
            }}
          ></Span>
          <Span
            style={
              slideIndex === 3
                ? { background: "#fff" }
                : { background: "transparent" }
            }
            onClick={() => {
              nextSlider("4");
            }}
          ></Span>
        </SliderDots>
      </Container>
    </div>
  );
};

export default Crew;
