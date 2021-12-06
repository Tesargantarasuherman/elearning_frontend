import React, { useContext } from "react";
import { Container, Menu, Segment, Icon, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { CartContext } from "../context/CartContex";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";
// import '../Styles/Navbar.css'

const Navbar = (props) => {
  const { value, setValue } = useContext(CartContext);
  const { login, setLogin } = useContext(AuthContext);
  const history = useHistory();

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) =>
    setActiveItem(history.push(`/${name}`));

  return (
    <Segment color={"red"} inverted>
      <Container>
        <Menu inverted pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="blog">
            <Menu.Item
              name="blog"
              active={activeItem === "blog"}
              onClick={handleItemClick}
            />
          </Link>
          <Menu.Menu position="right">
            {!login ? (
              <Link to="login">
                <Menu.Item
                  name="login"
                  active={activeItem === "login"}
                  onClick={handleItemClick}
                  floated="right"
                />
              </Link>
            ) : (
              <>
                <Menu.Item
                  name={`profile`}
                  active={activeItem === `${login.data.nama}`}
                  onClick={handleItemClick}
                  floated="right"
                />
                <Button content="Logout" primary onClick={props.Logout} />
              </>
            )}
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
};

export default Navbar;
