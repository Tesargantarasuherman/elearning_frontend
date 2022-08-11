import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Input,
  Menu,
  Segment,
  Pagination,
} from "semantic-ui-react";
import FAQ from "../components/FAQ/FAQ";
import HomeBenefit from "../components/HomeBenefit/HomeBenefit";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import LearningPath from "../components/LearningPath/LearningPath";
import RowClass from "../components/RowClass";
import BaseUrl from "../utils/BaseUrl";
import { connect } from 'react-redux'

export const Home = (props) => {
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
        <HomeBenefit/>
        <FAQ />
        <Container>
          {/* <Segment>{renderSwitch(activeItem)}</Segment> */}
        </Container>
      </>
    );

}

const mapStateToProps = (state) => ({
  isSignedIn : state.auth.isSignedIn,
  data_user : state.auth?.data_user?.data?.data,
  token : state.auth?.data_user?.data?.token
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

