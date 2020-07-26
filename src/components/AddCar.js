  import React, {useState} from 'react'
  import {Form, Button} from 'react-bootstrap'
  
  const AddCar = (e) => {
    
    const url = `${process.env.REACT_APP_API_URL}/car`

    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    // const [tags, setTags] = useState("")

    const createCar = async (e) => {
        e.preventDefault();
        const carDetail = {
            name,
            brand,
            // tags
        }

        const newCar = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(carDetail)
        }

        fetch(url, newCar)
        .then((response) => {
            return response.json();
        }).then((result) => {
            alert('Car Created')
            window.location = `${process.env.REACT_APP_TC2_FE}`
        })
        .catch(err => console.log(err))
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

            {/* <Form.Control 
                type="number" 
                placeholder="Tags" 
                name="tag"
                value={tags}
                onChange = {e => setTags(e.target.value)}
            /> */}
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
  