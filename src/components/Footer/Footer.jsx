import React from "react";
import css from "./Footer.module.css"

export const Footer = (props) => {

let newTextElement = React.createRef(); 

let addNews = () => {
    let text = newTextElement.current.value;
    props.addNews(text)
}

    return (
        <div className={css.footer}>
             Ⓒ 1995 Cultura//Voronezh... <br/> 
             <textarea className={css.textarea} ref={newTextElement}></textarea>
             <br/> 
             <button className={css.button}  onClick={addNews}>Send</button>
        </div>
    )
}