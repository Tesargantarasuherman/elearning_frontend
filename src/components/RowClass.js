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

const RowClass = (props) => {
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
                    {props.text_button}
                  </a>
                </div>
              </div>
            </div>


            // <Grid.Column>
            //   <Popup
            //     position="right center"
            //     trigger={
            //       <Card>
            //         <div style={labelClass}>
            //           <Label as="a" color="red" tag>
            //             {Class.tipe_kursus}
            //           </Label>
            //         </div>
            //         <Icon name="play circle" size="huge" style={iconPlay} />
            //         <Image
            //           src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            //           wrapped
            //           ui={false}
            //         />
            //         <Card.Content>
            //           {Class.harga ? (
            //             <Label as="a" color="red" ribbon="left">
            //               {`Rp. ${Class.harga}`}
            //             </Label>
            //           ) : (
            //             ""
            //           )}
            //           <Divider horizontal />
            //           <Card.Header>{Class.nama_kursus}</Card.Header>
            //           <Card.Meta>
            //             <Rating
            //               maxRating={5}
            //               defaultRating={3}
            //               icon="star"
            //               size="mini"
            //             />
            //           </Card.Meta>
            //           <Card.Description>
            //           {Class.nama_instruktur}
            //           </Card.Description>
            //         </Card.Content>
            //         <Card.Content>
            //           <Button
            //             onClick={() =>
            //               history.push(`/${props.url}/${Class.id_kursus}`)
            //             }
            //           >
            //             {props.text_button}
            //           </Button>
            //         </Card.Content>
            //       </Card>
            //     }
            //     flowing
            //     hoverable
            //   >
            //     {/* <Grid centered divided columns={1}>
            //       <Grid.Column textAlign="center">
            //         <Header as="h4">Benefit</Header>
            //         <p>
            //           <b>1</b> loremipsum
            //         </p>
            //         <Button onClick={() => setValue(value + 1)}>
            //           <Icon name="shopping basket" />
            //           Tambah Ke Keranjang
            //         </Button>
            //       </Grid.Column>
            //     </Grid> */}
            //   </Popup>
            // </Grid.Column>
          );
        })}
      </div>
      {/* </Grid.Row>
      </Grid> */}
    </>
  );
};

export default RowClass;
