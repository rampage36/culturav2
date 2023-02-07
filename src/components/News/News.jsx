import React from "react";
import css from "./News.module.css"
import Post from "./Post/Post.jsx";

let newsElements = newsdata.map(n => <Post news={n.newsdata}/>);

const News = (props) => {
    return (
        <div className={css.news}>
            { props.newsElements }
        </div>
    )
}

export default News;