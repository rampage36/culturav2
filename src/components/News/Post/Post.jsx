import React from "react";
import css from "./Post.module.css"

// export const Post = (props) => {
//     return (
//         <div className={css.post}>
//              { props.news }
//         </div>
//     )
// }

export const Post = (props) => {
  return (
    <div>
        {props.posts.map(({postdata}, i) =>
         <div className={css.post} key={i}>
          {postdata}
          </div>)}
    </div>
    )
}