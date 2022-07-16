import logo from "./logo.svg";
import "./App.css";
import Nav from "./Component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

        </Routes>
        <Footer />
        <SignUp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
