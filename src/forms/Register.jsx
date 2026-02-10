import { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex items-center justify-center min-h-screen px-6 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                    <p className="text-gray-600">Join us today and get started</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Fields Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="fname" className="text-sm font-medium text-gray-700 mb-1.5">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b8cee] focus:border-transparent transition-all"
                                placeholder="Philippe"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lname" className="text-sm font-medium text-gray-700 mb-1.5">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b8cee] focus:border-transparent transition-all"
                                placeholder="Gael"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b8cee] focus:border-transparent transition-all"
                            placeholder="philippegael@example.com"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b8cee] focus:border-transparent transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#2b8cee] text-white font-semibold py-3 rounded-lg hover:bg-[#2478d1] transition-colors duration-200 shadow-sm"
                    >
                        Create Account
                    </button>

                    {/* Login Link */}
                    <div className="text-center pt-2">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-[#2b8cee] font-semibold hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register