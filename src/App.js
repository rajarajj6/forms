import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import DashBoard from "./Components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashBoard" element={<DashBoard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
