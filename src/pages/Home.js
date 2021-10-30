import React, { useState } from 'react'
import { Header, Popup, Grid, Rating, Container, Input, Menu, Segment, Card, Icon, Image, Button, Pagination } from 'semantic-ui-react'
import RowClass from '../components/RowClass';

function Home() {

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const renderSwitch = (activeItem) => {
        switch (activeItem) {
            case 'All':
                return (
                    <RowClass />
                );
            case 'Premium':
                return (
                    <RowClass />
                ); case 'Free':
                return (
                    <RowClass />
                ); default:
                return (
                    <RowClass />
                );
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
                <Pagination defaultActivePage={5} totalPages={10} floated="center"/>
            </Container>
        </div>
    )
}

export default Home
