import React from "react";
import css from "./Post.module.css"

export const Post = (props) => {
    return (
        <div className={css.post}>
             { props.news }
        </div>
    )
}