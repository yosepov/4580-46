import React from "react";
import MediaCard from "../NotSigned/MediaCard";
import { games } from "../Games/Games";

const Blog = () => {

  return (
    <>
      <div className="signedpage">
        <h1
          style={{
            textAlign: "center",
            borderBottom: "1px solid black",
            color: "white",
          }}
        >
          What's new?
        </h1>
        <div className="cards">
        
      {games.map((game) => (
        <div key={game.id}>
         <MediaCard cardDescription={game.cardDescription}
          image={game.image} 
          title={game.title}
           video={game.video} />
        </div>
      ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
