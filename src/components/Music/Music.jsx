import React from "react";
import css from "./Music.module.css"

const Music = () => {
    return ( <div className='grid'>
                    <div className={css.music}>
                        <div className={css.firstSong}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className={css.secondSong}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className={css.thirdSong}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className={css.fourthSong}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/c9lykauGT1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
    )
}

export default Music;