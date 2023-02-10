import React from "react";
import css from "./Video.module.css"

export const Video = (props) => {
  return (
    <div className={css.grid}>
      {props.video1.map(({url}, i) =>
        <div className={css.songItem} key={i}>
          <iframe
            width="660"
            height="415"
            title="YouTube video player"
            frameBorder="0"
            src={url}
          />
        </div>)}
    </div>
  )
}
