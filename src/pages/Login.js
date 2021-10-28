import React from 'react'
import { Container,Image, Button, Form, Loader, Segment, Divider, Grid, Message, Header, Icon, Modal } from 'semantic-ui-react'

const Login = () => {
    return (
        <>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </>
    )
}
export default Login