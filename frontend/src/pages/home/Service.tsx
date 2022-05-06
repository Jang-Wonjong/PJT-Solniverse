import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo, Main, Menu } from "./Home";

export const Service = () => {
  return (
    <Main>
      <Container>
        <Logo>
          <img src="" alt="" />
        </Logo>
        <Menu>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/service"}>Service</Link>
            </li>
          </ul>
        </Menu>
      </Container>
    </Main>
  );
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0%;
`;