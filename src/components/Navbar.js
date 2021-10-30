import React, { useContext } from 'react'
import { Container, Menu, Segment, Icon } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContex'

function Navbar() {
  const { value, setValue } = useContext(CartContext)

  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <Segment color={'red'} inverted>
      <Container>
        <Menu inverted pointing secondary>
          <Link
            to="/">
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
          </Link>
          <Link
            to="blog">
            <Menu.Item
              name='blog'
              active={activeItem === 'blog'}
              onClick={handleItemClick}
            />
          </Link>
          <Menu.Item
            name='keranjang'
            active={activeItem === 'keranjang'}
            onClick={handleItemClick}
          >
            <Icon name="shopping basket" /> {value}
          </Menu.Item>
          <Menu.Menu position="right">
            <Link
              to="login">
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={handleItemClick}
                floated="right"
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  )
}

export default Navbar
