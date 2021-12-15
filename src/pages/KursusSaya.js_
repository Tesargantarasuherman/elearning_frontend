import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import RowClass from "../components/RowClass";
import { useParams } from "react-router-dom";
import BaseUrl from "../utils/BaseUrl";
import { AuthContext } from "../context/AuthContext";

function KursusSaya() {
  const { login, setLogin } = useContext(AuthContext);
  const [active, setactive] = useState({ active: "kurang" });
  let id = login.data.id;

  const render = (active) => {
    console.log(active)
    if (active == 'kurang') {
      return (<div>hello</div>)
    }
    // switch (active) {
    //   case 'profile': return (
    //     <RowClass dataMenunggu={dataMenunggu} url={'my-class'} text_button={'Mulai Belajar'} />
    //   )
    //   case 'kurang': return (
    //     <div>hello</div>
    //   )
    //   default:
    //     return( <div>hello</div>)
    // }
  }
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${login ? login.token : ""}`,
    },
  };
  
  const [dataMenunggu, setDataMenunggu] = useState([]);
  const [dataAktif, setDataAktif] = useState([]);
  useEffect(() => {
    render(active.active)
    axios.get(`${BaseUrl}kursus-saya/${id}`).then((res) => {
      console.log(res.data.data)
      setDataAktif(res.data.data);
    });
    axios.get(`${BaseUrl}transaksi/${id}`).then((res) => {
      console.log(res.data.data.data_transaksi)
      setDataMenunggu(res.data.data.data_transaksi);
    });
  }, []);

  return (
    <div >
      <div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Menunggu Konfirmasi</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Aktif</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="row">
              {
                dataMenunggu.map(clas => {
                  return (
                    <div className="col-md-3">
                      <div className="card">
                        <img className="card-img-top" src="https://www.buildwithangga.com/storage/assets/thumbnails/thumbnail%20kelas%20sketch.png" alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">{clas.nama}</h5>
                          <a href="#" className="btn btn-light" disabled>Menunggu Konfirmasi</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><RowClass dataClass={dataAktif} url={'my-class'} text_button={'Mulai Belajar'} /></div>
        </div>
      </div>
    </div>
  );
}

export default KursusSaya;
