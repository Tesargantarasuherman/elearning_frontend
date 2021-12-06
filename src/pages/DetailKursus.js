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
      .post(`${BaseUrl}add-transaksi/${kursus.user_id}/${kursus.kursus_id}`, axiosConfig)
      .then((res) => {
        toast.success("Kelas Berhasil Ditambahkan");
      })
      .catch((err) => {
        console.log(axiosConfig)
        if (isLogin != null) {
          toast.error("Kelas Sudah Di Ambil!");
          setTimeout(() => {
            history.push(`/profile`);
          }, 2000);
        } else {
          toast.error("Anda Belum Login!");
          history.push("/login");
        }
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-2">Checkout Kelas</h1>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://class.buildwithangga.com/storage/assets/thumbnails/BWALP3D%201.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{state.nama_kursus}</h5>
              <p className="card-text">{state.tipe}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Detail Pembayaran</h2>
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Harga
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      value={state.harga}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Kode Promo
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Masukkan Kode Promo"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="card-title">Total Harga</h4>
                  </div>
                  <div>
                    <h4 className="card-title">{state.harga}</h4>
                  </div>
                </div>
                <hr />
                <div>
                  <img
                    src="https://dplk.bni.co.id/theme/front/images/logo/BNI-logo.png"
                    alt=""
                    width={100}
                  />
                  <h4 className="card-title">AN. Lorem Ipspum</h4>
                  <h4 className="card-title">1230123</h4>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={tambahKursus}>Konfirmasi Pembayaran</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKursus;
