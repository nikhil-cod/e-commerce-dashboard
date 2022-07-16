import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
