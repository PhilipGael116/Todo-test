import { useState } from "react"

const Register = () => {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
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
            fname: '',
            lname: '',
            email: '',
            password: ''
        });
        console.log("Form Submitted ", formData);
    }

    return (
        <form action="" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="fname">
                First Name:
                <input
                    type="text"
                    value={formData.fname}
                    onChange={handleChange}
                    name="fname"
                />
            </label>
            <label htmlFor="lname">
                Last Name:
                <input
                    type="text"
                    value={formData.lname}
                    onChange={handleChange}
                    name="lname"
                />
            </label>
            <label htmlFor="email">
                Email:
                <input
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
            </label>
            <label htmlFor="password">
                Password
                <input
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
            </label>

            <button type="submit" className="bg-[#2b8cee] text-white rounded-xl">Register</button>

        </form>
    )
}

export default Register