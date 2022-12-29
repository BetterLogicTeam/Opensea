import React, { useState } from 'react'
import "./Navtr.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { BiSearchAlt2 } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import pic1 from "../Assets/allnfts-light.svg"
import pic2 from "../Assets/art-light.svg"
import pic3 from "../Assets/collectibles-light.svg"
import pic4 from "../Assets/domain-names-light.svg"
import Button from 'react-bootstrap/Button';
import pic5 from "../Assets/music-light.svg"
import pic6 from "../Assets/photography-category-light.svg"
import pic7 from "../Assets/sports-light.svg"
import pic8 from "../Assets/trading-cards-light.svg"
import pic9 from "../Assets/utility-light.svg"
import pic10 from "../Assets/virtual-worlds-light.svg"
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { BsGrid3X3 } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Profile_modal from '../Profile_modal/Profile_modal';
import Wallet_offcanvas from '../Wallet_offcanvas/Wallet_offcanvas';
import Wallet_ofcanvas_nav from '../Wallet_offcanvas_nav/Wallet_ofcanvas_nav';


function Navtr() {
  const [modalShow, setModalShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
      <div className="container-fluid p-0 pil_er ">
        <div className="row m-0 p-0 nav-back">
            <div className="col-lg-12 p-0">

            <Navbar collapseOnSelect expand="lg" className='bg-dark' >
      <Container fluid  className='d-flex justify-content-between'>
        <Navbar.Brand href="#home">
         <Link to="/" className='text-decoration-none'> <div className='main_logo d-flex'>
            <span><img src="./images/logo.svg" alt="opensea" className='lo_pi' /></span>
            <div className='d-flex align-items-center poss'><h5 className='open text-white'>OpenSea</h5></div>
          </div></Link>
        </Navbar.Brand>

        <Nav className="m-0">
          <form action="/action_page.php" className='d-none d-md-flex main_ch_bar'>
             <div className='d-flex align-items-center'><BiSearchAlt2 className="fs-4 text-white"/></div>
             <Form.Control type="search " placeholder="Search items, colloections, and accounts" className="sbar d-none d-md-block forM" aria-label="Search"/>
             <div className='slg forM'>/</div>
          </form>
          </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='rit '>
        

          <ul className='min_ul '>

            <div className='m-0 p-0'>
              <div className="in_edsr colomo">

                <li className='explr_l'>
                    <div className="explore">
                    <button className="dropbtn text-white for_bol for_inhi">Explore</button>
                    <div className="explore-content text-start">
                      <a href="#" className='border-bottom'><span><img src={pic1} alt="" className='ffr_ppic me-3'/></span> All NFTs</a>
                      <a href="#" className='border-bottom'><span><img src={pic2} alt="" className='ffr_ppic me-3'/></span> Art</a>
                      <a href="#" className='border-bottom'><span><img src={pic3} alt="" className='ffr_ppic me-3'/></span>Collectibles</a>
                      <a href="#" className='border-bottom'><span><img src={pic4} alt="" className='ffr_ppic me-3'/></span>Domain Names</a>
                      <a href="#" className='border-bottom'><span><img src={pic5} alt="" className='ffr_ppic me-3'/></span>Music</a>
                      <a href="#" className='border-bottom'><span><img src={pic6} alt="" className='ffr_ppic me-3'/></span>Photography</a>
                      <a href="#" className='border-bottom'><span><img src={pic7} alt="" className='ffr_ppic me-3'/></span>Sports</a>
                      <a href="#" className='border-bottom'><span><img src={pic8} alt="" className='ffr_ppic me-3'/></span>Tranding Cards</a>
                      <a href="#" className='border-bottom'><span><img src={pic9} alt="" className='ffr_ppic me-3'/></span>Utility</a>
                      <a href="#"><span><img src={pic10} alt="" className='ffr_ppic me-3'/></span>Virtual World</a>
                   </div>
                   </div>
                </li>
                <li>
                <Nav.Link href="#pricing" className='text-white for_bol'><Link to="/Drop" className='text-white text-decoration-none'> Drops</Link></Nav.Link>
                </li>
                <li>
                 <div className="stats">
                   <button className="stats-dropbtn text-white for_bol">Stats</button>
                   <div className="stats-content text-start">
                    <a href="#" className='border-bottom'>Rankings</a>
                    <a href="#" className='border-bottom'>Activity</a>
                   </div>
                  </div>
                </li>
                <li>
                  <div className="resource">
                  <Link to="/resources_main_page" className='text-decoration-none'>
                     <button className="resource-dropbtn text-white for_bol">Resources</button>
                     </Link>
                    
                      <div className="resource-content text-start">
                        <a href="#" className='border-bottom'>Learn</a>
                        <a href="#" className='border-bottom'>Help Center</a>
                        <a href="#" className='border-bottom'>Collectibles</a>
                        <a href="#" className='border-bottom'>Platform Status</a>
                       <Link to='/R_full_partner'> <a href="#" className='border-bottom'>Partners</a></Link>
                        <Link to="/R_full_tax_page" className='text-decoration-none'>    <a href="#" className='border-bottom'>Taxes</a> </Link>
                        <a href="#" className='border-bottom'>Blog</a>
                        <a href="#" className='border-bottom'>Docs</a>
                        <a href="#">Newsletter</a>
                      </div>
                  </div>
                </li>
              </div>
            </div>
            
                  {/* icon list */}
            <div>
              <div className="ico_box for_cen">

                <div className='accoutn'>
                  <li>
                    <div className="icon">
                      <button className="icon-dropbtn text-white" onClick={() => setModalShow(true)}><RiAccountCircleLine className='fs-2'/></button>
                       <div className="icon-content text-start">


      <Profile_modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                       <a href="#" className='border-bottom'><BsFillPersonFill className='oci_F fs-5 me-3'/> Profile</a>
                       <a href="#" className='border-bottom'><MdOutlineFavoriteBorder className='oci_F fs-5 me-3'/>Favourites</a>
                       <a href="#" className='border-bottom'><MdVisibility className='oci_F fs-5 me-3'/>Watch List</a>
                       <a href="#" className='border-bottom'><BsGrid3X3 className='oci_F fs-5 me-3'/>My Collections</a>
                       {/* <a href="#" className='border-bottom'>Partners</a> */}
                       <a href="#" className='border-bottom'><MdEdit className='oci_F fs-5 me-3'/>Create</a>
                       <a href="#" className='border-bottom'><IoMdSettings className='oci_F fs-5 me-3'/>Settings</a>
                       <a href="#" className='border-bottom'><MdLanguage className='oci_F fs-5 me-3'/>Language</a>
                       <a href="#"><FaMoon className='oci_F fs-5 me-3'/>Night Mode</a>
                       </div>
                    </div>
                  </li>
                </div>

                <div className='vilt'>
                  <li>
                    <div>
                    <>                  {[ 'end' ].map((placement, idx) => (
        <Wallet_ofcanvas_nav key={idx} placement={placement} name={placement} />
      ))}</>
   
                    {/* <button className="icon-dropbtn text-white"><MdOutlineAccountBalanceWallet  className='fs-2'/></button> */}
                    </div>
                  </li>
                </div>

                <div className='cart'>
                  <li>
                  <div>
                    {/* <Wallet_offcanvas/> */}
                    <>                  {[ 'end' ].map((placement, idx) => (
        <Wallet_offcanvas key={idx} placement={placement} name={placement} />
      ))}</>
  
                  {/* <Button " onClick={handleShow} className="me-2">
                    there
      
      </Button> */}
                    {/* <button className="icon-dropbtn text-white"><MdOutlineShoppingCart className='fs-2'/></button> */}
                    </div>
                  </li>
                </div>

              </div>
            </div>
          </ul>                  
                             
        
        </Navbar.Collapse>
      </Container>
    </Navbar>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navtr
