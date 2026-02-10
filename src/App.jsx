import { Routes, Route } from "react-router-dom";
import Login from "./forms/Login";
import Register from "./forms/Register";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App