import React from 'react'
import { Container, Image, Button, Form, Checkbox, Loader, Segment, Divider, Grid, Message, Header, Icon, Modal } from 'semantic-ui-react'

const Login = () => {
    return (
        <>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            <h1>Login</h1>
                            <Form>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder='Password' />
                                </Form.Field>
                                <Button type='submit'>Login</Button>
                                <p>Belum Punya Akun ? Register</p>
                            </Form>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            <Image src='https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </>
    )
}
export default Login