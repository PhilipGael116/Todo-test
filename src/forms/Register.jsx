import { useState } from "react"

const Register = () => {

    const formData = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });

    const handleChange = () => {

    }

    const handleSubmit = () =>{
        
    }

  return (
    <form action="">
        First Name:
        <input 
            type="text" 
            value={formData.fname}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
        Last Name:
        <input 
            type="text" 
            value={formData.lname}
            onChange={handleChange}
        />
        Email:
        <input 
            type="text" 
            value={formData.email}
            onChange={handleChange}
        />
        Password:
        <input 
            type="password" 
        />
    </form>
  )
}

export default Register