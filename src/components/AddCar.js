  import React, {useState} from 'react'
  import {Form, Button} from 'react-bootstrap'
  
  const AddCar = (e) => {
    
    const url = 'http://localhost:5000/car'

    const [name, setName] = useState("")
    // const [pictureUrl, setPictureUrl] = useState("")
    const [brand, setBrand] = useState("")
    const [tags, setTags] = useState(0)
    // const [duration, setDuration] = useState(0)

    const createCar = async (e) => {
        e.preventDefault();
        const carDetail = {
            name,
            brand,
            tags
        }

        const newCar = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carDetail)
        });
        alert("Car created")
    }

    return (
        <Form onSubmit={createCar}>
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
                value="Create car"
            >
                Create Car
            </Button>
          </Form.Group>
        </Form>
      )
  }
  
  export default AddCar
  