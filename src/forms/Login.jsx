import { useState } from "react"

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            email: "",
            password: "",
        })
        console.log("Form submitted: ", formData);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="email">
                Email:
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="password">
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Sign In</button>
        </form>
    )
}

export default Login