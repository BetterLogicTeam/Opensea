// import React from 'react'
import "./Ecsnft.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import ninja from "../Assets/ninja.avif";
import ninja1 from "../Assets/da4525d7-9eb6-4e0b-9056-09aea4d1a33d.avif";
import ninja2 from "../Assets/riDbUm07GjqPcnK3Ll7r7y4b6lHNNQS4AHtghn46WXmic0JnOG87XgaUWkTmb1iYS80oyaYfx6kDSCGd62wXH7Lp2REIwfeekwYVtWA.avif";
import ninja3 from "../Assets/0b8ea573-c2b0-431d-8538-4034ad57966a.avif";
import ninja4 from "../Assets/4541c8d0-0ed1-4a25-a93d-8bb55dc76653.avif";
import ninja5 from "../Assets/88bb0626-fabf-43e7-b3fa-99e2aeef8a46.avif";
import Updated_card from "../Updated_card/Updated_card";
import upd from "../Assets/upd.webp";
import upd1 from "../Assets/upd5.avif";
import upd2 from "../Assets/upd4.avif";
import upd3 from "../Assets/upd2.avif";
import upd4 from "../Assets/upd1.avif";

import Boxtow from "../simple_tow/Boxtow";
import art from "../Assets/R_nft1.png";
import art2 from "../Assets/R_nft2.png";
import art3 from "../Assets/R_nft3.png";
import art4 from "../Assets/collectibles.png";
import art5 from "../Assets/photography-category.png";
import tct from "../Assets/tct.avif";
import tct1 from "../Assets/tct1.avif";
import tct2 from "../Assets/tct2.avif";

function Ecsnft() {
  return (
    <div>
      <div className="container-fluid p-3 p-md-4">
        {/* row of noteable collection is starting from here  */}

        <div className="row">
          <div className="col-lg-12">
            <div className="mt-4">
              <h4 className="text-start main_home_heading">
                Notable collections
              </h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                {/* this is the old card which was made two months age and now it is being changed  */}

                {/* <div className='main_box'>
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

                </div> */}

                {/* the old card ends here in this section  */}

                <Updated_card card_heading="AIORBIT" img_url_card={ninja} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="DeGods" img_url_card={ninja1} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Otherside Vessels"
                  img_url_card={ninja2}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="AIORBIT" img_url_card={ninja3} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="PARTS" img_url_card={ninja4} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="y00ts  " img_url_card={ninja5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* and it ends here  */}

        {/* row of Top Collector Buys Today starts from here  */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="mt-4">
              <h4 className="text-start main_home_heading">
                Top Collector Buys Today
              </h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                {/* this is the old card which was made two months age and now it is being changed  */}

                {/* <div className='main_box'>
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

                </div> */}

                {/* the old card ends here in this section  */}

                <Updated_card
                  card_heading="LlamaPix Genesis"
                  img_url_card={ninja5}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Nakamapes" img_url_card={tct} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Otherside Vessels"
                  img_url_card={ninja4}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="goblintown.wtf"
                  img_url_card={tct1}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Otherdeed Expanded"
                  img_url_card={ninja3}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Sappy Seals  "
                  img_url_card={tct2}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* it ends here  */}

        {/* row of trending in art starts from here  */}

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="text-start mb-4">
              <h4 className="main_home_heading mb-0 mt-3">Trending in Art</h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="_chirp__chirp_"
                  img_url_card={upd}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Saved Souls"
                  img_url_card={ninja2}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="CrypToadz by GREMPLIN"
                  img_url_card={upd4}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="SchizoPosters"
                  img_url_card={upd3}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="REWORLD by Roope Rainisto"
                  img_url_card={upd1}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="The Memes by 6529"
                  img_url_card={upd2}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* and it ends here  */}

        {/* row of PFPs starts from here  */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="mt-4">
              <h4 className="text-start main_home_heading">Trending in PFPs</h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Azuki" img_url_card={ninja5} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Bored Ape Yacht Club"
                  img_url_card={tct}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Meebits" img_url_card={ninja4} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Sappy Seals" img_url_card={tct1} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Nakamigos" img_url_card={ninja3} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Sappy Seals  "
                  img_url_card={tct2}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* and i ends here  */}

        {/* row of trending in gaming starts from here  */}

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="text-start mb-4">
              <h4 className="main_home_heading mb-0 mt-3">
                Trending in Gaming
              </h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="MegaForce Sentinels"
                  img_url_card={upd1}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="HV-MTL" img_url_card={ninja4} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Metroverse Genesis"
                  img_url_card={upd}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Soulja Boy 3D Game NFT"
                  img_url_card={upd4}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Citizens of Bulliever Island"
                  img_url_card={upd3}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Beep Boop Robot Dogs"
                  img_url_card={upd2}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* and its end here  */}

        {/* row of trending in memeber ship starts from here  */}

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="mt-4">
              <h4 className="text-start main_home_heading">
                Trending in Memberships
              </h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Admit One" img_url_card={ninja5} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Exchange Pass" img_url_card={tct} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="adidas Originals Into the Metaverse"
                  img_url_card={ninja4}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Steady Stack Titans Official"
                  img_url_card={tct1}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="Wumbo Pass" img_url_card={ninja3} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="ConiunPass  " img_url_card={tct2} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* and it ends here  */}

        {/* row of trending in Photography   starts from here  */}

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="text-start mb-4">
              <h4 className="main_home_heading mb-0 mt-3">
                Trending in Photography
              </h4>
            </div>
            <Swiper
              slidesPerView={5}
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
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="b/w by like-mike"
                  img_url_card={ninja}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Editions x Guido"
                  img_url_card={upd4}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card card_heading="AIORBIT" img_url_card={upd1} />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Editions by Emanuele Ferrari"
                  img_url_card={upd3}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Large collection v1"
                  img_url_card={upd2}
                />
              </SwiperSlide>
              <SwiperSlide className="silde befr">
                <Updated_card
                  card_heading="Moongirls by Emanuele Ferrari "
                  img_url_card={upd4}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* it ends here  */}

        {/* part of nft 101 is here  */}
        <div>
          <div className=" container-fluid mt-5 pt-5    mb-5 px-0">
            <div className="text-start txx ps-0 ps-md-3">
              <h4 className="main_home_heading">NFT 101</h4>
            </div>
            <div className="grid-pic-art">
              <Boxtow simpleimg={art} simh2="What is an NFT?" />
              <Boxtow simpleimg={art2} simh2="How to buy an NFT" />
              <Boxtow simpleimg={art3} simh2="What is minting?" />
              <Boxtow
                simpleimg={art4}
                simh2="How to stay protected in web3"
                className="upp"
              />
              <Boxtow
                simpleimg={art5}
                simh2="How to create an NFT on OpenSea   "
              />
            </div>
          </div>
        </div>

        {/* it ends here  */}
      </div>
    </div>
  );
}

export default Ecsnft;
