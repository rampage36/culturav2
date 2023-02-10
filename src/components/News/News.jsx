import React from "react";
import css from "./News.module.css"
import {Post} from "./Post/Post.jsx";

export const News = (props) => {
    
    return (
        <div className={css.news}>
            <Post posts={props.posts}/>
        </div>
    )
}