import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Rating,
  Card,
  Icon,
  Image,
  Button,
  Label,
  Divider,
} from "semantic-ui-react";
import { CartContext } from "../context/CartContex";
import { useHistory } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";

function DetailKursus() {
  const history = useHistory();
  const { value, setValue } = useContext(CartContext);
  const iconPlay = {
    position: "absolute",
    left: "35%",
    top: "20%",
    zIndex: "99",
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  };
  const labelClass = {
    position: "absolute",
    top: "2%",
    zIndex: "99",
    "&:hover": {
      cursor: "pointer",
    },
  };
  const [state, setstate] = useState([]);
  let { id } = useParams();
  const { login, setLogin } = useContext(AuthContext);
  const [kursus, setkursus] = useState({
    user_id: `${login ? login.data.id : null}`,
    kursus_id: id,
  });

  useEffect(() => {
    axios.get(`${BaseUrl}kursus/${id}`).then((res) => {
      setstate(res.data.data[0]);
    });
    console.log(state);
  }, []);
  const tambahKursus = () => {
    let isLogin = login ? login.data.id : null;
    axios
      .post(`${BaseUrl}add-kursus-saya`, kursus, axiosConfig)
      .then((res) => {
        toast.success("Kelas Berhasil Ditambahkan");
      })
      .catch((err) => {
        if (isLogin != null) {
          toast.error("Kelas Sudah Di Ambil!");
        }
        else{
          toast.error("Anda Belum Login!");
          history.push("/login");
        }
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <Card>
        <div style={labelClass}>
          <Label as="a" color="red" tag>
            {state.tipe_kursus}
          </Label>
        </div>
        <Icon name="play circle" size="huge" style={iconPlay} />
        <Image
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Label as="a" color="red" ribbon="left">
            Rp.{state.harga}
          </Label>
          <Divider horizontal />
          <Card.Header>{state.nama_kursus}</Card.Header>
          <Card.Meta>
            <Rating maxRating={5} defaultRating={3} icon="star" size="mini" />
          </Card.Meta>
          <Card.Description>{state.nama_instruktur}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Button onClick={tambahKursus}>Ambil Sekarang</Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default DetailKursus;
