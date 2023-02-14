import React from "react";
import css from "./Photo.module.css"
import Deliro from '../Img/Delirophoto1.png'

export const Photo = () => {
    return (
        <div className={css.photo}>
            <div className="Deliro">
            <img className={css.Deliro} src = {Deliro} alt = "Deliro_photo"/>
            <div className={css.DeliroText}>
            Cras volutpat tempus felis,<br/> in iaculis <span>neque eleifend</span> quis.<br/>
            Donec lobortis urna leo, a gravida elit varius a.
            </div>
            </div>
        </div>
    )
}