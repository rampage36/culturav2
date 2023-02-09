import React from "react";
import css from "./Video.module.css"

const video1 = [
  {url: "https://www.youtube.com/embed/c9lykauGT1U"  },
  {url: "https://www.youtube.com/embed/c9lykauGT1U"  },
  {url: "https://www.youtube.com/embed/c9lykauGT1U"  },
  {url: "https://www.youtube.com/embed/c9lykauGT1U"  },
  {url: "https://www.youtube.com/embed/c9lykauGT1U"  },
  {url: "https://www.youtube.com/embed/c9lykauGT1U"  },

];

export const Video = () => {
  return (
    <div className={css.grid}>
      {video1.map(({url}, i) =>
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
