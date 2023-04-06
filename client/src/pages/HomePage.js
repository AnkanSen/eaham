import React from "react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Three from '../frontend components/Three'
import ECard2 from "../frontend components/ECard2"
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


const HomePage = () => {
  const Navigate = useNavigate();
  const [currUserData, setCurrUserData] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        Navigate("/login");
      } else {
        axios
          .get("http://localhost:4000/getCurrUserData", {
            params: { currUserEmail: user.email },
          })
          .then((res) => {
            setCurrUserData(res.data);
          });
      }
    }
    //after logginf out
    else {
      Navigate("/login");
    }
  }, [Navigate]);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };
  const dashboardHandler = () => {
    Navigate("/userDashboard");
  };
  return (
    <div>
    <Section>
    <Container>
    <Left>
    <Title>EA & HAM</Title>
    </Left>
    <Three/>
    </Container>
    </Section>
    <Section>
    <Containers>
    <ECard2/>
    <ECard2/>
    <ECard2/>
    </Containers>
    </Section>
    
      {/* <button onClick={logoutHandler}>Logout</button> */}
      {/* 
      <button onClick={dashboardHandler}>DashBoard</button>
      <button onClick={() => Navigate("/events")}>Events</button>
      <button onClick={() => Navigate("/team")}>Team</button> */}
    </div>
  );
};

export default HomePage;
