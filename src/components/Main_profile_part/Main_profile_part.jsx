import React from 'react'
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
// import "./Profile_collection_tab.css";
import Button from 'react-bootstrap/Button';
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { ImShare2 } from "react-icons/im";
import { HiDotsHorizontal } from "react-icons/hi";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio } from '@mui/material';
import Profile_collection_tab_mob from '../Profile_collection_tab_mob/Profile_collection_tab_mob';
import Profile_collection_tab_item_data from '../Profile_collection_tab_item_data/Profile_collection_tab_item_data';
// import Drawer_profile_collection from './components/Drawer_profile_collection/Drawer_profile_collection';
import Drawer_proflie_side from "../Drawer_proflie_side/Drawer_proflie_side"
import Profile_nft_activity from "../Profile_nft_activity/Profile_nft_activity"
import Profile_nft_analytics from "../Profile_nft_analytics/Profile_nft_analytics"
import Activity_nft_details from "../Profile_nft_activity/Activity_nft_details";
import "./Main_profile_part.css"
import Profile_side_part from '../Profile_side_part/Profile_side_part';







function TabPanel(props) {
    const { children, value, index, ...other } = props

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


function Main_profile_part() {

    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div>

<div width="100%" className="sc-29427738-0 sc-630fc9ab-0 ctwQVs jSPhMX">
        <div className="sc-a2bbba39-1 pak">
          <img
            sizes="100vw"
            src="https://i.seadn.io/gae/z80nwXsabcTO6LsfjMFu7LNfKEnLwU1nEMeQMwWv3TfWcV1iqIQSHrpuXWwWEsyFZKjT-nexGOUvdY5yfWMUJYInSJQPK5oO7cDf3Q?auto=format&w=3840"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="sc-29427738-0 sc-e1213540-0 dVNeWL katee ktCeqg">
          <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
            <div className="sc-29427738-0 fTiUJh">
              <div
                display="inline-flex"
                className="sc-29427738-0 sc-6d5b054-2 keQErz gzCMxz"
              >
                <button
                  type="button"
                  className="sc-b267fe84-0 sc-6d5b054-1 cRVARX iwPltr"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "absolute",
                      inset: "0px",
                    }}
                  >
                    <img
                      alt="BurnassoPhotography"
                      sizes="168px"
                      srcset="https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=48 48w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=64 64w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=128 128w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=256 256w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=384 384w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=512 512w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=640 640w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=750 750w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=828 828w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=1080 1080w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=1200 1200w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=1920 1920w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=2048 2048w, https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=3840 3840w"
                      src="https://i.seadn.io/gae/V46d1AsW_gC02bKVSv5WBAyZq3EyaW8qL-sx0ml1_3h9-zpWBHn1AC18fB-XVVC7wdMT-q4dsBA7xW0GSHClDC-RFu-fKR8NDMKRYg?auto=format&amp;w=3840"
                      decoding="async"
                      data-nimg="fill"
                      className="sc-6d5b054-0 jhsaBJ"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="sc-29427738-0 caTXlx">
              <div className="fresnel-container fresnel-lessThan-sm "></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="sc-29427738-0 sc-630fc9ab-0 sc-cda59426-0 dVNeWL jSPhMX clKHJV">
          <div className="sc-29427738-0 sc-e1213540-0 dVNeWL ktCeqg">
            <div
              width="100%"
              className="sc-29427738-0 sc-630fc9ab-0 cBQkIJ jSPhMX"
            >
              <div className="sc-29427738-0 iObdpu">
                <div
                  data-testid="phoenix-header"
                  className="sc-29427738-0 sc-630fc9ab-0 sc-5bb7da0c-1 dJYDEb jSPhMX irjhco"
                >
                  <div className="fresnel-container fresnel-lessThan-sm "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                    <h1
                      width="100%"
                      className="sc-29427738-0 sc-bdnxRM dKfiYh iIKkrq"
                    >
                      Hamza Khan 
                    </h1>
                  </div>
                </div>
              </div>
              <div className="sc-29427738-0 caTXlx">
                <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                  <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                    <div className="fresnel-container fresnel-greaterThan-md ">
                      <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                        <div className="sc-29427738-0 sc-630fc9ab-0 sc-35f75ba4-0 dVNeWL jSPhMX eFBUmw">
                          <a
                            className="sc-1f719d57-0 fKAlPV"
                            href="https://www.twitter.com/Burnasso"
                            rel="nofollow noopener"
                            target="_blank"
                          >
                         
                          </a>
                        </div>
                        <div className="sc-29427738-0 sc-35f75ba4-1 dVNeWL hLooXR "></div>
                      </div>
                    </div>
                    <div className="sc-29427738-0 sc-630fc9ab-0 bOAEkR jSPhMX">
                      <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                        <div className="fresnel-container fresnel-greaterThan-md ">
                       
                        </div>
                    
                      </div>
                      <div
                        className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX"
                        aria-expanded="false"
                      >
                        <button
                          aria-label="More dropdown"
                          className="sc-29427738-0  sc-788bb508-0 nFISH bpmNDx sc-9a637e94-1 kSESLX"
                          type="button"
                        >
                          <span className="sc-29427738-0 sc-d58c749b-2 sc-9a637e94-0 ILliQ cWTWPE enUGCb">
                            <i
                              value="more_horiz"
                              size="24"
                              className="sc-a143597d-0 sc-e3c2f05e-1 RovoC irqkfp material-icons"
                              color="black"
                            >
                              <Tooltip title="Add" arrow placement="top">
                                <Button className="toll jaasa"  style={{backgroundColor:"transparent",border:"none"}}>
                                  <HiDotsHorizontal />
                                </Button>
                              </Tooltip>
                            </i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-29427738-0 dVNeWL">
          <div className="sc-29427738-0 sc-e1213540-0 kFtGow bPDgXz">
            <div className="sc-29427738-0 sc-630fc9ab-0 dULEQL jSPhMX">
              <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX">
                <div className="sc-29427738-0 sc-630fc9ab-0 cyfgpf jSPhMX">
                  <div className="fresnel-container fresnel-lessThan-md "></div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-md ">
                
                  </div>
                </div>
                <div className="fresnel-container fresnel-greaterThanOrEqual-sm ">
                  <div className="sc-29427738-0 sc-630fc9ab-0 dJYDEb jSPhMX"></div>
                </div>
              </div>
              <div className="fresnel-container fresnel-lessThan-sm "></div>
            </div>
          </div>
        </div>

      
      <div>
            <div className="taaabbs spc_btm">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Items" {...a11yProps(0)} />
                            <Tab label="Analytics" {...a11yProps(1)} />
                            <Tab label="Activity" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} className="d-block">
                        <div className="d-block d-md-none">
                            <Profile_collection_tab_item_data />
                        <Profile_side_part/>

                        </div>
                        <Drawer_proflie_side />
                        {/* <Profile_side_part/> */}
                    </TabPanel>
                    <TabPanel value={value} index={1} sx={{padding:"0px"}}>
                    <Profile_nft_analytics/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Profile_nft_activity/>
                        <div className='d-block d-md-none'>
                        <Activity_nft_details />
                        </div>
                    </TabPanel>
                </Box>
            </div>
            </div>


        </div>


      
    </div>
  )
}

export default Main_profile_part
