import React from "react";
import "./Nft_main_detail.css";
import { FaEthereum } from "react-icons/fa";
import { MdFavoriteBorder, MdVerified } from "react-icons/md";
import { HiShare } from "react-icons/hi";
import { FiExternalLink, FiMoreHorizontal } from "react-icons/fi";
import nft_iim from "../Accets/monkey.png";
import { IoEyeSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiTimer } from "react-icons/tfi";

function Nft_main_detail() {
  return (
    <div className="container-fluid px-1 px-md-5 pt-5">
      <div className="row my-5 ">
        <div className="col-lg-6 col-sm-12">

          <div className="nft_display border text-center">
            <div className="icons_layer d-flex justify-content-between px-3 pt-1 my-2">
              <FaEthereum className="favort"/>
              <div className="right_sid_icon d-flex align-items-center">
                <FiExternalLink className="favort"/>
                <p className="m-0">0</p>
                <MdFavoriteBorder className="favort" />
              </div>
            </div>
            <div className="nft_immg">
                <img src={nft_iim} alt="" className="nft__display_styl" />
            </div>
          </div>

        </div>

        <div className="col-lg-6 col-sm-12">
            <div className="right_first_link d-flex justify-content-between ">
                <p className="azu_1st "><a href="" className="text-decoration-none">Azuka Ape Official
                <MdVerified className=' fs-4 ps-1 '/>
                </a></p>
                <div>
                <button className="fst_bbtn"><HiShare/> </button>
                <button className="fst_bbtn"><FiMoreHorizontal/></button>
                </div>
            </div>

            <h4 className="text-start main_titl">Azuka Ape #32331</h4>

            <p className="mt-2">Owned by <a href="" className="text-decoration-none">AzukaApeFounder</a></p>

            <div className="d-flex">
            <div className="ps-2 d-flex ">
                <IoEyeSharp className="mt-1 fs-5"/>
                <p className="view_heart_ppt">273 views</p>
            </div>
            <div className="ps-5 d-flex "> 
            <AiOutlineHeart className="mt-1 fs-5"/>
            <p className="view_heart_ppt">2 favorites</p></div>
            <div className="ps-5 d-flex">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><mask height="24" id="mask0_1845_35583" maskUnits="userSpaceOnUse" width="24" x="0" y="0"><rect fill="currentColor" height="24" width="24"></rect></mask><g><path d="M6.5 11L12 2L17.5 11H6.5ZM17.5 22C16.25 22 15.1873 21.5627 14.312 20.688C13.4373 19.8127 13 18.75 13 17.5C13 16.25 13.4373 15.1873 14.312 14.312C15.1873 13.4373 16.25 13 17.5 13C18.75 13 19.8127 13.4373 20.688 14.312C21.5627 15.1873 22 16.25 22 17.5C22 18.75 21.5627 19.8127 20.688 20.688C19.8127 21.5627 18.75 22 17.5 22ZM3 21.5V13.5H11V21.5H3ZM17.5 20C18.2 20 18.7917 19.7583 19.275 19.275C19.7583 18.7917 20 18.2 20 17.5C20 16.8 19.7583 16.2083 19.275 15.725C18.7917 15.2417 18.2 15 17.5 15C16.8 15 16.2083 15.2417 15.725 15.725C15.2417 16.2083 15 16.8 15 17.5C15 18.2 15.2417 18.7917 15.725 19.275C16.2083 19.7583 16.8 20 17.5 20ZM5 19.5H9V15.5H5V19.5ZM10.05 9H13.95L12 5.85L10.05 9Z" fill="currentColor"></path></g></svg>
                 <p className="view_heart_ppt">PFPs</p></div>
        </div>
        <div className="list_menu_some">
        <ul class="list-group">
  <li class="list-group-item group_list_m_some py-3"><TfiTimer className="mb-1 fs-5"/> Sale ends February 18, 2023 at 9:15 AM GMT+5 </li>
  <li class="list-group-item"><p className="Current_price">Current price</p>
  <div className="d-flex "><h3>0.094 ETH</h3> <p className="Current_price ps-2 mt-2">$151.57</p></div>
  <div className="d-flex justify-content-evenly ">
    <button className="btn btn-lg btn-primary w-100 me-2 py-3">Add to Cart</button>
    <button className="btn btn-lg text-dark border Add_to  w-100 ms-2 py-3">Make offer</button>
  </div>
  </li>

</ul>
        </div>
        </div>
        
      </div>

    </div>
  );
}

export default Nft_main_detail;
