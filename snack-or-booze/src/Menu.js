import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
// import CountContext from "./countContext";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";



function FoodMenu({ items, urlPrefix, title, description }) {
  // const [foodNum, setFoodNum] = useState(0);
  // //setFoodNum(foodNum =+ 1);
  
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            {description}
          </CardText>
          {/* <CountContext.Provider value={foodNum}>  */}
            <ListGroup>
              {items.map(item => (
                <Link to={`/${urlPrefix}/${item.id}`} key={item.id}>
                  <ListGroupItem>{item.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          {/* </CountContext.Provider>    */}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
