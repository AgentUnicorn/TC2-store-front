import React, {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const Edit = (e) => {
  
    const { id } = useParams()
    const url = `${process.env.REACT_APP_API_URL}/car/edit/${id}`

    const [car, setCar]=useState([])
    useEffect(()=> {
        async function fetchData(){
            const data = await fetch(url)
            const carData = await data.json()
            setCar(carData)
        };
        fetchData()
    },[]);

    const [name, setName] = useState(car.name)
    const [brand, setBrand] = useState(car.brand)
    const [tags, setTags] = useState()

    const updateCar = async (e) => {
        e.preventDefault();
        const carDetail = {
            name,
            brand,
            tags
        }

        const updatedCarInitiate = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(carDetail)
        }

        fetch(url, updatedCarInitiate)
        .then((response) => {
            return response.json();
        }).then((result) => {
            result.json()
            alert('Delete Success')
            window.location = `${process.env.REACT_APP_TC2_FE}/car/edit/${id}`
        })
        .catch(err => console.log(err))
  }

  return (
      <Form onSubmit={updateCar}>
        <Form.Group>
          <Form.Control 
              type="text" 
              placeholder="Name" 
              name="name"
              value={name}
              onChange = {e => setName(e.target.value)}
          />
          <br />

          {/* <Form.Control 
              type="text" 
              placeholder="Picture Url" 
              name="pictureUrl"
              value={pictureUrl}
              onChange = {e => setPictureUrl(e.target.value)}
          />
          <br /> */}

          <Form.Control 
              type="text" 
              placeholder="Brand" 
              name="brand"
              value={brand}
              onChange = {e => setBrand(e.target.value)}
          />
          <br />

          <Form.Control 
              type="number" 
              placeholder="Tags" 
              name="tag"
              value={tags}
              onChange = {e => setTags(e.target.value)}
          />
          <br />

          {/* <Form.Control 
              type="number" 
              placeholder="Duration" 
              name="duration"
              value={duration}
              onChange = {e => setDuration(e.target.value)}
          /> */}
          <br />

          <Button 
              variant="primary" 
              type="submit" 
              value="Edit car"
          >
              Save
          </Button>
        </Form.Group>
      </Form>
    )
}

export default Edit
