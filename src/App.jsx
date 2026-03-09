import { Routes, Route } from "react-router-dom";
import { Login, Register } from "./forms";
import { AuthLayout } from "./layouts";
import { Home, Focus } from "./pages";

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
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </>
  )
}

export default App