import React from 'react'
import RowBlog from '../components/RowBlog'
import { Container, Input, Menu, Segment} from 'semantic-ui-react'
import { useState } from 'react/cjs/react.development';

function Blog() {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    const renderSwitch = (activeItem) => {
        switch (activeItem) {
            case 'Recent':
                return (
                    <RowBlog />
                );
            case 'Recomended For You':
                return (
                    <RowBlog />
                ); case 'Free':
            default:
                return (
                    <RowBlog />
                );
        }
    }
    return (
        <div>
            <Container>
                <Menu pointing>
                    <Menu.Item
                        name='Recent'
                        active={activeItem === 'Recent'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Recomended For You'
                        active={activeItem === 'Recomended For You'}
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

export default Blog
