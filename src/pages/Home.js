import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Header, Popup, Grid, Rating, Container, Input, Menu, Segment, Card, Icon, Image, Button, Pagination } from 'semantic-ui-react'
import RowClass from '../components/RowClass';

function Home() {

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const [dataClass,setDataClass]=useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/kursus').then(res=>{
            setDataClass(res.data.data)
        })
    })

    const renderSwitch = (activeItem) => {
        switch (activeItem) {
            case 'All':
                return (
                    <RowClass dataClass={dataClass} />
                );
            case 'Premium':
                return (
                    <RowClass dataClass={dataClass} />
                ); case 'Free':
                return (
                    <RowClass dataClass={dataClass} />
                ); default:
                return (
                    <RowClass dataClass={dataClass} />
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
