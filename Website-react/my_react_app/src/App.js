//import logo from './logo.svg';
import "./App_s.css";
import Navigation from "./Components/Navigation";
import Wordcounter from "./Components/Wordcounter";

import Signin from "./Components/Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
      
      <Navigation company_name="Word Counter" option1="Home" option2="Products"/>
      <div className="container my-5">
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/Products" element={<Wordcounter/>}/>
      </Routes>
      
      </div>
      </Router>
  );
}

export default App;
