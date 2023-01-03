import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function E_acordin_h() {
  return (
    <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Category</Typography>
      </AccordionSummary>
   
       <div className='my-2 position-relative '><SearchIcon className='input_icon'/><input type="text" placeholder='Fiter '  className='input_border py-2 ps-5' /> </div>
      <AccordionDetails>
        <Typography>
            <div className='d-flex justify-content-between'>
<div> Domain Names</div>
<div className=''><Checkbox  {...label} /></div></div>
<div className='d-flex justify-content-between'>
<div> Domain Names</div>
<div className=''><Checkbox  {...label} /></div></div>
            <div className='d-flex justify-content-between'><div> Sports</div>
<div className=''><Checkbox  {...label} /></div>     </div>
            <div className='d-flex justify-content-between'>
<div> Music </div>
<div className=''><Checkbox  {...label} /></div>

            </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
   
     <Accordion className=''>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Currency</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
            <div className='d-flex justify-content-between'>
<div> 

WETH

</div>
<div className=''><Checkbox  {...label} /></div></div>
<div className='d-flex justify-content-between'>
<div> APE</div>
<div className=''><Checkbox  {...label} /></div></div>
            <div className='d-flex justify-content-between'><div> APE</div>
<div className=''><Checkbox  {...label} /></div>     </div>
            <div className='d-flex justify-content-between'>
<div> AVAX </div>
<div className=''><Checkbox  {...label} /></div>

            </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  
  </div>
  )
}

export default E_acordin_h
