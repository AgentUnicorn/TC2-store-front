import React from 'react'
import { Container, Row, Jumbotron,Col } from 'react-bootstrap';
import Card from "./Card.js"
export default function CardList(props) {
    return (
        <div>
            <Container>
  <Row>
    <Col><Card/></Col>
    <Col ><Card/></Col>
    <Col><Card/></Col>
  </Row>
</Container>
        </div>
    )
}
