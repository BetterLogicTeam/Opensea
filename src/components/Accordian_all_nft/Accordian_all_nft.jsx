import * as React from "react";
import "./Accordian_all_nft.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Radio } from "@mui/material";
import acc1 from "../Assets/acc1.avif";
import Accorden_data from "../Accorden_data/Accorden_data";
import E_acordin_h from "../E_acordin_h/E_acordin_h";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SimpleAccordion() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="acordian_dawer">
      <Accordion disableGutters defaultExpanded className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Status
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="new_main">
              <span className="new_all">Buy Now</span>
              <Checkbox
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">On Auction</span>
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">New</span>
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Has Offers</span>
              <Checkbox
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="px-3">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="d-flex align-items-center justify-content-evenly">
            <div>
              <FormControl sx={{ minWidth: 90 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className="selecter_border "
                >
                  <MenuItem value="" className="menutext">
                    <em className="menutext">USD</em>
                  </MenuItem>
                  <MenuItem className="menutext" value={10}>
                    ETH
                  </MenuItem>
                  <MenuItem className="menutext" value={20}>
                    SOL
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="radius_boreder_text">
              <TextField autoFocus placeholder="Min" className="hello_height" />
            </div>
            <div>
              <p className="fw-bold fs-5 px-1 pt-3">to</p>
            </div>
            <div className="radius_boreder_text">
              <TextField autoFocus placeholder="Max" className="hello_height" />
            </div>
          </Typography>
          <div>
            <button className="btn btn-primary btn-lg w-100 fw-bold pb-2 classs_apply my-3">
              Apply
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters defaultExpanded className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Quantity
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="new_main">
              <span className="new_all">All items</span>
              <Radio
                {...label}
                defaultChecked
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Single items</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Bundles</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters defaultExpanded className="px-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="fs-2" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="fw-bold">
            Collection
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998"  />
        <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998"  />
        <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998"  />
        <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998"  />
        <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998"  />
        <Accorden_data acc1={acc1} crypto="CryptoPunks" num="9,998"  />
          </Typography>
        </AccordionDetails>
      </Accordion>
<E_acordin_h/>
    </div>
  );
}
