import React from "react";
import css from "./News.module.css"
import Post from "./Post/Post.jsx";

const News = (props) => {
    
    return (
        <div className={css.news}>
            <Post />
        </div>
    )
}

export default News;