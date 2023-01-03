import React from 'react';
import "./Activity.css";
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoCart, IoFilterSharp } from 'react-icons/io5';
import Activity_prop from '../Activity_prop/Activity_prop';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Activity() {

    const trending_Data = [{
        linkUrl: [
            { 'url': "https://i.seadn.io/gcs/files/2754ce09410ac26f95a1c44e2719dc6f.jpg?auto=format&w=3840" },
            { 'url': "https://i.seadn.io/gcs/files/f980181df268011a4491137fc71afdb5.jpg?auto=format&w=128" }
        ],
        title: "Trump Digital Trading Cards"
    }
    ]


    return (
        <div>
            <div className="shaadoow">
                <div class="fresnel-container fresnel-greaterThanOrEqual-lg sc-1242568d-1 dZzJwG">
                    <div display="flex" height="100%" class="sc-29427738-0 sc-e1213540-0 dqOkeF hdXdDy">
                        <div width="100%" class="sc-29427738-0 sc-630fc9ab-0 iCDJqk jSPhMX">
                            <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                <div class="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                    <button aria-expanded="true" aria-label="Close" data-testid="filter-toggle" class="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX" type="button">
                                        <span class="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                                            <i color="charcoal" font-weight="600" value="filter_list" size="24" class="sc-a143597d-0 buXgzV material-icons-outlined"><IoFilterSharp /></i>
                                        </span></button></div></div></div></div></div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 accor_main">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="accur_item" eventKey="0">
                                <Accordion.Header><div className="event_header">Event Type</div></Accordion.Header>
                                <Accordion.Body>
                                    <div className="sale_main">
                                        <span className="sale">Sales</span>
                                        <Checkbox
                                            {...label}
                                            defaultChecked
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Listings</span>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <span className="sale">Offers</span>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
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
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item className="accur_item" eventKey="1">
                                <Accordion.Header><div className="event_header">Collections</div></Accordion.Header>
                                <Accordion.Body>

                                    <div class="sc-29427738-0 fxMmBv">
                                        <p class="sc-29427738-0 sc-bdnxRM dVNeWL jRRGWp">
                                            <div class="sc-37393a8-0 iFtgSt sc-e8931d0e-0 cJbnHG">
                                                <div color="gray" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 gMILgy jSPhMX kKyBpy fYgjHJ">
                                                    <i color="currentColor" value="search" size="24" class="sc-a143597d-0 RovoC material-icons"><HiOutlineSearch /></i>
                                                </div>
                                                <input aria-invalid="false" placeholder="Filter" type="search" value="" style={{ cursor: "text" }} />
                                            </div>
                                        </p>
                                    </div>

                                    <Activity_prop url="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=48 1x, https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64 2x" src="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64" title="CryptoPunks" />

                                    <Activity_prop url="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=48 1x, https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64 2x" title="Bored Ape Yacht Club" />

                                    <Activity_prop url="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=48 1x, https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64 2x" title="Otherdeed for Otherside" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64 2x" title="Mutant Hound Collars" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64 2x" title="Savage Nation" />

                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item className="accur_item" eventKey="2">
                                <Accordion.Header><div className="event_header">Event Type</div></Accordion.Header>
                                <Accordion.Body>
                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/arbitrum.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Arbitrum</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/avalanche.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Avalanche</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/bsc.png" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">BNB Chain</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/ethereum.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Ethereum</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/klaytn.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Klaytn</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/optimism.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Optimism</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/polygon.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Polygon</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                    <div className="sale_main">
                                        <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                            <div class="sc-29427738-0 sc-630fc9ab-0 iihyIq jSPhMX">
                                                <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                    <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px" }} />
                                                    </span>
                                                    <img alt="Arbitrum" src="https://opensea.io/static/images/logos/solana.svg" decoding="async" data-nimg="intrinsic" class="sc-74cf9f34-0 eGKMda" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                                    <noscript>
                                                    </noscript>
                                                </span>
                                            </div>
                                            <div class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT">Solana</div>
                                        </div>
                                        <Checkbox
                                            {...label}

                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />
                                    </div>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>

                    <div className="col-md-9">
                        <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 tgTCr jSPhMX kKyBpy">
                    <div class="sc-29427738-0 sc-630fc9ab-0 sc-ecfc7326-0 sc-d400cbf1-1 cbPOR jSPhMX dwHBvC cmiZwC fresnel-greaterThanOrEqual-lg">
                        <div width="190px" display="flex" class="sc-29427738-0 sc-87407077-0 kuRVgt">
                            </div>
                            <div width="300px" display="flex" class="sc-29427738-0 sc-87407077-0 gTqShe">
                                <p class="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Item</p>
                                </div>
                                <div width="90px" display="flex" class="sc-29427738-0 sc-87407077-0 kngZAJ">
                                    <p class="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Price</p>
                                    </div>
                                    <div width="75px" display="flex" class="sc-29427738-0 sc-87407077-0 eNEoCR">
                                        <p class="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Quantity</p>
                                        </div>
                                        <div width="125px" display="flex" class="sc-29427738-0 sc-87407077-0 fZTVZV">
                                            <p class="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">From</p>
                                            </div>
                                            <div width="125px" display="flex" class="sc-29427738-0 sc-87407077-0 fZTVZV">
                                                <p class="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">To</p>
                                                </div>
                                                <div width="160px" display="flex" class="sc-29427738-0 sc-87407077-0 eGwnwZ">
                                                    <p class="sc-29427738-0 sc-bdnxRM dVNeWL eimMfF">Time</p>
                                                    </div>
                                                    </div>

                        
                    <div role="list" tabindex="0" style={{position: "relative", width: "100%", maxWidth: "100%", height: "115px", maxHeight: "607px"}}>
                    <div role="listitem" style={{top: "28px", left: "0px", width: "1030px", writingMode: "horizontal-tb", position: "absolute"}}>
                    <div class="sc-29427738-0 sc-4e15afd9-0 dVNeWL kcFcYa">
                        <button role="row" class="sc-b267fe84-0 cRVARX sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 sc-d400cbf1-0 cJOBgF jSPhMX eGZhwM kvvAeD" type="button">
                            <div class="sc-29427738-0 sc-860fab97-2 dVNeWL haJRsS">
                                <div width="190px" display="flex" class="sc-29427738-0 sc-87407077-0 jDGoIW">
                                    <i size="18" value="shopping_cart" class="sc-a143597d-0 Prfel material-icons"><IoCart /></i>
                                    <h6 class="sc-29427738-0 sc-bdnxRM figDpC iPAlIP">Sale</h6>
                                    </div>
                                    <div width="300px" display="flex" class="sc-29427738-0 sc-87407077-0 doNvbE">
                                        <div class="sc-29427738-0 sc-ae1bc31d-0 dVNeWL iXySNU">
                                            <div color="inherit" display="block" class="sc-29427738-0 jOFJRc">
                                                <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                    <div class="sc-45b283d7-0 czNTRz AssetCell--img">
                                                        <div height="100%" width="100%" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 friJpq jSPhMX kKyBpy fYgjHJ cmjqwQ">
                                                            <div class="sc-f087f95e-0 sc-f087f95e-1 gwpnfr gyivza AssetMedia--img" style={{height: "48px", width: "48px"}}>
                                                                <span style={{boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px"}}>
                                                                    <img src="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840" decoding="async" data-nimg="fill" sizes="(max-width: 600px) 200px, 380px" srcset="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=48 48w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=64 64w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=128 128w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=256 256w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=384 384w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=512 512w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=640 640w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=750 750w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=828 828w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=1080 1080w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=1200 1200w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=1920 1920w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=2048 2048w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840 3840w" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain"}}/>
                                                                    <noscript>
                                                                        </noscript>
                                                                        </span>
                                                                        </div>
                                                                        </div>
                                                                        </div>
     <div class="sc-29427738-0 ePCcKz fresnel-greaterThanOrEqual-sm" width="252px">
         <span class="sc-29427738-0 sc-bdnxRM sc-a8df1259-6 brdhhA fQDfDu">
             <div class="sc-fe5f9c83-0 mGAUR" tabindex="-1">
                  <div class="sc-9afeb3b1-0 hwGXqA sc-860fab97-0 iBkeiD">
                      <a class="sc-1f719d57-0 fKAlPV CollectionLink--link CollectionLink--isSmall" href="/collection/rugbuds">
                          <span class="sc-29427738-0 dVNeWL">Rug Buds</span>
                          </a>
                          </div>
                          </div>
                          </span>
                          <span data-testid="activity-table-item-name" font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 erpyI iPAlIP">
                              <a class="sc-1f719d57-0 fKAlPV sc-860fab97-1 cgNqjZ" href="/assets/ethereum/0xbfab01504ab8c6278aaecdbed0903fcd15e740a4/668">
                                  <div class="sc-fe5f9c83-0 iFPiFs" tabindex="-1">Rug Buds #668 </div>
                                  </a>
                                  </span>
                                  </div>
                                  </div>
                                  </div>
    </div>
    </div>
    <div width="90px" display="flex" class="sc-29427738-0 sc-87407077-0 dEEZyh">
       <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 gOkAbJ jSPhMX kKyBpy">
            <div class="sc-29427738-0 gpjbBU">
                <div class="sc-726a600f-0 hAFCSl Price--main">
                    <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                         <div class="sc-fe5f9c83-0 mGAUR Price--amount" tabindex="-1">0.0049 ETH</div>
                         </div>
                        </div>
                        </div>
                        <div class="sc-29427738-0 gpjbBU">
                              <span class="sc-29427738-0 sc-bdnxRM dVNeWL fBfnHR">
                                  <div class="sc-726a600f-0 efaSkm" color="inherit">
                                      <div class="sc-fe5f9c83-0 mGAUR Price--fiat-amount" tabindex="-1">$5.96</div>
                                      </div>
                    </span>
                    </div>
                     </div>
                    </div>
                    <div width="75px" display="flex" class="sc-29427738-0 sc-87407077-0 bvDFrf">
                        <p font-size="[object Object]" font-weight="400" width="100%" color="text.body" class="sc-29427738-0 sc-bdnxRM sc-d400cbf1-3 hoMxeg bCCtkE">
                             <div class="sc-fe5f9c83-0 mGAUR" tabindex="-1">1</div>
                             </p>
                             </div>
                            <div width="125px" display="flex" class="sc-29427738-0 sc-87407077-0 Ralqi">
                                <div class="sc-29427738-0 sc-70a13c31-1 hggeJI ePLwsZ AccountLink--ellipsis-overflow" data-testid="AccountLink" font-weight="400" height="24px">
                                    <a class="sc-1f719d57-0 hoTuIF sc-29427738-0 ikrGyo AccountLink--ellipsis-overflow" font-weight="400" href="/vonny">
                                        <span>vonny</span>
                                        </a>
                                        </div>
                                        </div>
                                        <div width="125px" display="flex" class="sc-29427738-0 sc-87407077-0 Ralqi">
                                            <div class="sc-29427738-0 sc-70a13c31-1 hggeJI ePLwsZ AccountLink--ellipsis-overflow" data-testid="AccountLink" font-weight="400" height="24px">
                                                <a class="sc-1f719d57-0 hoTuIF sc-29427738-0 ikrGyo AccountLink--ellipsis-overflow" font-weight="400" href="/0x2fb957766B7D9B70B924a42a9f2321e840Fa74AE">
                   <span>2FB957</span>
                   </a>
                   </div>
                   </div>
                   <div width="160px" display="flex" class="sc-29427738-0 sc-87407077-0 hPCEIH">
                       <div class="sc-29427738-0 sc-86bdbe0d-0 ikrGyo cKGUXL" data-testid="EventTimestamp" font-weight="400">
                           <a class="sc-1f719d57-0 fKAlPV EventTimestamp--link" href="https://etherscan.io/tx/0x4755b6b4b3faa9c3d478c19e78d56247745ae985bb911870f43ab84a5bb8909b" rel="nofollow noopener" target="_blank" title="Opens in a new window" aria-expanded="false">29 seconds ago <div display="inline-block" class="sc-29427738-0 kBPgGh">
                               <i aria-hidden="true" class="sc-a143597d-0 RovoC EventTimestamp--link-icon material-icons EventTimestamp--link-icon" value="open_in_new" size="24">open_in_new</i>
                               </div>
                               </a>
                               </div>
                               </div>
                               </div>
                               </button>
                               </div>
                               </div>
                    </div>

                    <div role="list" tabindex="0" style={{position: "relative", width: "100%", maxWidth: "100%", height: "115px", maxHeight: "607px"}}>
                    <div role="listitem" style={{top: "28px", left: "0px", width: "1030px", writingMode: "horizontal-tb", position: "absolute"}} className="boxx_shaadow">
                    <div class="sc-29427738-0 sc-4e15afd9-0 dVNeWL kcFcYa">
                        <button role="row" class="sc-b267fe84-0 cRVARX sc-29427738-0 sc-630fc9ab-0 sc-a8df1259-0 sc-d400cbf1-0 cJOBgF jSPhMX eGZhwM kvvAeD" type="button">
                            <div class="sc-29427738-0 sc-860fab97-2 dVNeWL haJRsS">
                                <div width="190px" display="flex" class="sc-29427738-0 sc-87407077-0 jDGoIW">
                                    <i size="18" value="shopping_cart" class="sc-a143597d-0 Prfel material-icons"><IoCart /></i>
                                    <h6 class="sc-29427738-0 sc-bdnxRM figDpC iPAlIP">Sale</h6>
                                    </div>
                                    <div width="300px" display="flex" class="sc-29427738-0 sc-87407077-0 doNvbE">
                                        <div class="sc-29427738-0 sc-ae1bc31d-0 dVNeWL iXySNU">
                                            <div color="inherit" display="block" class="sc-29427738-0 jOFJRc">
                                                <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                                    <div class="sc-45b283d7-0 czNTRz AssetCell--img">
                                                        <div height="100%" width="100%" class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 sc-dada3b88-0 friJpq jSPhMX kKyBpy fYgjHJ cmjqwQ">
                                                            <div class="sc-f087f95e-0 sc-f087f95e-1 gwpnfr gyivza AssetMedia--img" style={{height: "48px", width: "48px"}}>
                                                                <span style={{boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px"}}>
                                                                    <img src="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840" decoding="async" data-nimg="fill" sizes="(max-width: 600px) 200px, 380px" srcset="https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=48 48w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=64 64w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=128 128w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=256 256w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=384 384w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=512 512w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=640 640w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=750 750w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=828 828w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=1080 1080w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=1200 1200w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=1920 1920w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=2048 2048w, https://i.seadn.io/gcs/files/1cbe825bfa4f771907557a5feb373f99.png?auto=format&amp;w=3840 3840w" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain"}}/>
                                                                    <noscript>
                                                                        </noscript>
                                                                        </span>
                                                                        </div>
                                                                        </div>
                                                                        </div>
     <div class="sc-29427738-0 ePCcKz fresnel-greaterThanOrEqual-sm" width="252px">
         <span class="sc-29427738-0 sc-bdnxRM sc-a8df1259-6 brdhhA fQDfDu">
             <div class="sc-fe5f9c83-0 mGAUR" tabindex="-1">
                  <div class="sc-9afeb3b1-0 hwGXqA sc-860fab97-0 iBkeiD">
                      <a class="sc-1f719d57-0 fKAlPV CollectionLink--link CollectionLink--isSmall" href="/collection/rugbuds">
                          <span class="sc-29427738-0 dVNeWL">Rug Buds</span>
                          </a>
                          </div>
                          </div>
                          </span>
                          <span data-testid="activity-table-item-name" font-size="14px" class="sc-29427738-0 sc-bdnxRM sc-a8df1259-2 erpyI iPAlIP">
                              <a class="sc-1f719d57-0 fKAlPV sc-860fab97-1 cgNqjZ" href="/assets/ethereum/0xbfab01504ab8c6278aaecdbed0903fcd15e740a4/668">
                                  <div class="sc-fe5f9c83-0 iFPiFs" tabindex="-1">Rug Buds #668 </div>
                                  </a>
                                  </span>
                                  </div>
                                  </div>
                                  </div>
    </div>
    </div>
    <div width="90px" display="flex" class="sc-29427738-0 sc-87407077-0 dEEZyh">
       <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 gOkAbJ jSPhMX kKyBpy">
            <div class="sc-29427738-0 gpjbBU">
                <div class="sc-726a600f-0 hAFCSl Price--main">
                    <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                         <div class="sc-fe5f9c83-0 mGAUR Price--amount" tabindex="-1">0.0049 ETH</div>
                         </div>
                        </div>
                        </div>
                        <div class="sc-29427738-0 gpjbBU">
                              <span class="sc-29427738-0 sc-bdnxRM dVNeWL fBfnHR">
                                  <div class="sc-726a600f-0 efaSkm" color="inherit">
                                      <div class="sc-fe5f9c83-0 mGAUR Price--fiat-amount" tabindex="-1">$5.96</div>
                                      </div>
                    </span>
                    </div>
                     </div>
                    </div>
                    <div width="75px" display="flex" class="sc-29427738-0 sc-87407077-0 bvDFrf">
                        <p font-size="[object Object]" font-weight="400" width="100%" color="text.body" class="sc-29427738-0 sc-bdnxRM sc-d400cbf1-3 hoMxeg bCCtkE">
                             <div class="sc-fe5f9c83-0 mGAUR" tabindex="-1">1</div>
                             </p>
                             </div>
                            <div width="125px" display="flex" class="sc-29427738-0 sc-87407077-0 Ralqi">
                                <div class="sc-29427738-0 sc-70a13c31-1 hggeJI ePLwsZ AccountLink--ellipsis-overflow" data-testid="AccountLink" font-weight="400" height="24px">
                                    <a class="sc-1f719d57-0 hoTuIF sc-29427738-0 ikrGyo AccountLink--ellipsis-overflow" font-weight="400" href="/vonny">
                                        <span>vonny</span>
                                        </a>
                                        </div>
                                        </div>
                                        <div width="125px" display="flex" class="sc-29427738-0 sc-87407077-0 Ralqi">
                                            <div class="sc-29427738-0 sc-70a13c31-1 hggeJI ePLwsZ AccountLink--ellipsis-overflow" data-testid="AccountLink" font-weight="400" height="24px">
                                                <a class="sc-1f719d57-0 hoTuIF sc-29427738-0 ikrGyo AccountLink--ellipsis-overflow" font-weight="400" href="/0x2fb957766B7D9B70B924a42a9f2321e840Fa74AE">
                   <span>2FB957</span>
                   </a>
                   </div>
                   </div>
                   <div width="160px" display="flex" class="sc-29427738-0 sc-87407077-0 hPCEIH">
                       <div class="sc-29427738-0 sc-86bdbe0d-0 ikrGyo cKGUXL" data-testid="EventTimestamp" font-weight="400">
                           <a class="sc-1f719d57-0 fKAlPV EventTimestamp--link" href="https://etherscan.io/tx/0x4755b6b4b3faa9c3d478c19e78d56247745ae985bb911870f43ab84a5bb8909b" rel="nofollow noopener" target="_blank" title="Opens in a new window" aria-expanded="false">29 seconds ago <div display="inline-block" class="sc-29427738-0 kBPgGh">
                               <i aria-hidden="true" class="sc-a143597d-0 RovoC EventTimestamp--link-icon material-icons EventTimestamp--link-icon" value="open_in_new" size="24">open_in_new</i>
                               </div>
                               </a>
                               </div>
                               </div>
                               </div>
                               </button>
                               </div>
                               </div>
                    </div>
                    </div>

                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity