import React from 'react'
import play from "../Assets/play.svg"

function R_main_play({card_play,playb}) {
  return (
    <div>
           <div className=''>
           <div className="   nft_card_reso ">
      <div className="card_img_nft">

        <img src={card_play} className='nft_card_img_pro  play_p '  alt="" />
        <div className='main_paly main_play_bg'>
            <img src={play} alt="" />
            <div className='ms-2'>Play</div>

           
        </div>

      </div>

    </div>
        <div className='text-start '>

        <b className='m-5 ms-0 text-start'>{playb}</b>
        </div>
      
    </div>
      
    </div>
  )
}

export default R_main_play