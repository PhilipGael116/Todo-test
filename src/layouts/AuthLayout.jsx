import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="flex h-screen w-full">
            <img src="/auth_image.jpg" alt="Auth side image" className="object-cover flex-1 w-1/2 hidden lg:block" />
            <div className="flex-1 w-1/2 shadow-2xl shadow-gray-400/50">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout