import React from "react";
import css from "./Music.module.css"

/*{testArray.map((playerURL,i) =>
  <div className={css.songItem} key={i}>
    <iframe
      width="350"
      height="350"
      title="soundcloud9"
      frameborder="0"
      src=playerURL
    />
  </div>
)}*/

export const Music = (props) => {
  return (
    <div className={css.grid}>
        {props.music1.map(({url}, i) =>
         <div className={css.songItem} key={i}>
            <iframe
              width="350"
              height="350"
              title="soundcloud9"
              frameBorder="0"
              src={url}
            />
          </div>)}
    </div>
    )
}