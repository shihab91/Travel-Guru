import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from '@mui/material';
const Header = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <NavLink to="/home"> <img src="https://i.ibb.co/RYzWYCH/Group-1330.png" alt="" /></NavLink>
                </div>
                <div className="input-group">
                    <AiOutlineSearch />
                    <input type="text" name="search" placeholder="Search Your Destination..." />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><NavLink activeStyle={{ textDecoration: "underline", color: "#81ecec" }} to="/news">News</NavLink></li>
                        <li><NavLink activeStyle={{ textDecoration: "underline", color: "#81ecec" }} to="/destination">Destination</NavLink></li>
                        <li><NavLink activeStyle={{ textDecoration: "underline", color: "#81ecec" }} to="/blog">Blog</NavLink></li>
                        <li><NavLink activeStyle={{ textDecoration: "underline", color: "#81ecec" }} to="/contact">contact</NavLink></li>
                        <Link to="/login"><Button className="log-in" variant="contained">login</Button></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
