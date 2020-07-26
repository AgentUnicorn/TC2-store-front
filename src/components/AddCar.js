  import React, {useState} from 'react'
  import {Form, Button} from 'react-bootstrap'
  import '../css/Form.css'

  
  const AddCar = (e) => {
    
    const url = "https://tc2-store.herokuapp.com/car" || `${process.env.REACT_APP_API_URL}/car`

    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    // const [tags, setTags] = useState("")

    const createCar = async (e) => {
        e.preventDefault();
        const carDetail = {
            name,
            brand,
            pictureUrl,
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
            window.location = `https://thecrew2-webstore.netlify.app/` || `${process.env.REACT_APP_TC2_FE}`
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="form-add">
                
        <Form onSubmit={createCar} className="formContainer">
            <h2>Create a car here </h2>
            <Form.Group>
            <Form.Control 
                type="text" 
                placeholder="Name" 
                name="name"
                value={name}
                onChange = {e => setName(e.target.value)}
            />
            <br />
            <Form.Control 
                type="text" 
                placeholder="Picture Url" 
                name="pictureUrl"
                value={pictureUrl}
                onChange = {e => setPictureUrl(e.target.value)}
            />
            <br />
            <Form.Control 
                type="text" 
                placeholder="Brand" 
                name="brand"
                value={brand}
                onChange = {e => setBrand(e.target.value)}
            />
            <br />
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
        </div>
      )
  }
  
  export default AddCar
  