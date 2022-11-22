import React, { useContext } from "react";
// import CountContext from "./countContext";
import { Card, CardBody, CardTitle } from "reactstrap";


function Home({snacks, drinks}) {
  // const foodNum = useContext(CountContext)
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
              We have { snacks.length } food items and {drinks.length} drink items 
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;


