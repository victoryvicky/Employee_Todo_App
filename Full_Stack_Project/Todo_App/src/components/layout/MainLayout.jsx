import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../../styles/MainLayout.css";

const MainLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="main-content">{children}</div>
        </>
    );
};

export default MainLayout;
