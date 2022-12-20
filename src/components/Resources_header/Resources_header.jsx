import React from "react";
import "./Resources.css";
import R_logo from "../Assets/R_logo.svg";
import R_button from "../Assets/R_button.svg";

function Resources_header() {
    return (
        <div className="resourcs_main_bg">
            <div className="resources_header">
                <div className="main_container_header d-flex">
                    <div className="logo_container d-flex align-items-center">
                        <img src={R_logo} className="Resources_logo" alt="" />
                        <span className="Link_text_open ms-1">OpenSea</span>
                        <span className="Link_text_open" style={{ color: "#2081e2" }}>
                            Learn
                        </span>
                    </div>
                    <div className=" d-flex justify-content-between align-items-center">
                        <div className="header_button_resources d-flex">
                            <div>OpenSea.io</div>
                            <img src={R_button} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="resources_journy">
                <div className="container">
                    <div className="row pt-5 mt-5">
                        {/* <div className="col-md-6 mt-5 ">
                            <div class="column is--hero-learn-left">
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041862db32f882f44254b0_Hero%20img-logo.png" loading="lazy"  data-w-id="f5aaee4c-f2f1-93aa-3bf9-effecc986704" alt="" class="hero-img is--hero-learn react_re_img z-8"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/630418625279de5b10573db7_Hero%20img-Eth%202.png" loading="lazy"data-w-id="80ff8a15-2013-1df8-e49f-0628f48037d2" alt="" class="hero-img is--hero-learn z-7"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63a0a7a3ac157f0f1035a92a_doodles_card-2.png" loading="lazy"data-w-id="04a27994-15ab-ab16-78ab-3eaf44b8faf8" srcset="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63a0a7a3ac157f0f1035a92a_doodles_card-2-p-500.png 500w" sizes="(max-width: 479px) 50vw, (max-width: 767px) 47vw, (max-width: 991px) 23vw, 22vw" alt="" class="hero-img is--hero-learn z-6"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/630418621a3106213adb593e_Hero%20img-Polygon.png" loading="lazy"ata-w-id="70ffe5e2-79ae-c252-6d52-3faccdd9f16b" alt="" class="hero-img is--hero-learn z-5"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041862db32f80bd94254b1_Hero%20img-CoolCat.png" loading="lazy"data-w-id="b2fcc32e-3bc1-2ddb-f321-f135ccb332ed" alt="" class="hero-img is--hero-learn z-4"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041861c0d0e0cd2d52f039_Hero%20img-Klay.png" loading="lazy"data-w-id="73d7cdae-981b-7e3e-3ac2-81bcd0e43f6e" alt="" class="hero-img is--hero-learn z-3"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/63041861ac4ebc52bc6ab32c_Hero%20img--gigapixel.png" loading="lazy" data-w-id="8300d556-57b7-becc-f64c-a7e7e66f4c1b" alt="" class="hero-img is--hero-learn z-2"/>
                                <img src="https://assets-global.website-files.com/6297ced5c59919a3d53d5cc7/630418611a4321f4108ef8cc_Hero%20img-Sol.png" loading="lazy"data-w-id="ed1bb65c-120a-4204-b74b-7b2e1d7414cc" alt="" class="hero-img is--hero-learn z-1" />
                                </div>

                            </div> */}
                            <div className="col-md-6">

                            </div>
                <div className="col-md-6 text-start">
                    <h1 className="resoures_main_heading">
                    Your NFT journey starts here.

                    </h1>
                    <div className="resources_main_minni_heading">
                        <span>Guides, practical tips, and support articles for first-time creators, experienced collectors, and everyone in between.</span>
                    </div>
                <div>
                    <button className="Resources_main_home_buttoon">
                    Start learning
                    </button>
                </div>
                
                    
                                    </div>
                            </div>
                            </div>
                            </div>
                            </div>
                                );
}

                                export default Resources_header;
