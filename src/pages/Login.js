import axios from 'axios';
import React, { useState } from 'react'
import { Container, Image, Button, Form, Checkbox, Loader, Segment, Divider, Grid, Message, Header, Icon, Modal } from 'semantic-ui-react'

function Login() {
    const [open, setOpen] = React.useState(false)
    const [formLogin, setFormLogin] = useState({ email:'',password:null });

    const handleChangeFormLogin = (e) => {
        const { name, value } = e.target

        setFormLogin({
            ...formLogin,
            [name]: value
        },console.log(formLogin))
    }
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
      };
    const handleLogin =()=>{
        axios.post(`http://localhost:8000/api/v1/login`,formLogin,axiosConfig).then(res=>{
            localStorage.setItem('token',res.data.token)
        })
    }
    return (
        <>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={8} computer={8}>
                            <h1>Login</h1>
                            <Form onSubmit={handleLogin}>
                                <Form.Field>
                                    <label>Email</label>
                                    <input placeholder='Email' name="email" onChange={handleChangeFormLogin} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder='Password' type="password" name="password" onChange={handleChangeFormLogin} />
                                </Form.Field>
                                <Button.Group>
                                    <Button>Login</Button>
                                    <Button.Or />
                                    <Button
                                        onClick={() => setOpen(true)}
                                    >
                                        Register
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
            {/* Modal Register */}
            <Modal
                closeIcon
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Header icon='user' content='Register' />
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
                            <label>Password Confirm</label>
                            <input placeholder='Password Confirm' />
                        </Form.Field>
                        <Button.Group>
                            <Button>Register</Button>
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