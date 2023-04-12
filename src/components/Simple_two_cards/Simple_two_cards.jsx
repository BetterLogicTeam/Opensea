import React from 'react'
import "./stylelish.css"
import Boxtow from "../simple_tow/Boxtow"
import art from "../Assets/art.png"
import art2 from "../Assets/music.png"
import art3 from "../Assets/trading-cards.png"
import art4 from "../Assets/collectibles.png"
import art5 from "../Assets/photography-category.png"

function Simple_two_cards() {
  return (
    
   <div>

    <div className="container"></div>
    


    <div className=" container-fluid mt-5 mb-5">
      <div className='text-start txx ps-0 ps-md-3'><h4 className='main_home_heading'>Explore Categories</h4></div>
    <div className="grid-pic-art">
    <Boxtow simpleimg={art} simh2="ART"/>
    <Boxtow simpleimg={art2} simh2="Music"/>
    <Boxtow simpleimg={art3} simh2="Trading Cards"/>
    <Boxtow simpleimg={art4} simh2="Collectibles" className="upp"/>
    <Boxtow simpleimg={art5} simh2="Photography"/>
  
      </div>
    </div>

    
   </div>
  )
}

export default Simple_two_cards