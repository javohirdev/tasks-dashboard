import React from "react";
import './styles/style.css';
import Navbar from './Navbar';
import Overview from "./Overview";
import Statistics from "./chart/Statistics";
import DashboardHead from "./DashboardHead";
import Clients from "./Clients";

function Main(){
    return(
        <>
            <Navbar />
            <Overview />
            <Statistics />
            <Clients />
        </>
    )
}

export default Main;