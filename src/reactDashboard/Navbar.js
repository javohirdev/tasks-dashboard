import React, {useState} from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBar } from './SideBar';
// import DashboardHead from "./DashboardHead";
import './styles/style.css';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
            <div className="navbarSec">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                {/* <DashboardHead name="Javokhir"/> */}
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <AiIcons.AiOutlineClose className="toggler" onClick={showSidebar} />
                <ul className="nav-menu-items">
                    {SideBar.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;