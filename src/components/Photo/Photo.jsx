import React from "react";
import css from "./Photo.module.css"
import Deliro from '../Img/Delirophoto.png'

export const Photo = () => {
    return (
        <div className={css.photo}>
            <div className="Deliro"></div>
            <img className={css.Deliro} src = {Deliro} alt = "Deliro_photo"/>    
        </div>
    )
}