// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import "./stylishmain.css"
import React, { useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import "./First_openn.css";
function Frist_open() {
  return (
    <div className="container-fluid backgrid ">
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        loop={true}
        navigation={true}
        Autoplay={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-5"
      >
        <SwiperSlide className="silde befr">
          <Link to="/Profile_collection" className="text-decoration-none">
            <div className="uper">
              <video
                src="./images/banner.mp4"
                autoPlay
                loop
                playsinline
                muted
                className="aga_in parko"
              ></video>
              <div className="cover">
                <div className="row for_position_main text-white">
                  <div className="for_wrt col-lg-11 col-md-9">
                    <div className="in_between mt-4 text-start">
                      <h3 className="fw-bolder lfm">
                        inBetweeners x Dolce&Gabbana Drip
                        <MdVerified className="ms-1" />
                      </h3>
                      <h6 className="fw-bold lfm">
                        By&nbsp;ItsMeGianPiero
                        <MdVerified className="ms-1" />
                      </h6>
                      <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                    </div>
                    <div className="row main_time_box mt-4 ">
                      <div className="col-lg-5 col-md-2 time">
                        <button className="btn w-100 text-white minto">
                          MINTING NOW
                        </button>
                      </div>
                      <div className="col-lg-7 col-md-2 view gYb ">
                        <div className="bell_1 me-3">
                          <AiOutlineBell className="fs-4 " />
                        </div>
                        <div className="bell px-4 py-3">
                          <span className="fw-bold">View drop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="silde befr">
          <Link to="/Profile_collection" className="text-decoration-none">
            <div className="uper">
              <video
                src="./images/Gemesis - Drop.mp4"
                autoPlay
                loop
                playsinline
                muted
                className="aga_in parko"
              ></video>
              <div className="cover">
                <div className="row for_position_main text-white">
                  <div className="for_wrt col-lg-11 col-md-9">
                    <div className="in_between mt-4 text-start">
                      <h3 className="fw-bolder lfm">
                        inBetweeners x Dolce&Gabbana Drip
                        <MdVerified className="ms-1" />
                      </h3>
                      <h6 className="fw-bold lfm">
                        By&nbsp;ItsMeGianPiero
                        <MdVerified className="ms-1" />
                      </h6>
                      <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                    </div>
                    <div className="row main_time_box mt-4 ">
                      <div className="col-lg-5 col-md-2 time">
                        <button className="btn btn-lg text-white minto">
                          MINTING NOW
                        </button>
                      </div>
                      <div className="col-lg-7 col-md-2 view gYb ">
                        <div className="bell_1 me-3">
                          <AiOutlineBell className="fs-4 " />
                        </div>
                        <div className="bell px-4 py-3">
                          <span className="fw-bold">View drop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="silde befr">
          <Link to="/Profile_collection" className="text-decoration-none">
            <div className="uper">
              <video
                src="./images/banner.mp4"
                autoPlay
                loop
                playsinline
                muted
                className="aga_in parko"
              ></video>
              <div className="cover">
                <div className="row for_position_main text-white">
                  <div className="for_wrt col-lg-11 col-md-9">
                    <div className="in_between mt-4 text-start">
                      <h3 className="fw-bolder lfm">
                        inBetweeners x Dolce&Gabbana Drip
                        <MdVerified className="ms-1" />
                      </h3>
                      <h6 className="fw-bold lfm">
                        By&nbsp;ItsMeGianPiero
                        <MdVerified className="ms-1" />
                      </h6>
                      <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                    </div>
                    <div className="row main_time_box mt-4 ">
                      <div className="col-lg-5 col-md-2 time">
                        <button className="btn btn-lg text-white minto">
                          MINTING NOW
                        </button>
                      </div>
                      <div className="col-lg-7 col-md-2 view gYb ">
                        <div className="bell_1 me-3">
                          <AiOutlineBell className="fs-4 " />
                        </div>
                        <div className="bell px-4 py-3">
                          <span className="fw-bold">View drop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="silde befr">
          <Link to="/Profile_collection" className="text-decoration-none">
            <div className="uper">
              <video
                src="./images/Gemesis - Drop.mp4"
                autoPlay
                loop
                playsinline
                muted
                className="aga_in parko"
              ></video>
              <div className="cover">
                <div className="row for_position_main text-white">
                  <div className="for_wrt col-lg-11 col-md-9">
                    <div className="in_between mt-4 text-start">
                      <h3 className="fw-bolder lfm">
                        inBetweeners x Dolce&Gabbana Drip
                        <MdVerified className="ms-1" />
                      </h3>
                      <h6 className="fw-bold lfm">
                        By&nbsp;ItsMeGianPiero
                        <MdVerified className="ms-1" />
                      </h6>
                      <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                    </div>
                    <div className="row main_time_box mt-4 ">
                      <div className="col-lg-5 col-md-2 time">
                        <button className="btn btn-lg text-white minto">
                          MINTING NOW
                        </button>
                      </div>
                      <div className="col-lg-7 col-md-2 view gYb ">
                        <div className="bell_1 me-3">
                          <AiOutlineBell className="fs-4 " />
                        </div>
                        <div className="bell px-4 py-3">
                          <span className="fw-bold">View drop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="silde befr">
          <Link to="/Profile_collection" className="text-decoration-none">
            <div className="uper">
              <video
                src="./images/banner.mp4"
                autoPlay
                loop
                playsinline
                muted
                className="aga_in parko"
              ></video>
              <div className="cover">
                <div className="row for_position_main text-white">
                  <div className="for_wrt col-lg-11 col-md-9">
                    <div className="in_between mt-4 text-start">
                      <h3 className="fw-bolder lfm">
                        inBetweeners x Dolce&Gabbana Drip
                        <MdVerified className="ms-1" />
                      </h3>
                      <h6 className="fw-bold lfm">
                        By&nbsp;ItsMeGianPiero
                        <MdVerified className="ms-1" />
                      </h6>
                      <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                    </div>
                    <div className="row main_time_box mt-4 ">
                      <div className="col-lg-5 col-md-2 time">
                        <button className="btn btn-lg text-white minto">
                          MINTING NOW
                        </button>
                      </div>
                      <div className="col-lg-7 col-md-2 view gYb ">
                        <div className="bell_1 me-3">
                          <AiOutlineBell className="fs-4 " />
                        </div>
                        <div className="bell px-4 py-3">
                          <span className="fw-bold">View drop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="silde befr">
          <Link to="/Profile_collection" className="text-decoration-none">
            <div className="uper">
              <video
                src="./images/Gemesis - Drop.mp4"
                autoPlay
                loop
                playsinline
                muted
                className="aga_in parko"
              ></video>
              <div className="cover">
                <div className="row for_position_main text-white">
                  <div className="for_wrt col-lg-11 col-md-9">
                    <div className="in_between mt-4 text-start">
                      <h3 className="fw-bolder lfm">
                        inBetweeners x Dolce&Gabbana Drip
                        <MdVerified className="ms-1" />
                      </h3>
                      <h6 className="fw-bold lfm">
                        By&nbsp;ItsMeGianPiero
                        <MdVerified className="ms-1" />
                      </h6>
                      <h6 className="fw-bold lfm">2,000 items. 0.88 ETH</h6>
                    </div>
                    <div className="row main_time_box mt-4 ">
                      <div className="col-lg-5 col-md-2 time">
                        <button className="btn btn-lg text-white minto">
                          MINTING NOW
                        </button>
                      </div>
                      <div className="col-lg-7 col-md-2 view gYb ">
                        <div className="bell_1 me-3">
                          <AiOutlineBell className="fs-4 " />
                        </div>
                        <div className="bell px-4 py-3">
                          <span className="fw-bold">View drop</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Frist_open;
