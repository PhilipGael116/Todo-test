import { useState } from "react"

const Login = () => {

    const formData = useState({
        email: '',
        password: ''
    });

    const handleChange = () => {

    }

    const handleSubmit = (e) =>{
        
    }

  return (
    <form action="">
        <label htmlFor="email">
            Email:
            <input 
                type="text" 
                value={formData.email}
                onChange={handleChange}
            />
        </label>
        <label htmlFor="password">
            Password:
            <input 
                type="password" 
            />
        </label>

        <button type="submit">Sign In</button>
    </form>
  )
}

export default Login