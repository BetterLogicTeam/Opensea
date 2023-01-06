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
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Radio } from '@mui/material';
import Profile_collection_tab_mob from '../Profile_collection_tab_mob/Profile_collection_tab_mob';
import Profile_collection_tab_item_data from '../Profile_collection_tab_item_data/Profile_collection_tab_item_data';


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
            <div className="taaabbs">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Profile_collection_tab_item_data />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <Profile_collection_tab_item_data />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    <Profile_collection_tab_item_data />
                    </TabPanel>
                </Box>
            </div>

            
        </div>
    )
}

export default Profile_collection_tab