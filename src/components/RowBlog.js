import React from 'react'
import { Container, Image, Item } from 'semantic-ui-react'

function RowBlog() {
    return (
        <Container>
            <Item.Group>
                <Item>
                    <Item.Image size='small' src='https://images.unsplash.com/photo-1568905096967-86c59329c561?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80' />
                    <Item.Content>
                        <Item.Header as='a'>Judul</Item.Header>
                        <Item.Meta>30 Okt 2021</Item.Meta>
                        <Item.Extra>lorem ipsum</Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image size='small' src='https://images.unsplash.com/photo-1571235369738-02ebdc5191ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
                    <Item.Content>
                        <Item.Header as='a'>Header</Item.Header>
                        <Item.Meta>Description</Item.Meta>
 
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Container>
    )
}

export default RowBlog
