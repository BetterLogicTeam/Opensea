import React from 'react'
import "./R_blog_cards.css"
import crd_tw_pic_1 from "../Accets/bott_1.png"
import crd_tw_pic_2 from "../Accets/bott_2.png"
import Blogslide from '../Blog_slide/Blogslide'

function R_blog_cards() {
    return (
        <div>
            <div className="container">

                <Blogslide/>

                <h3 className='mt-3 mt-md-5'><b>Categories</b></h3>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6  justify-content-around d-flex">
                        <button className='btn btn-sm pro_botn'>Product</button>
                        <button className='btn btn-sm pro_botn'>Company</button>
                        <button className='btn btn-sm pro_botn'>Community</button>
                        <button className='btn btn-sm pro_botn'>Creator</button>
                    </div>
                </div>

                <div className="row mt-5 ">

                    <div className="col-md-4 ">
                    <img src={crd_tw_pic_1} class="blog_img" alt="..." />
                    <div className='text-start shadow p-2'>
                    <div className='bttn_rap d-flex justify-content-evenly '>
                        <button className='btn btn-sm btn-primary '>Creator</button>
                        <button className='btn btn-sm btn-primary'>Experience</button>
                    </div>
                    <div className='text_main_box'>
                        <h4 className='fw-bold mt-2'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                        <p className='mb-1 datt_ed'>November 30,2022</p>
                        <p className=''>As we reflect an a wild 2022 and startin <br /> particular stands out: this year, creators  <br /> earned over $1 BILLON from creator fees using OpenSea.</p>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                    <img src={crd_tw_pic_2} class="blog_img sasasasasasss" alt="..." />
                    <div className='text-start shadow p-2'>
                    <div className='bttn_rap d-flex justify-content-evenly '>
                        <button className='btn btn-sm btn-primary '>Creator</button>
                        <button className='btn btn-sm btn-primary'>Experience</button>
                    </div>
                    <div className='text_main_box'>
                        <h4 className='fw-bold mt-2'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                        <p className='mb-1 datt_ed'>November 30,2022</p>
                        <p className=''>As we reflect an a wild 2022 and startin <br /> particular stands out: this year, creators  <br /> earned over $1 BILLON from creator fees using OpenSea.</p>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                    <img src={crd_tw_pic_1} class="blog_img" alt="..." />
                    <div className='text-start shadow p-2'>
                    <div className='bttn_rap d-flex justify-content-evenly '>
                        <button className='btn btn-sm btn-primary '>Creator</button>
                        <button className='btn btn-sm btn-primary'>Experience</button>
                    </div>
                    <div className='text_main_box'>
                        <h4 className='fw-bold mt-2'>Creator Using openSea Earned Over $ 1Billion from Creator fee i 2022</h4>
                        <p className='mb-1 datt_ed'>November 30,2022</p>
                        <p className=''>As we reflect an a wild 2022 and startin <br /> particular stands out: this year, creators  <br /> earned over $1 BILLON from creator fees using OpenSea.</p>
                    </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default R_blog_cards
