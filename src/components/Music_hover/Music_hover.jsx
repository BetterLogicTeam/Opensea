import React from "react";
import Explore_art from "../Explore_art/Explore_art";
import back4 from "../Assets/back4.avif";
function Music_hover() {
  return (
    <div>
      <Explore_art
        art={back4}
        head_art="Explore Music NFTs"
        para_1="Own collections from some of the biggest names in music, plus discover incredible work from new and upcoming artists."
        // para_2="As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea"
        />
    </div>
  );
}

export default Music_hover;