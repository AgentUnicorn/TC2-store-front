import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const Edit = (e) => {
  
    const { id } = useParams()
    const url = `http://localhost:5000/car/edit/${id}`

    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [tags, setTags] = useState(0)

    const updateCar = async (e) => {
        e.preventDefault();
        const carDetail = {
            name,
            brand,
            tags
        }

        const updatedCar = await fetch(url, {
            method: "PUT",
            headers: {
                Accept:  'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carDetail)
        })
        .then(response => response.json())
        .then(result => {
            alert("Car updated")
            result.json()
        }) 
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
