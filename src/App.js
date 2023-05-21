import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Confarmation from "./components/booking-files/Confarmation";
// import Footer from "./components/Footer";
import Resrvation from "./components/booking-files/Resrvation";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Link to="/"></Link>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/reservation" element={<Resrvation />}></Route>
        <Route path="/confirmed" element={<Confarmation />}></Route>
      </Routes>
    </>
  );
}

export default App;
