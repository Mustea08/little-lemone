import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";
import Resrvation from "./components/Resrvation";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Link to="/"></Link>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/reservation" element={<Resrvation />}></Route>
      </Routes>
    </>
  );
}

export default App;
