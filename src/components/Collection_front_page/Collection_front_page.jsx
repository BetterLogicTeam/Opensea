import React from 'react'
import "./Collection_front_page.css"
import Updated_card from '../Updated_card/Updated_card'
import tct1 from "../Assets/tct1.avif";

export default function Collection_front_page() {
  return (
    <div className='ps_fixedddd d-flex align-items-center  '>
    <div className="container">
    <h1 className='collection_main_heading_front'>My Collections</h1>
    <div>
        <p className='cfst'>Create, curate, and manage collections of unique NFTs to share and sell.</p>

        <button className='cf_cc'> Create a Collection</button>
    </div>

    <div className="container mt-4  ">
        <h1>My Collection </h1>
        <div className="row mt-5">
            <div className="col-md-3">
    <Updated_card card_heading="AIORBIT" img_url_card={tct1}/>


            </div>
            <div className="col-md-3 mt-3 mt-md-0">
    <Updated_card card_heading="AIORBIT" img_url_card={tct1}/>


            </div>
        </div>
    </div>





    </div>
    </div>
  )
}
