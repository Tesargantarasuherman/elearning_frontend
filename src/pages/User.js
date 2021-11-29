import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { AuthContext } from "../context/AuthContext";

function User() {
  const [state, setstate] = useState([]);
  const { login, setLogin } = useContext(AuthContext);
  
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${login ? login.token : ""}`,
    },
  };
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/profile/${id}`, axiosConfig)
      .then((res) => {
        setstate(res.data.data[0]);
      });
  }, []);
  return (
    <div className="container my-2">
      <Form>
        <Form.Field>
          <label>Nama</label>
          <input value={state.nama} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input value={state.email} />
        </Form.Field>
        <Button type="submit">Ubah Profile</Button>
      </Form>
    </div>
  );
}

export default User;
