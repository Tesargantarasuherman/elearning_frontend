import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Header, Popup, Grid, Rating, Container, Input, Menu, Segment, Card, Icon, Image, Button, Pagination } from 'semantic-ui-react'
import RowClass from '../components/RowClass';
import BaseUrl from '../utils/BaseUrl';

function Home() {

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const [dataClass,setDataClass]=useState([])

    useEffect(() => {
        axios.get(`${BaseUrl}kursus`).then(res=>{
            setDataClass(res.data.data)
        })
    }, []);

    const renderSwitch = (activeItem) => {
        switch (activeItem) {
            case 'All':
                return (
                    <RowClass dataClass={dataClass} url={`kursus`} text_button={'Lihat Detail'} />
                );
            case 'Premium':
                return (
                    <RowClass dataClass={dataClass} url={`kursus`} text_button={'Lihat Detail'}/>
                ); case 'Free':
                return (
                    <RowClass dataClass={dataClass} url={`kursus`} text_button={'Lihat Detail'}/>
                ); default:
                return (
                    <RowClass dataClass={dataClass} url={`kursus`} text_button={'Lihat Detail'}/>
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
