import React, { useContext } from "react";
import { Container, Menu, Segment, Icon, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { CartContext } from "../context/CartContex";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";
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
          {login ? (
            <Menu.Item
              name={`kursus-saya/${login ? login.data.id : null}`}
              active={activeItem === `Kursus Saya`}
              onClick={handleItemClick}
            >
              Kursus Saya
            </Menu.Item>
          ) : (
            ""
          )}
          <Menu.Item
            name="keranjang"
            active={activeItem === "keranjang"}
            onClick={handleItemClick}
          >
            <Icon name="shopping basket" /> {value}
          </Menu.Item>
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
                  name={`user/${login.data.id}`}
                  active={activeItem === `${login.data.id}`}
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
