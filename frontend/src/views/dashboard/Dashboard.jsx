import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useGet from "../../services/useGet";
import { useAuth } from '../../context/AuthContext';

function Dashboard() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const { loading, error, response } = useGet("http://localhost:3000/users");

    useEffect(() => {
        if (!token) {
            navigate("../login");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return <Header />;
}

export default Dashboard;
