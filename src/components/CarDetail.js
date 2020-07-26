import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const CarDetail = (props) => {

    console.log('this is props',{props})

    const [car, setCar] = useState([])
    const { id } = useParams
    useEffect(()=> {
        async function fetchData(){
            const url = `http://localhost:5000/car/${id}`
            const data = await fetch(url)
            const carData = await data.json()
            setCar(carData)
        };
        fetchData()
    },[]);

    

    return (
        <div>
            {car.map((e)=> (
                <CarPageDetail {...e}
                    car={e} key={e.id} 
                />
            ))}    
        </div>
    )
}; 

const CarPageDetail = ({
    name, 
    pictureUrl,
    brand, 
    tags
}) => (
    <div>
        <h3>{name}</h3>
        <h4>{brand}</h4>
    </div>
)

export default CarDetail
