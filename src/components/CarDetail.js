import React, {useEffect, useState} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import { createRenderer } from 'react-dom/test-utils'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/CarDetail.css'

const CarDetail = (props) => {
    const [car, setCar] = useState([])
    const { id } = useParams()
    const url = `http://localhost:5000/car/${id}`
    useEffect(()=> {
        async function fetchData(){
            const data = await fetch(url)
            const carData = await data.json()
            setCar(carData)
        };
        fetchData()
    },[]);

    const handleClick = carId => {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch(url, requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            result.json()
            alert('Delete Success')
            window.location = 'http://localhost:3000'
        })
    }

    

    return (
        <div>
            <Container className="content-detail">
                <Row>
                    <Col lg={8} className="left-content">
                        <img
                            className="content-image" 
                            src={car.pictureUrl} 
                        />
                    </Col>
                    <Col lg={4} className="right-content">
                        <div className="content-attribute">
                            <div>
                                <img
                                    className="content-logo" 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Nissan-logo.svg/1189px-Nissan-logo.svg.png"
                                />
                            </div>
                            <div className="content-right-atribute">
                                <p className="attribute-space">{car.brand}</p>
                                <h3 className="attribute-space">{car.name}</h3>
                                <p className="attribute-space">Year</p>
                            </div>
                        </div>
                        <div>
                            <p>PERF LEVEL</p>
                            <p>93/280</p>
                            <p>TOP SPEED</p>
                            <p>POWER</p>
                        </div>
                        <Link to={`/car/edit/${id}`}>
                            <Button variant="success" >Edit</Button>
                        </Link>
                        <Button 
                            variant="danger"
                            onClick={()=> handleClick(car._id)}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}; 


export default CarDetail
