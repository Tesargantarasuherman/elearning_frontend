import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: #D43E2A;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: Roboto;
  position: sticky;
  z-index: 999;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  width: 100%;
  max-width: 1350px;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    justify-content: left;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
    justify-content: left;
  }
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    justify-self: flex-start;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
  }
`;

export const NavImg = styled.img`
  width: 60px;
  height: auto;
  justify-self: left;
  border: 2px solid #fff;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 100px;
  }

  @media screen and (max-width: 480px) {
    width: 60px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.3rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: right;
  list-style: none;
  text-align: right;
  margin-left: 450px;

  @media screen and (max-width: 1024px) {
    margin-left: 200px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRouter)`
  color: #fff;
  display: flex;
  font-family: Roboto;
  font-weight: 500;
  font-size: 1.4vw;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-right: 3rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #222;
    transition: 0.2s all ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 5px;
    background: #D43E2A;
    white-space: nowrap;
    padding: .7rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: 2px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #222;
        color: #D43E2A;
        border: 2px solid #D43E2A;
    }
`;