import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from "../views/login/Login";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import Signup from "../views/signup/Signup";
import Dashboard from "../views/dashboard/Dashboard";

function RoutesChicaAura() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </AuthProvider>
    );
}

export default RoutesChicaAura;