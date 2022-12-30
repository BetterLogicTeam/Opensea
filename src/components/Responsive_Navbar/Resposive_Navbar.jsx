import React from 'react'
import "./Responsive_Navbar.css"
import responsive_logo from "../Assets/responsive_logo.svg"
import {BsSearch} from "react-icons/bs"
import { MdOutlineShoppingCart } from 'react-icons/md'
import {GiHamburgerMenu} from "react-icons/gi"
import Responsive_navbar_offCanvas from '../Responsive_navbar_offcanvas/Responsive_navbar_offCanvas'

function Resposive_Navbar() {
  return (
    <div className='container-fluid py-2'>
        <div className="main_responsive_navbar d-flex justify-content-between align-items-center">
            <div className='d-flex align-items-center'>
                <img src={responsive_logo} className='responsive_logo' alt="" />
                <div>
                    <h6 className='logo_name_responsive'>opensea</h6>
                </div>

            </div>
            <div className="responsive_avbar_icons">
                <div className='d-flex'>
                <BsSearch className='res_pos_icons me-2'></BsSearch>
                <MdOutlineShoppingCart className='res_pos_icons me-2'></MdOutlineShoppingCart>
                {/* <GiHamburgerMenu className='res_pos_icons'></GiHamburgerMenu> */}
                                {[ 'end' ].map((placement, idx) => (
        <Responsive_navbar_offCanvas key={idx} placement={placement} name={placement} />
      ))}
                </div>
            </div>

        </div>
       

      
    </div>
  )
}

export default Resposive_Navbar
