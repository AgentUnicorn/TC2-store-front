import React, { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import { useQueryParam, NumberParam } from 'use-query-params';


const CarList = () => {

    let history = useHistory();

    const [car, setCar] = useState([])
    const [page, setPage] = useQueryParam('page', NumberParam)
    useEffect(()=> {
        async function fetchData(p){
            if(isNaN(p)){
                p = 1
            }
            const url = `https://tc2-store.herokuapp.com/car/?page=${p}` || `${process.env.REACT_APP_API_URL}/car?page=${p}`
            const data = await fetch(url)
            const carData = await data.json()
            setCar(carData)
            console.log(carData)
        };
        fetchData(page);
    },[page]);

    // const carSelect = () => {
    //     history.push(`/car/${car._id}`)
    // }

  return (
        <div>
            <Container>
                <Row className="justify-content-md-end">
            {car.map((e)=> (
                <Car {...e} />
            ))}
                </Row>
            </Container>
            <div className="d-flex justify-content-between">
                {/* <a href='#' onClick={()=> <Redirect to={`/test 123`}/>}>Prev Page</a> */}
                <Link to={`/?page=${page ? page-1 : 1}`} >Prev</Link>
                <Link to={`/?page=${page ? page+1 : 2}`} >Next</Link>
                {/* <a href='#' onClick={()=> setPage(page +1)}>Next Page</a> */}
            </div>
        </div>
    )
};

const Car = ({
    name,
    brand,
    pictureUrl,
    _id
}) => (

    <div>
        <Card className="bg-dark text-white ml-4 mb-4" style={{width: 300, height: 180}}>
            <Link 
                className="btn btn-secondary btn-width-200 search-submit" 
                to={{pathname: `/car/${_id}`, query: _id}}
            >
                <Card.Img src={pictureUrl} alt="Card image"/>
                <Card.ImgOverlay className="cardText">
                    <Card.Text>{brand}</Card.Text>
                    <Card.Title>{name}</Card.Title>
                </Card.ImgOverlay>
            </Link>
        </Card>
    </div>

)

export default CarList
