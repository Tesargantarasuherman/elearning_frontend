import React from 'react'
import { Container, Image, Button, Form, Checkbox, Loader, Segment, Divider, Grid, Message, Header, Icon, Modal } from 'semantic-ui-react'

const Login = () => {
    const [open, setOpen] = React.useState(false)
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
                                <Button.Group>
                                    <Button>Login</Button>
                                    <Button.Or />
                                    <Button
                                        onClick={() => setOpen(true)}
                                    >
                                        Registrasi
                                    </Button>
                                </Button.Group>
                            </Form>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            <Image src='https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            {/* Modal Registrasi */}
            <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header icon='user' content='Registrasi' />
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Nama</label>
                            <input placeholder='Nama' />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' />
                        </Form.Field>
                        <Form.Field>
                            <label>Konfirmasi Password</label>
                            <input placeholder='Konfirmasi Password' />
                        </Form.Field>
                        <Button.Group>
                            <Button>Registrasi</Button>
                            <Button.Or />
                            <Button
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Button>
                        </Button.Group>
                    </Form>
                </Modal.Content>
            </Modal>
        </>
    )
}
export default Login