import React, { Suspense } from "react";
import Three from "../components/Three";
import styled from "styled-components";
import Card from "../components/Card";
const Section=styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 90%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
`;
const Containers = styled.div`
height: 100%;
scroll-snap-align: center;

width: 70%;
display:grid;
justify-content: center;

@media only screen and (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
}
`;

const Title = styled.h1`
  font-size: 74px;
  display: flex;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

function Home() {
  return (
    <>
    <Section>
    <Container>
    <Left>
    <Title>CNC</Title>
    </Left>
    <Three/>
    </Container>
    </Section>
    <Section>
    <Containers>
    <Card/>
    <Card/> 
    <Card/>
    </Containers>
    </Section>
    </>
  );
}

export default Home;
