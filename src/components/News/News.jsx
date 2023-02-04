import React from "react";
import css from "./News.module.css"
import Post from "./Post/Post.jsx";

const News = () => {
    return (
        <div className={css.news}>
            <Post news='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Phasellus ut dolor tincidunt, volutpat lorem eu, venenatis eros.
              Donec mollis laoreet aliquet. Nulla quis imperdiet mi. 
              Duis efficitur, neque et mollis cursus, nisl arcu aliquet quam, ac ornare massa velit vel lectus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Sed vitae dictum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Aenean eget felis ut leo sagittis ornare. Duis fermentum, nisl ac tempor fermentum,
              velit dolor posuere quam, sed luctus lectus sem ut augue. Mauris fermentum laoreet tincidunt.' />
             
             <Post news='Donec leo sapien, cursus ut congue nec, scelerisque in lectus. 
              Donec tincidunt efficitur justo, id efficitur ante tempor vitae.
               Cras gravida eros ac risus laoreet congue. Duis rhoncus sit amet mi et vulputate. 
               Integer varius, risus in sollicitudin pellentesque, lectus mauris rhoncus leo,
               at blandit nisi elit ac mi. Curabitur iaculis nunc non euismod pulvinar.
               Aenean at varius urna. Donec sit amet urna lectus. Quisque ut tempus eros.
               Maecenas velit quam, egestas sit amet faucibus eget, porttitor ac augue.
               Nullam turpis sapien, ultricies vitae diam non, pulvinar fermentum ipsum.' />
        </div>
    )
}

export default News;