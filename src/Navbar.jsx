import React from "react";
import styled from "styled-components";
import logo from "./images/shared/logo.svg";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: transparent;
  position: relative;
  z-index: 2;
  margin-top: 30px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 50px;
`;

const Line = styled.hr`
  width: 30%;
  border: 0.5px solid #99999949;
  position: absolute;
  top: 50%;
  left: 12%;
`;

const Img = styled.img`
  width: 40px;
`;

const Right = styled.div`
  width: 60%;
`;
const GlassBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(1px);
  padding: 10px 0;
  height: 70px;
  width: 100%;
  color: #fff;
`;

const GlassLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 0 40px;
  font-size: 12px;
  letter-spacing: 3px;
`;

const GlassLink = styled.div`
  margin: 0 8px;
  cursor: pointer;
`;

const Number = styled.div`
  font-weight: 900;
`;

function Navbar() {
  return (
    <Container>
      <Left>
        <Img src={logo} />
        <Line />
      </Left>
      <Right>
        <GlassBg>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "all 0.5s ease-in-out",
            }}
            to="/"
          >
            <GlassLinks>
              <Number>00</Number>
              <GlassLink>HOME</GlassLink>
            </GlassLinks>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "all 0.5s ease-in-out",
            }}
            to="/destination"
          >
            <GlassLinks>
              <Number>01</Number>
              <GlassLink>DESTINATION</GlassLink>
            </GlassLinks>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "all 0.5s ease-in-out",
            }}
            to="/crew"
          >
            <GlassLinks>
              <Number>02</Number>
              <GlassLink>CREW</GlassLink>
            </GlassLinks>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
              transition: "all 0.5s ease-in-out",
            }}
            to="/technology"
          >
            <GlassLinks>
              <Number>03</Number>
              <GlassLink>TECHNOLOGY</GlassLink>
            </GlassLinks>
          </Link>
        </GlassBg>
      </Right>
    </Container>
  );
}

export default Navbar;
