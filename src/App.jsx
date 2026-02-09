import { Routes, Route } from "react-router-dom";
import Login from "./forms/Login";
import Register from "./forms/Register";

const App = () => {
  return (
    <>
      <div className="bg-amber-900 text-white">Hello</div>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App