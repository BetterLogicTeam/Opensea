// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "./stylishmain.css"
import React, { useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import Frist_card from "../Frist_card/Frist_card";
import ninja from "../Assets/ninja.avif"
import ninja1 from "../Assets/da4525d7-9eb6-4e0b-9056-09aea4d1a33d.avif"
import ninja2 from "../Assets/riDbUm07GjqPcnK3Ll7r7y4b6lHNNQS4AHtghn46WXmic0JnOG87XgaUWkTmb1iYS80oyaYfx6kDSCGd62wXH7Lp2REIwfeekwYVtWA.avif"
import ninja3 from "../Assets/0b8ea573-c2b0-431d-8538-4034ad57966a.avif"
import ninja4 from "../Assets/4541c8d0-0ed1-4a25-a93d-8bb55dc76653.avif"
import ninja5 from "../Assets/88bb0626-fabf-43e7-b3fa-99e2aeef8a46.avif"
import { Link } from "react-router-dom";
function Frist_open() {
  return (
    <div className="container-fluid backgrid ">
      <div className=' ps_fixed'><h1 className='text-center pb-3  top_margin'>Explore, collect, and sell NFTs</h1></div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        navigation={true}
        Autoplay={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='silde befr'>
          <Link to="/Profile_collection"><Frist_card img1={ninja} h1="KPR" h2="Floor:0,24 ETH" /></Link>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
          <Link to="/Profile_collection"><Frist_card img1={ninja1} h1="KPR" h2="Floor:0,24 ETH" /></Link>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
          <Link to="/Profile_collection"><Frist_card img1={ninja2} h1="KPR" h2="Floor:0,24 ETH" /></Link>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
          <Link to="/Profile_collection"><Frist_card img1={ninja3} h1="KPR" h2="Floor:0,24 ETH" /></Link>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
          <Link to="/Profile_collection"><Frist_card img1={ninja4} h1="KPR" h2="Floor:0,24 ETH" /></Link>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
          <Link to="/Profile_collection"><Frist_card img1={ninja5} h1="KPR" h2="Floor:0,24 ETH" /></Link>
        </SwiperSlide>

      </Swiper>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='silde befr'>
        <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/9dcc.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/dcc.avif" alt="" className='second_pic bg-white' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>9dcc ITERATION-02 Proof of</div>
                            </div>
                        </div>
            
                     </div>

                </div>
           
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/krap.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/krpin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Krapopolis Krap Chickens</div>
                            </div>
                        </div>
            
                     </div>

                </div>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/metro.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/metin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Metroverse Genesis</div>
                            </div>
                        </div>
            
                     </div>

                </div>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/neo.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/ntin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Neo Tokyo Citizens</div>
                            </div>
                        </div>
            
                     </div>

                </div>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/super.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/spin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Supercute World</div>
                            </div>
                        </div>
            
                     </div>

                </div>
        </SwiperSlide>
        <SwiperSlide className='silde befr'>
        <div className='main_box'>
                     <div className='fst_pic_uper'>
                        <span className='frsts_pan'>
                        <img src="./images/coolcat.avif" alt="" className='frst_pic'/>
                        </span>
                    </div>

                     <div className='lower d-flex'>

                        <div className='lower_pic_uper'>
                           <span className='scnds_spn'>
                              <img src="./images/coolin.avif" alt="" className='second_pic' />
                           </span>
                        </div>

                        <div className='heading_uper'>
                            <div className='undr_heading'>
                                <div className='heading'>Cool Cats Football Club</div>
                            </div>
                        </div>
            
                     </div>

                </div>
        </SwiperSlide>
        
      </Swiper> */}
      

    </div>

  )
}

export default Frist_open