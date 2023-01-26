import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';
import { IoCart, IoFilterSharp } from 'react-icons/io5';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Activity_prop from '../Activity_prop/Activity_prop';
import { HiOutlineSearch } from 'react-icons/hi';
import Activity_items from '../Activity_items/Activity_items';

// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineAccountBalanceWallet, MdOutlineShoppingCart } from "react-icons/md";
import {AiOutlineInfoCircle} from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaUserCircle } from 'react-icons/fa';
import sola from "../Assets/sola.webp"
import prol from "../Assets/prol.webp"
import ledger from "../Assets/ledger.webp"
import pha from "../Assets/pha.svg"
import phaa from "../Assets/phaa.png"
import metamask from "../Assets/metamask.png"
import { Dropdown } from 'react-bootstrap';
import "./Activity_mob.css";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Activity_mob() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='Activity_mob_main'>
            <Button  onClick={handleShow} className="offcanvas_header_btn ps-0 w-75">
         {/* <MdOutlineAccountBalanceWallet className='fs-2'/> */}
         <div className="sc-29427738-0">
                                    <button width="[object Object]" type="button" className="sc-29427738-0 sc-788bb508-0 hogHsI kame">
                                        <span color="inherit" className="sc-29427738-0 sc-bdnxRM text-dark cdrsRT ijjDTa"><IoFilterSharp /> Filters</span>
                                    </button>
                                </div>
      </Button>
      <Offcanvas className='' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          <div className='d-flex align-items-center  align-item-center '><span><FaUserCircle className='fs-2'></FaUserCircle> </span> <h6 className='wallet_nav_clr'> My wallet</h6>
          <span>
     
    </span>
          </div>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
        <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                            <div className="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                                <div cursor="pointer" aria-expanded="false">
                                                    {/* <input aria-invalid="false" placeholder="Sort by" readonly="" aria-haspopup="true" value="Price low to high" style={{cursor: "pointer"}}/> */}
                                                    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <div className="event_header">Event Type</div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="sale_main">
                                        <span className="sale">Sales</span>
                                        <Link to="/Activity">  <Checkbox
                                            {...label}
                                            defaultChecked
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                        </Link>
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Listings</span>
                                        <Link to="/Activity_listing"> <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        /></Link>
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Offers</span>
                                        <Link to="/Activity_offers"><Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        /></Link>
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Collection offers</span>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Transfers</span>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <div className="event_header">Collections</div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="sc-29427738-0 fxMmBv">
                                        <p className="sc-29427738-0 sc-bdnxRM dVNeWL jRRGWp">
                                            <div className="sc-37393a8-0 iFtgSt sc-e8931d0e-0 cJbnHG">
                                                <div color="gray" className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 gMILgy jSPhMX kKyBpy fYgjHJ">
                                                    <i color="currentColor" value="search" size="24" className="sc-a143597d-0 RovoC material-icons"><HiOutlineSearch /></i>
                                                </div>
                                                <input aria-invalid="false" placeholder="Filter" type="search" value="" style={{ cursor: "text" }} />
                                            </div>
                                        </p>
                                    </div>

                                    <Activity_prop url="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=48 1x, https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64 2x" src="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64" title="CryptoPunks" />

                                    <Activity_prop url="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=48 1x, https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64 2x" title="Bored Ape" />

                                    <Activity_prop url="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=48 1x, https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64 2x" title="Otherdeed" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64 2x" title="Mutant" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64 2x" title="Savage" />
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <div className="event_header">Chains</div>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/arbitrum.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Arbitrum</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/avalanche.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Avalanche</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/bsc.png" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">BNB Chain</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/ethereum.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Ethereum</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/klaytn.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Klaytn</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/optimism.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Optimism</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/polygon.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Polygon</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/solana.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Solana</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>
      </div>
    </div>
  </div>
</div>
                                                    {/* <Accordion className="sc-37393a8-0 bfXCzr sc-9a485e76-0 ggtkBP sc-a3ec9f15-2 dVaSwQ">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header className="acuure">Price low to high</Accordion.Header>
                                                            <Accordion.Body className="acuure_bddy">
                                                                <ul>
                                                                    <li>Recently listed</li>
                                                                    <li>Recently created</li>
                                                                    <li>Recently sold</li>
                                                                    <li>Highest last sale </li>
                                                                    <li>Ending soon </li>
                                                                </ul>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion> */}
                                                    {/* <div className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 kQKAhB jSPhMX kKyBpy fYgjHJ"> */}
                                                    {/* <i aria-label="Show more" color="gray" cursor="pointer" value="keyboard_arrow_down" size="24" className="sc-a143597d-0 dYnUi material-icons"><IoIosArrowDown /></i> */}
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                            <div className="fresnel-container fresnel-lessThan-lg ">
                                            </div>
                                        </div>
        </Offcanvas.Body>
      </Offcanvas>
            {/* <Button variant="" className="bttn mt-4" onClick={handleShow}>
                <div class="sc-29427738-0 sc-630fc9ab-0 sc-3f102755-0 gtDMWH jSPhMX hLGbAz"><div height="100%" width="calc(100vw - 17px)" class="sc-29427738-0 sc-3f102755-1 gHZPOh gpxecR"><div class="fresnel-container fresnel-lessThan-lg "><div width="100%" class="sc-29427738-0 sc-630fc9ab-0 bmVYnU jSPhMX"><div width="100%" class="sc-29427738-0 sc-630fc9ab-0 sc-1242568d-0 iCDJqk jSPhMX gkQzPL"><div width="100%" class="sc-29427738-0 sc-630fc9ab-0 gIUWxk jSPhMX"><button aria-expanded="true" aria-label="Open" class="sc-29427738-0 sc-788bb508-0 dZDA-Dt bpmNDx sc-e120eff9-1 hQaBbF fresnel-lessThan-lg" data-testid="filter-toggle" width="100%" type="button"><span class="sc-29427738-0 sc-bdnxRM sc-e120eff9-0 dVNeWL eimMfF jNMSxT"><div class="sc-29427738-0 sc-630fc9ab-0 dSVLeh jSPhMX"><i color="charcoal" font-weight="600" value="filter_list" size="24" class="sc-a143597d-0 buXgzV material-icons-outlined"><IoFilterSharp /></i></div>Filters</span></button><div class="fresnel-container fresnel-greaterThanOrEqual-lg "></div></div></div></div></div></div></div>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Event Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="sale_main">
                                <span className="sale">Sales</span>
                                <Link to="/Activity">  <Checkbox
                                    {...label}
                                    defaultChecked
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                                </Link>
                            </div>

                            <div className="sale_main">
                                <span className="sale">Listings</span>
                                <Link to="/Activity_listing"> <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                /></Link>
                            </div>

                            <div className="sale_main">
                                <span className="sale">Offers</span>
                                <Link to="/Activity_offers"><Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                /></Link>
                            </div>

                            <div className="sale_main">
                                <span className="sale">Collection offers</span>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <span className="sale">Transfers</span>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel3a-header"
                        >
                            <Typography>Collections</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="sc-29427738-0 fxMmBv">
                                <p className="sc-29427738-0 sc-bdnxRM dVNeWL jRRGWp">
                                    <div className="sc-37393a8-0 iFtgSt sc-e8931d0e-0 cJbnHG">
                                        <div color="gray" className="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 gMILgy jSPhMX kKyBpy fYgjHJ">
                                            <i color="currentColor" value="search" size="24" className="sc-a143597d-0 RovoC material-icons"><HiOutlineSearch /></i>
                                        </div>
                                        <input aria-invalid="false" placeholder="Filter" type="search" value="" style={{ cursor: "text" }} />
                                    </div>
                                </p>
                            </div>

                            <Activity_prop url="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=48 1x, https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64 2x" src="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64" title="CryptoPunks" />

                            <Activity_prop url="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=48 1x, https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64 2x" title="Bored Ape Yacht Club" />

                            <Activity_prop url="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=48 1x, https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64 2x" title="Otherdeed for Otherside" />

                            <Activity_prop url="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64 2x" title="Mutant Hound Collars" />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Chains</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/arbitrum.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Arbitrum</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/avalanche.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Avalanche</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/bsc.png" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">BNB Chain</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/ethereum.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Ethereum</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/klaytn.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Klaytn</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/optimism.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Optimism</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/polygon.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Polygon</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>

                            <div className="sale_main">
                                <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div className="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                            </span>
                                            <img alt="Arbitrum" src="https://opensea.io/static/images/logos/solana.svg" decoding="async" data-nimg="intrinsic" className="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            <noscript>
                                            </noscript>
                                        </span>
                                    </div>
                                    <div className="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Solana</div>
                                </div>
                                <Checkbox
                                    {...label}

                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            </div>
                        </AccordionDetails>
                    </Accordion>


                </Offcanvas.Body>
            </Offcanvas>

            <Activity_items item="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840"
                item_name="Rug Buds" item_nmbr="Rug Buds #668" item_price="0.0049 ETH" item_amount="$5.96"
            />

            <Activity_items item="https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=3840"
                item_name="The Potatoz" item_nmbr="Potatoz#2570" item_price="3.190 ETH" item_amount="$3,891.55"
            />

            <Activity_items item="https://i.seadn.io/gae/rsFEXPGI6BC7BLDmIaQOMyp_7RBURD1ksuHtOZw9VhhXB7kxwU8d98JzYRDXYMmayDSuiY-pno_rJOiamQnqXhUFUBjKEJrwoDrf?auto=format&w=3840"
                item_name="Bored Ape Yatch Club" item_nmbr="7i98" item_price="76 ETH" item_amount="$92,226.76"
            />

            <Activity_items item="https://i.seadn.io/gae/NtBpTM_wdyHUWbTJAZX434jLINoiNDGyDFJT55A-Nm-MSSgNKP3L1E5_PBH-Jb01HmrHiLfTX57KcXN_SQw3VaK2RZdndc-GaeOL?auto=format&w=3840"
                item_name="CryptoPunks" item_nmbr="CryptoPunks #8187" item_price="72.950 ETH" item_amount="$88,525.55"
            />

            <Activity_items item="https://i.seadn.io/gcs/files/d3781f86c3ff626070559d01a85b1f0f.png?auto=format&w=3840"
                item_name="Mutant Hound Collars" item_nmbr="Mutant Hound Collar #4937" item_price="1.390 ETH" item_amount="$16,86.55"
            />

            <Activity_items item="https://i.seadn.io/gae/16VePbNVa-dOXX-M0XGw1bJvoSeY3XvhOM17G42VhpdMpdyoZvuV-d2HQ3x2daXQVI9ibxnq3mdTRyn5tVUZGQwLxGQk2g3sbDtO3w?auto=format&w=3840"
                item_name="Otherdeed for otherside" item_nmbr="82970" item_price="1.700 ETH" item_amount="$2,066.28"
            />

            <Activity_items item="https://i.seadn.io/gcs/files/d3781f86c3ff626070559d01a85b1f0f.png?auto=format&w=3840"
                item_name="Mutant Hound Collars" item_nmbr="Mutant Hound Collar #4937" item_price="1.390 ETH" item_amount="$16,86.55"
            /> */}

        </div>
    )
}

export default Activity_mob