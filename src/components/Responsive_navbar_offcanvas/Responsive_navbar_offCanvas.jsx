
import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineAccountBalanceWallet, MdOutlineExplore } from 'react-icons/md';
import { GiArchaeopteryxFossil, GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFillPencilFill, BsInstagram } from 'react-icons/bs';
import { IoIosStats, IoLogoYoutube } from 'react-icons/io';
import { SiDiscord } from 'react-icons/si';
import Accordion from 'react-bootstrap/Accordion';
import pic1 from "../Assets/allnfts-light.svg"
import pic2 from "../Assets/art-light.svg"
import pic3 from "../Assets/collectibles-light.svg"
import pic4 from "../Assets/domain-names-light.svg"
// import Button from 'react-bootstrap/Button';
import pic5 from "../Assets/music-light.svg"
import pic6 from "../Assets/photography-category-light.svg"
import pic7 from "../Assets/sports-light.svg"
import pic8 from "../Assets/trading-cards-light.svg"
import pic9 from "../Assets/utility-light.svg"
import { Link } from 'react-router-dom';
import pic10 from "../Assets/virtual-worlds-light.svg"
import { BiCalendar, BiWorld } from 'react-icons/bi';
import { RiFileCopy2Line } from 'react-icons/ri';

function Responsive_navbar_offCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  return (
    <div>
      
        <Button onClick={handleShow} className="me-2 offcanvas_header_btn p-0">
          <GiHamburgerMenu className='res_pos_icons' />
        </Button>
        <Offcanvas className='responsive_navbar_offcanvas_postiontion' show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header >
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
            {/* <div className='d-flex align-items-center  align-item-center '><span><FaUserCircle className='fs-2'></FaUserCircle> </span> <h6 className='wallet_nav_clr'> My wallet</h6>
              <span>

              </span>
            </div> */}
          </Offcanvas.Header>
         
          <Offcanvas.Body>
       
            <Accordion defaultActiveKey="" flush className='responsive_acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="d-flex align-items-center">
            <MdOutlineExplore className='moblie_view_icons'></MdOutlineExplore>
            <h6 className='moblie_menu_heading'>Explore</h6>
          </div>

        </Accordion.Header>
        <Accordion.Body>
          <div className=''>
          <span onClick={handleClose}><img src={pic1} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> All NFTs</span><br />
          <span onClick={handleClose}><img src={pic2} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Art</span> <br />
          <span onClick={handleClose}><img src={pic3} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Collectibles</span> <br />
          <span onClick={handleClose}><img src={pic4} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Domain Names</span> <br />
          <span onClick={handleClose}><img src={pic5} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Music</span> <br />
          <span onClick={handleClose}><img src={pic6} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Photography</span> <br />
          <span onClick={handleClose}><img src={pic7} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Sports</span> <br />
          <span onClick={handleClose}><img src={pic8} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Tranding Cards</span> <br />
          <span onClick={handleClose}><img src={pic9} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Utility</span> <br />
          <span onClick={handleClose}><img src={pic10} alt="" className='ffr_ppic me-3'/></span><span className='responsive_moblie_links'> Virtual World</span> <br />
            
          </div>
        {/* <a href="#" className='border-bottom'><span><img src={pic1} alt="" className='ffr_ppic me-3'/></span> All NFTs</a> */}
                      {/* <Link  to="/Explore_art" className='border-bottom'><span><img src={pic2} alt="" className='ffr_ppic me-3'/></span> Art</Link> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic3} alt="" className='ffr_ppic me-3'/></span>Collectibles</a> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic4} alt="" className='ffr_ppic me-3'/></span>Domain Names</a> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic5} alt="" className='ffr_ppic me-3'/></span>Music</a> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic6} alt="" className='ffr_ppic me-3'/></span>Photography</a> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic7} alt="" className='ffr_ppic me-3'/></span>Sports</a> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic8} alt="" className='ffr_ppic me-3'/></span>Tranding Cards</a> */}
                      {/* <a href="#" className='border-bottom'><span><img src={pic9} alt="" className='ffr_ppic me-3'/></span>Utility</a> */}
                      {/* <a href="#"><span><img src={pic10} alt="" className='ffr_ppic me-3'/></span>Virtual World</a> */}
  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div className="d-flex align-items-center">
            <BiCalendar className='moblie_view_icons'></BiCalendar>
            <h6 className='moblie_menu_heading'>Drops</h6>
          </div>

        </Accordion.Header>
        <Accordion.Body>
          <div>
            <span onClick={handleClose} className='responsive_moblie_links'>Calendar</span><br />
          </div>
          <div className='mt-4'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Learn more</span><br />

          </div>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <div className="d-flex align-items-center">
            <IoIosStats className='moblie_view_icons'></IoIosStats>
            <h6 className='moblie_menu_heading'>Stats</h6>
          </div>

        </Accordion.Header>
        <Accordion.Body>
        <div>
            <span onClick={handleClose} className='responsive_moblie_links'>Rankings</span><br />
          </div>
          <div className='mt-4'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Activity</span><br />

          </div>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <div className="d-flex align-items-center">
            <RiFileCopy2Line className='moblie_view_icons'></RiFileCopy2Line>
            <h6 className='moblie_menu_heading'>Resources</h6>
          </div>

        </Accordion.Header>
        <Accordion.Body>
        <div>
            <span onClick={handleClose} className='responsive_moblie_links'>Learn</span><br />
          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Help Center</span><br />

          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Platform Status</span><br />

          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Partners</span><br />

          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Taxes</span><br />

          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Blog</span><br />

          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Docs</span><br />

          </div>
          <div className='mt-3'>
            <span onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Newsletter</span><br />

          </div>
        </Accordion.Body>
      </Accordion.Item>
      <div className="d-flex align-items-center ms-3">
            <BsFillPencilFill className='moblie_view_icons'></BsFillPencilFill>
            <h6 className='moblie_menu_heading'>Create</h6>
            </div>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
            <BiWorld className='moblie_view_icons'></BiWorld>
            <h6 className='moblie_menu_heading'>Language</h6>
            </div>
         
          </div>

        </Accordion.Header>
        <Accordion.Body>
        
        <div className=''>
            <span  onClick={handleClose} className='responsive_moblie_links margin_mobbb'>English</span><br />

          </div>
        <div className='mt-3'>
            <span  onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Español</span><br />

          </div>
        <div className='mt-3'>
            <span  onClick={handleClose} className='responsive_moblie_links margin_mobbb'>Deutsch</span><br />

          </div>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

      <button onClick={handleClose} className='mbl_buttton_res w-100'>
        Connect Wallet 
      </button>
      

      <div className="offcanvas_footer_mboile_vielw">
      <div className="d-flex justify-content-center mbole_main_dev_icons">
        <AiOutlineTwitter className='moblie_footer_icons' ></AiOutlineTwitter>
        <BsInstagram className='moblie_footer_icons'></BsInstagram>
        <SiDiscord className='moblie_footer_icons'></SiDiscord>
        <IoLogoYoutube className='moblie_footer_icons'></IoLogoYoutube>
        <SiDiscord className='moblie_footer_icons'></SiDiscord>
      </div>
      </div>
           



            
          </Offcanvas.Body>
        </Offcanvas>


      </div>

   
  )
}

export default Responsive_navbar_offCanvas
