import "./styling/Navbar.css";
import logo from "./images/bmw.png";
import {HiMenu} from "react-icons/hi";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className="navbar2">
            <img className="logo" src={logo} />
                {!openMenu &&
                    <HiMenu className="navbar-menu" onClick={() => setOpenMenu(true)} />
                }
                {openMenu &&<div className="navbar-right-div">
                    <a className="right-navbar-el">Search</a>
                    <a className="right-navbar-el">Try Silky Notes</a>
                    <a className="right-navbar-el ">Login</a>
                    <a className="right-navbar-el ">+</a>
                    {openMenu && <AiOutlineClose  className="navbar-close" onClick={() => setOpenMenu(false)}/>}
                </div>}
            </div>

            <div className="navbar">
                <img className="logo" src={logo} />
                <div className="navbar-right-div">
                    <a className="right-navbar-el">Search</a>
                    <a className="right-navbar-el">Try Silky Notes</a>
                    <a className="right-navbar-el">Login</a>
                    <a className="right-navbar-el">+</a>
                </div>
            </div>
        </>
    ); 
}
 
export default Navbar;