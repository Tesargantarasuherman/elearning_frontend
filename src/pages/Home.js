import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  Menu,
  Segment,
  Pagination,
} from "semantic-ui-react";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import LearningPath from "../components/LearningPath/LearningPath";
import RowClass from "../components/RowClass";
import BaseUrl from "../utils/BaseUrl";

function Home() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const [dataClass, setDataClass] = useState([]);

  useEffect(() => {
    axios.get(`${BaseUrl}kursus`).then((res) => {
      setDataClass(res.data.data);
    });
  }, []);

  const renderSwitch = (activeItem) => {
    switch (activeItem) {
      case "All":
        return (
          <RowClass
            dataClass={dataClass}
            url={`kursus`}
            text_button={"Detail"}
          />
        );
      case "Premium":
        return (
          <RowClass
            dataClass={dataClass}
            url={`kursus`}
            text_button={"Detail"}
          />
        );
      case "Free":
        return (
          <RowClass
            dataClass={dataClass}
            url={`kursus`}
            text_button={"Detail"}
          />
        );
      default:
        return (
          <RowClass
            dataClass={dataClass}
            url={`kursus`}
            text_button={"Detail"}
          />
        );
    }
  };
  return (
    <>
      <Jumbotron />
      <HomeInfo />
      <LearningPath />
      <Container>
        {/* <Segment>{renderSwitch(activeItem)}</Segment> */}
      </Container>
    </>
  );
}

export default Home;
