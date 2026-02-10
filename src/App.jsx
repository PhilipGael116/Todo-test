import { Routes, Route } from "react-router-dom";
import { Login, Register } from "./forms";
import { AuthLayout } from "./layouts";
import { Home } from "./pages";

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