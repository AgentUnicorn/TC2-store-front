import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Container, Row, Jumbotron,Col } from 'react-bootstrap';
import Card2 from "./Card.js"

export default function Banner() {
    return (
        <div>
            <Jumbotron fluid>
            <Container>
  <Row md={4}>
    <Col><Card2 /></Col>
    <Col><Card2 /></Col>
    <Col><Card2 /></Col>
    <Col><Card2 /></Col>
  </Row>
</Container>
</Jumbotron>
        </div>
    )
}
