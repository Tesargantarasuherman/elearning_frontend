import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Image,
  Button,
  Form,
  Checkbox,
  Loader,
  Segment,
  Divider,
  Grid,
  Message,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [open, setOpen] = React.useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formLogin, setFormLogin] = useState({ email: "", password: null });
  const [formRegister, setFormRegister] = useState({});
  const { login, setLogin } = useContext(AuthContext);

  const history = useHistory();

  const handleChangeFormLogin = (e) => {
    const { name, value } = e.target;

    setFormLogin(
      {
        ...formLogin,
        [name]: value,
      },
      console.log(formLogin)
    );
  };
  const handleChangeFormRegister = (e) => {
    const { name, value } = e.target;

    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleRegister = () => {
    axios
      .post(`http://localhost:8000/api/v1/register`, formRegister, axiosConfig)
      .then((res) => {
        console.log(res);
      });
  };
  const handleLogin = () => {
    setIsSubmiting(true);

    axios
      .post(`http://localhost:8000/api/v1/login`, formLogin, axiosConfig)
      .then((res) => {
        console.log(res);
        localStorage.setItem("data_user", JSON.stringify(res.data.data));
        setLogin(JSON.parse(localStorage.getItem("data_user")));
        setIsError(false);
        history.push("/");
      })
      .catch((err) => {
        setIsSubmiting(false);
        setIsError(true);
      });
  };

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
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={handleChangeFormLogin}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChangeFormLogin}
                  />
                </Form.Field>
                {isError ? <div>Nama Atau Password Salah</div> : ""}
                <Button.Group>
                  {isSubmiting ? (
                    <Button loading>Loading</Button>
                  ) : (
                    <Button>Login</Button>
                  )}
                  <Button.Or />
                  <Button onClick={() => setOpen(true)}>Register</Button>
                </Button.Group>
              </Form>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Image src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg" />
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
        <Header icon="user" content="Register" />
        <Modal.Content>
          <Form onSubmit={handleRegister}>
            <Form.Field>
              <label>Nama</label>
              <input
                placeholder="Nama"
                name="nama"
                onChange={handleChangeFormRegister}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChangeFormRegister}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChangeFormRegister}
              />
            </Form.Field>
            <Form.Field>
              <label>Password Confirm</label>
              <input
                placeholder="Password Confirm"
                type="password"
                name="password_confirmation"
                onChange={handleChangeFormRegister}
              />
            </Form.Field>
            <Button.Group>
              <Button>Register</Button>
              <Button.Or />
              <Button onClick={() => setOpen(false)}>Login</Button>
            </Button.Group>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
}
export default Login;
