import React from 'react'
import "./Minnt.css"
import { MdVerified } from 'react-icons/md';
import msll from "../Assets/collection_logo_sml.avif"
import ProgressBar from 'react-bootstrap/ProgressBar';

function Minnt() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='fst_aB_mIn'>
                            <h5 className='fw-bold text-start'>About this collection</h5>
                            <div className='d-flex justfy-content-center mt-3'>
                                <><img src={msll} alt="" className='slmo_img' /></>
                                <h6 className='fw-bold d-flex align-items-center me-1 ixd'>inBetweeners  x  Dolce&Gabbana Drip</h6>
                                <span className=''><MdVerified className='veri' /></span>
                            </div>
                            <p className='mt-3 text-start'>The inBetweeners x Dolce&Gabbana and UNXD Drip Collection is the <br /> next installment of a collaboration that celebrates works between <br /> the two Italian groups. Dolce&Gabbana's heritage shines through <br /> GianPiero's inBetweeners, and leans into the power and excitement <br /> of web3. The Bears by GianPiero serve as a motif for Dolce&Gabbana <br /> products as the inBetweener's Bears mesh the curious and <br /> playfulness with DG,s elegance. We are excited to introduce a new <br /> era in the world of luxury fashion and art that spreads peace, love, <br /> and happiness around the world.</p>
                            <div className='mt-4'>
                                <div className='d-flex justify-content-between'>
                                    <span className='fw-bold'>75.9% minted</span>
                                    <span className='text-muted'>759/1,000</span>
                                </div>
                                <span className=''><ProgressBar variant="primary" now={80} className="progresh mt-2" /></span>
                            </div>
                            <div className='mt-4 border'>
                                <h5 className='fw-bold'>Public Mint</h5>
                                <h6 className='fw-bold'>0.88 ETH</h6>
                                <h6 className="text-muted">December 14 at 2:00 AM GMT+5</h6>
                                <h6 className="text-muted">Limit 10 per wallet</h6>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    )
}

export default Minnt