import React from "react";
import css from "./About.module.css"

const About = () => {
    return (
        <div className={css.about}>
                <div className={css.text}>
                        <h2>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/></h2>
                    <span><h1> Nullam vitae hendrerit sem </h1><br/></span><h5> Aenean eleifend eros suscipit suscipit aliquam.<br/>
                    Orci varius natoque penatibus et magnis dis parturient montes,<br/> nascetur ridiculus mus.<br/> </h5>
                    <h3> Cras porttitor lectus quam, a dictum leo efficitur et.<br/>
                    In interdum nulla in mi blandit congue. </h3>
                </div>
        </div>
    )
}

export default About;