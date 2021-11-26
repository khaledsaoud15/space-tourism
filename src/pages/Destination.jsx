import React, { useState } from "react";
import styled from "styled-components";
import bg from "../images/destination/background-destination-desktop.jpg";
import { destination } from "../data.js";

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
`;

const ImgPlanet = styled.img`
  width: 350px;
  display: flex;
  margin-left: 200px;
  -webkit-animation:spin 10s linear infinite;
    -moz-animation:spin 10s linear infinite;
    animation:spin 10s linear infinite;
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 500px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: white;
`;

const PlanetText = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 2.5%;
`;

const Span1 = styled.span`
  font-weight: 700;
  color: #999;
  margin-right: 15px;
  font-size: 20px;
`;
const Span2 = styled.span`
  font-weight: 400;
  letter-spacing: 8px;
  font-size: 14px;
  color: #999;
`;

const ContentContainer = styled.div`
  flex: 1;
  /* border: 1px solid #fff; */
  height: 80%;
  margin-top: 100px;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
`;

const Links = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Link = styled.li`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
  color: #999;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;

const Header = styled.h1`
  font-size: 100px;
  font-weight: 400;
  letter-spacing: 15px;
  margin: 20px 0;
`;

const Description = styled.p`
  font-size: 14px;
  width: 60%;
  line-height: 25px;
  color: #999;
`;

const DistanceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const F1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
const F2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Est = styled.span`
  font-size: 12px;
  color: #888;
  margin: 10px 0;
`;
const Distance = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const Avg = styled.span`
  font-size: 12px;
  color: #888;
  margin: 10px 0;
`;
const Travel = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Destination = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlider = (planet) => {
    if (planet === "moon") {
      setSlideIndex(slideIndex < 0 ? slideIndex + 1 : 0);
    } else {
      if (planet === "mars") {
        setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 1);
      } else {
        if (planet === "europa") {
          setSlideIndex(slideIndex < 1 ? slideIndex + 2 : 2);
        } else {
          if (planet === "titan") {
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
          {destination.map((item) => (
            <Slider>
              <ImgContainer>
                <PlanetText>
                  <Span1>01</Span1>
                  <Span2>PICK YOUR DESTINATION</Span2>
                </PlanetText>
                <ImgPlanet src={item.image} alt="" />
              </ImgContainer>
              <ContentContainer>
                <Content>
                  <Links>
                    <Link
                      style={
                        slideIndex === 0 ? { color: "#fff" } : { color: "#999" }
                      }
                      onClick={() => nextSlider("moon")}
                    >
                      MOON
                    </Link>
                    <Link
                      style={
                        slideIndex === 1 ? { color: "#fff" } : { color: "#999" }
                      }
                      onClick={() => nextSlider("mars")}
                    >
                      MARS
                    </Link>
                    <Link
                      style={
                        slideIndex === 2 ? { color: "#fff" } : { color: "#999" }
                      }
                      onClick={() => nextSlider("europa")}
                    >
                      EUROPA
                    </Link>
                    <Link
                      style={
                        slideIndex === 3 ? { color: "#fff" } : { color: "#999" }
                      }
                      onClick={() => nextSlider("titan")}
                    >
                      TITAN
                    </Link>
                  </Links>
                  <Header>{item.name.toUpperCase()}</Header>
                  <Description>{item.description}</Description>
                  <hr
                    style={{
                      margin: "30px 0",
                      width: "60%",
                      border: ".5px solid #888",
                    }}
                  />
                  <DistanceContainer>
                    <F1>
                      <Avg>AVG. DISTANCE</Avg>
                      <Distance>{item.distance.toUpperCase()}</Distance>
                    </F1>
                    <F2>
                      <Est>EST. TRAVEL TIME</Est>
                      <Travel>{item.travel.toUpperCase()}</Travel>
                    </F2>
                  </DistanceContainer>
                </Content>
              </ContentContainer>
            </Slider>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Destination;
