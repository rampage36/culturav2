import React from "react";
import css from "./Footer.module.css"

export const Footer = (props) => {

let newTextElement = React.createRef(); 

let addNews = () => {
    props.addNews();
    props.updateNewPostText('');
}

let onNewsChange = () => {
    let text = newTextElement.current.value;
        props.updateNewPostText(text);
}

    return (
        <div className={css.footer}>
             Ⓒ 1995 Cultura//Voronezh... <br/> 
             <textarea className={css.textarea} 
                        onChange={onNewsChange}
                        ref={newTextElement}
                        value={props.newPostText}/>
             <br/> 
             <button className={css.button}  onClick={addNews}>Send</button>
        </div>
    )
}