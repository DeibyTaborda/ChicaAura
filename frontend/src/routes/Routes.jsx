import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../views/login/Login";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import Signup from "../views/signup/Signup";

function RoutesChicaAura() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default RoutesChicaAura;