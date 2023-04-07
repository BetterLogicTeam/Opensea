import React from 'react'
import ninja from "../Assets/ninja.avif"
import "./Updated_card.css"


export default function Updated_card({img_url_card,card_heading}) {
  return (
    <div>

<div>
      <div className=" mt-4">
     
        <div className="art hvr_boxt">
          <a href="" className="in_art">
            <div className="art_pic">
              <span className="arts_an">
                <img src={img_url_card} alt="" className="artimg" />
              </span>
            </div>

            <div className="px-3">
              <div className=" text-start">
                <p className=" caard_updated_heaing  pt-2 ">{card_heading}</p>

              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 text-start">
                    <p className='up_sub_h'>FLOOR</p>
                    <p className='up_sub_hh'>0.04 ETH</p>
                </div>
                <div className="col-md-6">
                    <p className='up_sub_h'>24H VOLUME</p>
                    <p className='up_sub_hh'>0.19 ETH</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        </div>
      </div>
        
   
    
    
    
    </div>
  )
}
