import React from 'react'
import "./Blocard.css"
import start_img from "../Accets/Hscaled.jpeg"

function Blocard() {
    return (
        <div className='container-fluid'>
            <div className="row rad shadow ">
                <div className="col-md-6 d-flex justify-content-end">
                    <img src={start_img} className="w-75" alt="#" />
                </div>

                <div className="col-md-6 bg-white">
                    <div className="card_body text-start">
                        <div className='buton_cover'>
                            <button className='btn btn-sm btn-primary me-3'>Product</button>
                            <button className='btn btn-sm btn-primary'>Trust & Safety</button>
                        </div>
                        <h4 className="card_title fw-bold">Our Efforts to Curb Fraud and <br /> Plagiarism - and What's Next</h4>
                        <p className=" typo m-0">June 8, 2022</p>
                        <p className="typo_tow mb-2 ">I want to share my perspective on OpenSea's efforts to protect <br /> against plagiarism, IP infringement, and fraud. We at OpenSea <br /> feel a huge responsibility to ensu... </p>
                        <button className='btn btn-md btn-primary'>View Post</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blocard
