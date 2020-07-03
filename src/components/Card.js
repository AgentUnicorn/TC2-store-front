import React from "react";
import { Container, Row, Jumbotron, Card,Button } from "react-bootstrap";
import "./Card.css"
export default function Card2(props) {
  return (
    <div class="margin">
      <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Country
          </Card.Text>
          <Card.Text>Title
          </Card.Text>
          <Card.Text>Price
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
