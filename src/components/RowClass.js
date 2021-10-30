import React, { useContext } from 'react'
import { Header, Popup, Grid, Rating, Container, Input, Menu, Segment, Card, Icon, Image, Button } from 'semantic-ui-react'
import { CartContext } from '../context/CartContex'

const RowClass = () => {
    const {value,setValue} = useContext(CartContext)
    const iconPlay = {
        position: 'absolute',
        left: '35%',
        top: '20%',
        zIndex: '99',
        color: 'white',
        '&:hover': {
            cursor: 'pointer'
        }
    }
    return (
        <Popup position="right center" trigger={<Card>
            <Icon name='play circle' size="huge" style={iconPlay} />
            <Image src='https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta >
                    <Rating maxRating={5} defaultRating={3} icon='star' size='mini' />
                </Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content >
                <Button disabled>
                    Rp. 200,000
                </Button>
            </Card.Content>
        </Card>} flowing hoverable>
            <Grid centered divided columns={1}>
                <Grid.Column textAlign='center'>
                    <Header as='h4'>Benefit</Header>
                    <p>
                        <b>1</b> loremipsum
                    </p>
                    <Button onClick={()=>setValue(value + 1)}><Icon name="shopping basket" />Tambah Ke Keranjang</Button>
                </Grid.Column>
            </Grid>
        </Popup>
    )
}

export default RowClass
