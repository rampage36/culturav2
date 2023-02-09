import React from "react";
import css from "./Music.module.css"

const music1 = [
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
  {url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346667592&visual=true" },
];

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

export const Music = () => {
  return (
    <div className={css.grid}>
        {music1.map(({url}, i) =>
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