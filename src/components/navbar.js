import React from 'react';
import styled, {css} from "styled-components/macro";
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: Flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: wheat;
`;

const Navlink = css`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled(Link)`
 ${Navlink}
 font-style: italix;
`;

const MenuBars = styled(FaBars)`
    display : none;
  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 45%);
  }
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
    ${Navlink}
`;

const NavBtn = styled.div`
  display: flex;
  align-item: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const navbar = ({toggle}) => {
    return (
      <Nav>
        <Logo to="/">Dream-Decor</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <Button to="/contact" primary="true">
            Contact
          </Button>
        </NavBtn>
      </Nav>
    );
}

export default navbar;
