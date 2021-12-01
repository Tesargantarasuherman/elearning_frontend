import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { Menu, Embed, Grid, Button } from "semantic-ui-react";
import Commentar from "../components/Commentar";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import BaseUrl from "../utils/BaseUrl";
import axiosConfig from "../utils/Config";
const defaultData = {
  status: "ok",
  totalResult: 10,
  articles: [],
};
const endpoint = "http://localhost:8000/api/v1/komentar/1/1/1";
let rows = [];

export default function MyClass() {
  const [state, setstate] = useState({ activeItem: null });
  const [data_class, setdata_class] = useState([]);
  const [materi, setmateri] = useState({});
  const { login, setLogin } = useContext(AuthContext);
  const [isiKomentar, setIsiKomentar] = useState([]);

  const [stateData, setstateData] = useState(defaultData);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
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
    setstate({ activeItem: _materi.judul });
    setmateri(_materi);
    getKomentar(_materi);
  };

  let { id } = useParams();

  useEffect(() => {
    getKursus()
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoint}?page=${page}`);
        const result = await response.json();
        setstateData((current) => {
          return {
            ...result,
            articles: [...current.articles, ...result.data.data],
            totalResult: result.data.total,
            status: result.status,
          };
        });
        if (result.status !== "ok") {
          throw new Error("error");
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [page, isRefresh]);

  const getKursus = () => {
    axios
      .get(`${BaseUrl}kursus/${id}/${login.data.id}`, axiosConfig)
      .then((res) => {
        console.log(res);
        setdata_class(res.data.data.data_kelas);
      });
  };
  const getKomentar = (_materi) => {
    axios
      .get(`${BaseUrl}komentar/${id}/${_materi.kelas_id}/${_materi.id}`)
      .then((res) => {
        setIsiKomentar(res.data.data.data);
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
    console.log(formKomentar);
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
    getKomentar(materi);
  };
  const paginateKomentar = (lengthMateri) => {
    for (let i = 1; i >= lengthMateri; i++) {
      this.rows.push(<span class="fa fa-star"></span>);
    }
    console.log(rows);
  };
  return (
    <div className="container">
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column width={4}>
            <Menu vertical>
              <>
                {data_class.map((clas, row) => {
                  return (
                    <Menu.Item>
                      <Menu.Header>{clas.judul}</Menu.Header>
                      {clas.materi.map((materi, row) => {
                        return (
                          <Menu.Menu>
                            <Menu.Item
                              name={materi.judul}
                              active={state.activeItem === `${materi.judul}`}
                              onClick={() => handleItemClick(materi, row)}
                            />
                          </Menu.Menu>
                        );
                      })}
                    </Menu.Item>
                  );
                })}
              </>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <h1>{materi.judul}</h1>
            <Embed
              id={materi.link_video}
              placeholder="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
              source="youtube"
            />
            <h3>{materi.deskripsi}</h3>
            <Commentar
              isiKomentar={stateData.articles}
              handleFormKomentar={handleFormKomentar}
              submitKomentar={submitKomentar}
              formKomentar={formKomentar}
              lengthKomentar={stateData.articles.length}
              totalResult={stateData.totalResult}
              setPage={setPage}
              isLoading={isLoading}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
