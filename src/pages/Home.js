import React, { useState } from 'react'
import { Container, Input, Menu, Segment } from 'semantic-ui-react'

function Home() {

      
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name)
    const renderSwitch =(activeItem)=> {
        switch(activeItem) {
          case 'All':
            return 'All';
          case 'Premium':
            return 'Premium';
          case 'Free':
            return 'Free';
          default:
            return 'All';
        }
      }
    return (
        <div>
            <Container>
                <Menu pointing>
                    <Menu.Item
                        name='All'
                        active={activeItem === 'All'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Premium'
                        active={activeItem === 'Premium'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Free'
                        active={activeItem === 'Free'}
                        onClick={handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment>
                    {renderSwitch(activeItem)}
                </Segment>
            </Container>
        </div>
    )
}

export default Home
