import React, { useState } from "react"


const url = 'http://localhost:6001/listings'

function NewListings({ submitForm }) {
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: ""
    })

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleForm(event){
        event.preventDefault()
        setFormData(formData)

        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
    }

    return (
        <form onSubmit={handleForm}>
            <label>Description</label>
            <input type="text" onChange={handleChange} 
            name="description"
            value={formData.description}/>

            <label>Image Url</label>
            <input type="text" onChange={handleChange} 
            name="image"
            value={formData.image}/>

            <label>Location</label>
            <input type="text" onChange={handleChange}
            name="location"
            value={formData.location}/>
            <input type="submit"/>
        </form>
    )
}

export default NewListings