import React, { useContext } from "react";
import {
  Popup,
  Grid,
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
import { useTranslation } from 'react-i18next';

const RowClass = (props) => {
  const { t, i18n } = useTranslation();
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

  return (
    <>
      <div className="row">
        {/* <Grid columns={3} divided>
        <Grid.Row> */}
        {props.dataClass.map((Class) => {
          return (
            <div className="col-md-3">
              <div className="card card-course">
                <div className="type-course">
                  {Class.tipe_kursus}
                </div>
                <div className="rating">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <img className="card-img-top" src="https://www.buildwithangga.com/storage/assets/thumbnails/bwaportofolio.jpeg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{Class.nama_kursus} </h5>
                  <p className="card-text">
                    {Class.harga ? `Rp. ${Class.harga}` :null}
                  </p>
                  <a href="#" className="btn btn-danger" onClick={() =>
                    history.push(`/${props.url}/${Class.id_kursus}`)
                  }
                  >
                    
                    {props.text_button == "Detail" ? <> {t("Card.1")}</> : props.text_button}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default RowClass;
