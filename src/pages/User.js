import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { AuthContext } from "../context/AuthContext";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";

function User() {
  const [state, setstate] = useState([]);
  const { login, setLogin } = useContext(AuthContext);

  let { id } = useParams();
  useEffect(() => {
    axios.get(`${BaseUrl}profile/${id}`, axiosConfig).then((res) => {
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
