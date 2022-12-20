import React from 'react'
import "./Meet_opensea.css"
import r_vido from "../Assets/r_vido.mp4"

function Meet_opensea() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4 text-start">
                <div>
                    <h2 className='artical_main_heading fw-bold'>Meet OpenSea</h2>

                </div>
                <div>
                    <span className='artical_description'>Allow us to introduce ourselves! Hear from our CEO, Devin Finzer, about who we are, how we started, and where we're headed.</span>
                </div>
            
            </div>
            <div className="col-md-8">
            <video autoPlay loop playsInline muted controls  className='w-100 r_sources_video'>
    <source src="r_vido.mp4" type="video/mp4" />
    {/* <source src="/video-example.mp4" type="video/mp4" /> */}
    
</video>
               {/* <video ></video> */}
                {/* <video className='w-100 ' autoplay loop playsInline muted src=""></video> */}
                {/* <video src="r_vido.mp4" autoplay loop playsInLine muted ></video> */}
            </div>
        </div>
      
    </div>
  )
}

export default Meet_opensea
