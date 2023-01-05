import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoFilterSharp } from 'react-icons/io5';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdFormatListBulleted } from 'react-icons/md';
import { MdGridOn } from 'react-icons/md';
import { BsGrid1X2 } from 'react-icons/bs';
import { RxViewGrid } from 'react-icons/rx';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Profile_collection_card from '../Profile_collection_card/Profile_collection_card';
import "./Profile_collection_tab.css";



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Profile_collection_tab() {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <div className="taaabbs devnel">
                <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
            </div>

            <div class="sc-29427738-0 graeed sc-630fc9ab-0 sc-3f102755-0 gtDMWH jSPhMX hLGbAz">
                <div height="100%" width="calc(100vw - 17px)" class="sc-29427738-0 sc-3f102755-1 gHZPOh gpxecR">
                    <div class="fresnel-container fresnel-greaterThanOrEqual-lg sc-1242568d-1 dZzJwG">
                        <div display="flex" height="100%" class="sc-29427738-0 sc-e1213540-0 dqOkeF hdXdDy">
                            <div width="100%" class="sc-29427738-0 sc-630fc9ab-0 iCDJqk jSPhMX">
                                <div class="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                                    <div class="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                        <button aria-expanded="true" aria-label="Close" data-testid="filter-toggle" class="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX" type="button">
                                            <span class="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                                                <i color="charcoal" font-weight="600" value="filter_list" size="24" class="sc-a143597d-0 buXgzV material-icons-outlined"><IoFilterSharp /></i></span></button></div></div><div width="100%" class="sc-29427738-0 fUxcOT"><div width="100%" class="sc-29427738-0 sc-bdnxRM gIUWxk jDXFgB"><span class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT"><div class="sc-a3ec9f15-3 bdRjVp"><div class="sc-29427738-0 ePjRuL"><div class="sc-37393a8-0 iFtgSt" aria-expanded="false"><div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 dSVLeh jSPhMX kKyBpy fYgjHJ"><i color="gray" size="24" value="search" class="sc-a143597d-0 iyKxcj material-icons"><HiOutlineSearch /></i></div><input aria-invalid="false" aria-controls="CollectionTraitSearch--results" id="trait-selector-input" placeholder="Search by name or attribute" role="searchbox" value="" style={{cursor: "text"}}/></div></div></div></span></div></div><div width="240px" class="sc-29427738-0 gMYjoS"><span class="sc-29427738-0 sc-bdnxRM sc-a3ec9f15-0 dVNeWL iPAlIP euhRUu"><div class="fresnel-container fresnel-lessThan-lg sc-a3ec9f15-1 fbFfqn"></div><div class="fresnel-container fresnel-greaterThanOrEqual-lg "><div class="fresnel-container fresnel-greaterThanOrEqual-lg ">
                                                <div  cursor="pointer" aria-expanded="false">
                                                {/* <input aria-invalid="false" placeholder="Sort by" readonly="" aria-haspopup="true" value="Price low to high" style={{cursor: "pointer"}}/> */}
                                                <Accordion class="sc-37393a8-0 bfXCzr sc-9a485e76-0 ggtkBP sc-a3ec9f15-2 dVaSwQ">
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
    </Accordion>
                                                {/* <div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 kQKAhB jSPhMX kKyBpy fYgjHJ"> */}
                                                    {/* <i aria-label="Show more" color="gray" cursor="pointer" value="keyboard_arrow_down" size="24" class="sc-a143597d-0 dYnUi material-icons"><IoIosArrowDown /></i> */}
                                                    {/* </div> */}
                                                    </div></div><div class="fresnel-container fresnel-lessThan-lg "></div></div></span></div><div class="sc-29427738-0 kQKAhB"><div class="fresnel-container fresnel-greaterThanOrEqual-md "><div class="sc-29427738-0 sc-630fc9ab-0 sc-a5e21c2d-1 nFISH jSPhMX feIvTb"><button class="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 fGGXeH sc-31a229f7-0 fnSUKO" aria-pressed="false" type="button"><div aria-hidden="true" pointer-events="none" class="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX"><i size="22" value="format_list_bulleted" color="gray" font-weight="400" class="sc-a143597d-0 bGxSOS material-icons-outlined"><MdFormatListBulleted /></i></div></button><button class="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 fGGXeH sc-31a229f7-0 fnSUKO" aria-pressed="false" type="button"><div aria-hidden="true" pointer-events="none" class="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX"><i size="22" value="grid_on" color="gray" font-weight="400" class="sc-a143597d-0 bGxSOS material-icons-outlined"><MdGridOn /></i></div></button><button class="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 oIWTJ sc-31a229f7-0 ipnhla" aria-pressed="true" disabled="" type="button"><div aria-hidden="true" pointer-events="none" class="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX"><i size="22" value="window" color="charcoal" font-weight="400" class="sc-a143597d-0 gechKN material-icons-outlined"><RxViewGrid /></i></div></button><button class="sc-29427738-0 sc-788bb508-0 dULEQL dOsloX sc-a5e21c2d-0 jiZrkm sc-697bd841-0 fGGXeH sc-31a229f7-0 fnSUKO" aria-pressed="false" type="button"><div aria-hidden="true" pointer-events="none" class="sc-29427738-0 sc-630fc9ab-0 ioyAEo jSPhMX"><i size="22" value="auto_awesome_mosaic" color="gray" font-weight="400" class="sc-a143597d-0 bGxSOS material-icons-outlined"><BsGrid1X2 /></i></div></button></div></div></div><div class="sc-29427738-0 kQKAhB"><button width="[object Object]" type="button" class="sc-29427738-0 sc-788bb508-0 hogHsI htkSpH"><span color="inherit" class="sc-29427738-0 sc-bdnxRM cdrsRT ijjDTa">Make collection offer</span></button></div></div></div></div></div></div>
                        

                        {/* <div width="100%" class="sc-29427738-0 sc-630fc9ab-0 bmVYnU jSPhMX"><div width="100%" class="sc-29427738-0 sc-630fc9ab-0 mAckt jSPhMX"><div width="100%" class="sc-29427738-0 sc-bdnxRM gIUWxk jDXFgB"><span class="sc-29427738-0 sc-bdnxRM dVNeWL dtPsHT"><div class="sc-a3ec9f15-3 bdRjVp"><div class="sc-29427738-0 ePjRuL"><div class="sc-37393a8-0 iFtgSt" aria-expanded="false"><div class="sc-29427738-0 sc-630fc9ab-0 sc-99655001-0 sc-4422a702-0 dSVLeh jSPhMX kKyBpy fYgjHJ"><i color="gray" size="24" value="search" class="sc-a143597d-0 iyKxcj material-icons">search</i></div><input aria-invalid="false" aria-controls="CollectionTraitSearch--results" id="trait-selector-input" placeholder="Search by name or attribute" role="searchbox" value="" style={{cursor: "text"}}/></div></div></div></span></div></div><div width="100%" class="sc-29427738-0 sc-630fc9ab-0 sc-1242568d-0 iCDJqk jSPhMX gkQzPL"><div width="50%" class="sc-29427738-0 sc-630fc9ab-0 hQjOHU jSPhMX"><button aria-expanded="true" aria-label="Open" class="sc-29427738-0 sc-788bb508-0 dZDA-Dt bpmNDx sc-e120eff9-1 hQaBbF fresnel-lessThan-lg" data-testid="filter-toggle" width="100%" type="button"><span class="sc-29427738-0 sc-bdnxRM sc-e120eff9-0 dVNeWL eimMfF jNMSxT"><div class="sc-29427738-0 sc-630fc9ab-0 dSVLeh jSPhMX"><i color="charcoal" font-weight="600" value="filter_list" size="24" class="sc-a143597d-0 buXgzV material-icons-outlined">filter_list</i></div>Filters</span></button><div class="fresnel-container fresnel-greaterThanOrEqual-lg "></div></div><div width="50%" class="sc-29427738-0 sc-630fc9ab-0 hQjOHU jSPhMX"><span class="sc-29427738-0 sc-bdnxRM sc-a3ec9f15-0 dVNeWL iPAlIP euhRUu"><div class="fresnel-container fresnel-lessThan-lg sc-a3ec9f15-1 fbFfqn"><div class="fresnel-container fresnel-greaterThanOrEqual-lg "></div><div class="fresnel-container fresnel-lessThan-lg "><button width="100%" class="sc-29427738-0 sc-788bb508-0 kqzAEQ bpmNDx sc-e120eff9-1 hQaBbF" type="button"><span class="sc-29427738-0 sc-bdnxRM sc-e120eff9-0 dVNeWL eimMfF jNMSxT"><div display="flex" class="sc-29427738-0 eSNKWK"><i size="24" value="swap_vert" class="sc-a143597d-0 RovoC material-icons">swap_vert</i></div>Sort</span></button><aside class="sc-29427738-0 sc-3c846907-4 jlTGtR koRTDj sc-396e786d-0 gxBbjZ" data-testid="asset-search-sort-dropdown-drawer" width="420px"><div class="sc-29427738-0 sc-630fc9ab-0 juPEis jSPhMX"><header height="48px" class="sc-29427738-0 sc-630fc9ab-0 ZFXHj jSPhMX"><span class="sc-29427738-0 sc-bdnxRM dVNeWL jIknSg">Sort by</span><div class="sc-29427738-0 sc-630fc9ab-0 cRaIbN jSPhMX"><button class="sc-29427738-0 sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX" type="button"><span class="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb"><i size="24" value="close" class="sc-a143597d-0 RovoC material-icons">close</i></span></button></div></header><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Recently listed<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="LISTING_DATE-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Recently created<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="CREATED_DATE-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Recently sold<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="LAST_SALE_DATE-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Recently received<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="LAST_TRANSFER_DATE-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Ending soon<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="EXPIRATION_DATE-true"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Price low to high<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="UNIT_PRICE-true" checked=""/><span class="sc-65b505b8-2 dreSlm"></span></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Price high to low<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="UNIT_PRICE-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Highest last sale<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="LAST_SALE_PRICE-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Most viewed<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="VIEWER_COUNT-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Most favorited<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="FAVORITE_COUNT-false"/></span></div></label><label color="#04111D" name="search-sort-dropdown" class="sc-29427738-0 sc-bdnxRM sc-51326c6d-0 TiEbo dtPsHT eSSfFH">Oldest<div class="sc-29427738-0 sc-630fc9ab-0 caTXlx jSPhMX"><span class="sc-65b505b8-3 EjtkH" type="radio"><input type="radio" class="sc-65b505b8-1 dNgari" value="CREATED_DATE-true"/></span></div></label></div><div class="sc-29427738-0 sc-630fc9ab-0 sc-396e786d-1 dVNeWL jSPhMX jCvenA"><button width="100%" type="button" class="sc-29427738-0 sc-788bb508-0 dmkxUA bBXuZv">Done</button></div></aside></div></div><div class="fresnel-container fresnel-greaterThanOrEqual-lg "></div></span></div></div><div width="100%" class="sc-29427738-0 jQbOLB"><button width="[object Object]" type="button" class="sc-29427738-0 sc-788bb508-0 hogHsI htkSpH"><span color="inherit" class="sc-29427738-0 sc-bdnxRM cdrsRT ijjDTa">Make collection offer</span></button></div></div> */}

                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-4 accor_main">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item className="accur_item" eventKey="0">
                                <Accordion.Header><div className="event_header">Event Type</div></Accordion.Header>
                                <Accordion.Body>
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
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item className="accur_item" eventKey="1">
                                <Accordion.Header><div className="event_header">Collections</div></Accordion.Header>
                                <Accordion.Body>

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

                                    {/* <Activity_prop url="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=48 1x, https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64 2x" src="https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&amp;w=64" title="CryptoPunks" />

                                    <Activity_prop url="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=48 1x, https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&amp;w=64 2x" title="Bored Ape" />

                                    <Activity_prop url="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=48 1x, https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&amp;w=64 2x" title="Otherdeed" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/9617c138dee52ff098742ce9e25f5d8a.png?auto=format&amp;w=64 2x" title="Mutant" />

                                    <Activity_prop url="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64" decoding="async" data-nimg="intrinsic" srcset="https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=48 1x, https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&amp;w=64 2x" title="Savage" /> */}

                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item className="accur_item" eventKey="2">
                                <Accordion.Header><div className="event_header">Chains</div></Accordion.Header>
                                <Accordion.Body>
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

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                </div>

                <div className="col-lg-3">
                    <Profile_collection_card />
                </div>

                <div className="col-lg-3">
                    <Profile_collection_card />
                </div>
            </div>
                </div>
    </div>
  )
}

export default Profile_collection_tab