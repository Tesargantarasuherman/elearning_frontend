import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { Menu, Embed, Grid, Button } from "semantic-ui-react";
import Commentar from "../components/Commentar";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";

export default function MyClass() {
  const defaultData = {
    status: "ok",
    toResult: 0,
    totalResult: 0,
    articles: [],
  };
  const [state, setstate] = useState({ activeItem: null });
  const [data_class, setdata_class] = useState([]);
  const [materi, setmateri] = useState({});
  const { login, setLogin } = useContext(AuthContext);

  const [stateData, setstateData] = useState(defaultData);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isRefresh, setRefresh] = useState(false);

  const [formKomentar, setFormKomentar] = useState({
    user_id: "",
    materi_id: "",
    kursus_id: "",
    kelas_id: "",
    isi_komentar: "",
  });
  const handleRefresh = () => {
    setstateData(defaultData);
    setPage(1);
    setLoading(false);
    setRefresh(false);
  };

  const handleItemClick = (_materi, row) => {
    handleRefresh();
    setstate({ activeItem: _materi.judul });
    setmateri(_materi);
  };

  let { id } = useParams();

  useEffect(() => {
    getKursus();
    getKomentar();
  }, [page, isRefresh, materi]);

  const getKursus = () => {
    axios
      .get(`${BaseUrl}kursus/${id}/${login.data.id}`, axiosConfig)
      .then((res) => {
        setdata_class(res.data.data.data_kelas);
      });
  };
  const getKomentar = () => {
    axios
      .get(
        `${BaseUrl}komentar/${id}/${materi.kelas_id}/${materi.id}?page=${page}`
      )
      .then((result) => {
        setstateData((current) => {
          return {
            ...result,
            articles: [...result.data.data.data],
            toResult: result.data.data.to,
            totalResult: result.data.data.total,
            status: result.status,
          };
        });
      });
  };
  const handleFormKomentar = (e) => {
    const { name, value } = e.target;

    setFormKomentar({
      ...formKomentar,
      [name]: value,
      user_id: `${login.data.id}`,
      materi_id: `${materi.id}`,
      kursus_id: id,
      kelas_id: `${materi.kelas_id}`,
    });
  };
  const submitKomentar = () => {
    axios
      .post(`${BaseUrl}add-komentar`, formKomentar, axiosConfig)
      .then((res) => {
        setFormKomentar({
          ...formKomentar,
          isi_komentar: "",
          user_id: "",
          materi_id: "",
          kursus_id: "",
          kelas_id: "",
        });
      });
    getKomentar();
  };


  return (
    <div >
      <div className="row">
        <div className="col-md-2">
          {/* menu */}
          <div className="card menu-course">
            <div className="card-body">
              <div className="pull-right button-menu">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
              <div className="d-flex flex-column">
                {data_class.map((clas, row) => {
                  return (
                    <>
                      <div className="p-2">
                        <span className="font-weight-bold">{clas.judul}</span>
                      </div>
                      {clas.materi.map((materi, row) => {
                        return (
                          <div className="p-2">
                            <button className="button-list-course" onClick={() => handleItemClick(materi, row)}>
                              {materi.judul}
                            </button>
                          </div>
                        )
                      })}
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h1>{materi.judul}</h1>
              <iframe
                width={"100%"}
                height={500}
                src={`https://www.youtube.com/embed/${materi.link_video}`}

              ></iframe>
              <Commentar
                isiKomentar={stateData.articles}
                handleFormKomentar={handleFormKomentar}
                submitKomentar={submitKomentar}
                formKomentar={formKomentar}
                lengthKomentar={stateData.articles.length}
                totalResult={stateData.totalResult}
                toResult={stateData.toResult}
                page={page}
                setPage={setPage}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
