import React from "react";
import logo from "../Img/logo2.png"
import css from "./Header.module.css"

const Header = () => {
    return (<div className={css.header}>
        <img src={ logo } alt={"logo"}/>
   </div>);
}

export default Header;