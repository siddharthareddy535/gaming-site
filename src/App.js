import logo from './logo.svg';
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home></Home>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/register" element={<Register></Register>}/>
    </Routes>
    </Router>
      
  );
}

export default App
