import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import About from "./pages/About.jsx";

function App() {

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    return token ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />
      </Routes>
    </div>
  );
}

export default App;
