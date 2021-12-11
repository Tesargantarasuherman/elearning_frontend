import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
} from "./NavbarElements";
import logo from "../../images/logo-ureshii.png";
// import Pop from "../FormPopUp";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavImg src={logo} alt="Keycode Solutions Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeStyle={{ color: "#F05882" }} to="portfolio">
                Kelas
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks activeStyle={{ color: "#F05882" }} to="blog">
                Blog
              </NavLinks>
            </NavItem>
            <NavBtn>
              {/* <Pop /> */}
              <NavBtnLink to="/signin">Indonesia</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;