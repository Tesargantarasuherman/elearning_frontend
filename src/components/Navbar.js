import React from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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
          <Menu.Item
            name='class'
            active={activeItem === 'class'}
            onClick={handleItemClick}
          />
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
