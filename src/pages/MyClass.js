import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Menu, Embed, Grid } from "semantic-ui-react";
import Commentar from "../components/Commentar";

export default function MyClass() {
  const [state, setstate] = useState({ activeItem: null });
  const [data_class, setdata_class] = useState([]);
  const [materi, setmateri] = useState({});

  const handleItemClick = (materi, row) => {
    setstate({ activeItem: materi.judul });
    setmateri(materi);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/kursus/1").then((res) => {
      setdata_class(res.data.data.data_kelas);
    });
  }, []);
  const changeVideo = () => {};
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
            <Commentar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
