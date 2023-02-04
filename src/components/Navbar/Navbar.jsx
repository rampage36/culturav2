import React from "react";
import css from "./Navbar.module.css"
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={css.navbar}>
            <div className={`${css.item} ${css.active}`}>
                <NavLink to="/about" className = { navData => navData.isActive ? css.active : css.item }>About</NavLink>
            </div>
            <div className={`${css.item} ${css.active}`}>
                <NavLink to="/news" className = { navData => navData.isActive ? css.active : css.item }>News</NavLink>
            </div>
            <div className={`${css.item} ${css.active}`}>
                <NavLink to="/music" className = { navData => navData.isActive ? css.active : css.item }>Music</NavLink>
            </div>
            <div className={`${css.item} ${css.active}`}>
                <NavLink to="/photo" className = { navData => navData.isActive ? css.active : css.item }>Photo</NavLink>
            </div>
            <div className={`${css.item} ${css.active}`}>
                <NavLink to="/video" className = { navData => navData.isActive ? css.active : css.item }>Video</NavLink>
            </div>
        </div>
    )
}

export default Navbar;