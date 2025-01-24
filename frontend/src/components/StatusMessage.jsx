import React from "react";
import '../styles/statusMessage.css';

function StatusMessage({ Icon, message }) {
    return (
        <div className="container-status-message">
            <Icon className="icon-status-message" />
            <p>{message}</p>
        </div>
    );
}

export default StatusMessage;