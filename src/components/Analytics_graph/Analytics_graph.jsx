import React from "react";
import "./Analytics_graph.css";
import Form from "react-bootstrap/Form";
import pfa from "../Assets/pfa.avif";
import pfaa from "../Assets/pfaa.avif";
import pfaaa from "../Assets/pfaaa.avif";
import pfaaaa from "../Assets/pfaaaa.avif";
import pfaaaaa from "../Assets/pfaaaaa.avif";
import pfaaaaaa from "../Assets/pfaaaaaa.avif";
import la from "../Assets/la.avif";
import laa from "../Assets/laa.avif";
import laaa from "../Assets/laaa.avif";
function Analytics_graph() {
  return (
    <div>
      {/* first three boxes of listing sales etc */}
      <div className="row">
        <div className="col-lg-4 ">
          <div className="rrow_upward_Volume px-3 py-1 bbbooxxxx">
            <p className="Volume fs-6">Volume</p>
            <h4 className="">6.8 ETH</h4>
            <p className="rrow_upward  ">+127%</p>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="rrow_upward_Volume px-3 py-1 bbbooxxxx ">
            <p className="Volume fs-6">Sales</p>
            <h4 className="">54</h4>
            <p className="rrow_upward ">+5300%</p>
          </div>
        </div>
        <div className="col-lg-4 ">
          <div className="rrow_upward_Volume px-3 py-1 bbbooxxxx">
            <p className="Volume fs-6">Floor price</p>
            <h4 className="">0.045 ETH</h4>
            <p className="rrow_upward">+127%</p>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6  ">
          <div className=" px-2">
            <div className="row mt-5 justify-content-between ">
              <div className="col-md-6">
                <h6 className="listing_head">Listings</h6>
              </div>
              <div className="col-md-6 ">
                <Form.Select
                  aria-label="Default select example"
                  className="selct_price"
                >
                  <option className="p-3 optios_select">Price</option>
                  <option className="p-3 optios_select" value="2">
                    Date
                  </option>
                </Form.Select>
              </div>
            </div>

            <div className="row mt-3 hr_efft">
              <div className="col-md-1">
                <img src={pfaa} className="w-100 rounded " alt="" />
              </div>
              <div className="col-md-6">
                <div className="pfa_tex">
                  <p>Bony Bro. #6 "You Can ( NOT ) Advance</p>
                  <span className="span_text_pfa">3 days to ago</span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="pfa_tex">
                  <p>0.045 ETH</p>
                  <span className="span_text_pfa">At floor</span>
                </div>
              </div>
            </div>
            <div className="row mt-3 hr_efft">
              <div className="col-md-1">
                <img src={pfa} className="w-100 rounded " alt="" />
              </div>
              <div className="col-md-6">
                <div className="pfa_tex">
                  <p>Bony Bro. #6 "You Can ( NOT ) Advance</p>
                  <span className="span_text_pfa">3 days to ago</span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="pfa_tex">
                  <p>0.045 ETH</p>
                  <span className="span_text_pfa">At floor</span>
                </div>
              </div>
            </div>
            <div className="row mt-3 hr_efft">
              <div className="col-md-1">
                <img src={pfaaa} className="w-100 rounded " alt="" />
              </div>
              <div className="col-md-6">
                <div className="pfa_tex">
                  <p>Bony Bro. #6 "You Can ( NOT ) Advance</p>
                  <span className="span_text_pfa">3 days to ago</span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="pfa_tex">
                  <p>0.045 ETH</p>
                  <span className="span_text_pfa">At floor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6  ">
          <div className="row mt-5">
            <div className="col-md-6">
              <h6 className="listing_head">Sales</h6>
            </div>
          </div>

          <div className="row mt-3 hr_efft">
            <div className="col-md-1">
              <img src={pfaaaaaa} className="w-100 rounded " alt="" />
            </div>
            <div className="col-md-6">
              <div className="pfa_tex">
                <p>Bony Bro. #6 "You Can ( NOT ) Advance</p>
                <span className="span_text_pfa">3 days to ago</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pfa_tex">
                <p>0.045 ETH</p>
                <span className="span_text_pfa">At floor</span>
              </div>
            </div>
          </div>
          <div className="row mt-3 hr_efft">
            <div className="col-md-1">
              <img src={pfaaaaa} className="w-100 rounded " alt="" />
            </div>
            <div className="col-md-6">
              <div className="pfa_tex">
                <p>Bony Bro. #6 "You Can ( NOT ) Advance</p>
                <span className="span_text_pfa">3 days to ago</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pfa_tex">
                <p>0.045 ETH</p>
                <span className="span_text_pfa">At floor</span>
              </div>
            </div>
          </div>
          <div className="row mt-3 hr_efft">
            <div className="col-md-1">
              <img src={pfaa} className="w-100 rounded " alt="" />
            </div>
            <div className="col-md-6">
              <div className="pfa_tex">
                <p>Bony Bro. #6 "You Can ( NOT ) Advance</p>
                <span className="span_text_pfa">3 days to ago</span>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pfa_tex">
                <p>0.045 ETH</p>
                <span className="span_text_pfa">At floor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second progress bar and  owners row starts from here  */}

      <div className="row owner_dis">
        <div className="col-md-6 mt-3">
          <div className="border_rounder bbbooxxxx p-4">
            <div>
              <h3 className="listing_head">Owner Distribution</h3>
              <span className="span_text_pfa">69</span>
            </div>

            <div className="progress_bar_nft mt-3">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold text-dark">77%</h6>
                <h6 className="fw-bold text-dark"> 1 item</h6>
              </div>

              <div className="acutal_progress_bar"></div>
            </div>

            <div className="progress_bar_nft mt-3">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold text-dark">13%</h6>
                <h6 className="fw-bold text-dark"> 2-3 items</h6>
              </div>

              <div className="acutal_progress_bar sec"></div>
            </div>
            <div className="progress_bar_nft mt-3">
              <div className="d-flex justify-content-between">
                <h6 className="fw-bold text-dark">10%</h6>
                <h6 className="fw-bold text-dark"> 4-6 items</h6>
              </div>

              <div className="acutal_progress_bar secc"></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <div className="border_rounder bbbooxxxx p-4">
            <div>
              <h3 className="listing_head">Owner </h3>
              <span className="span_text_pfa">Top 100</span>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <h6>Name</h6>
              </div>

              <div className="col-md-2">Wallet</div>
              <div className="col-md-2">owned</div>
              <div className="col-md-2">%owned</div>
            </div>
            <div className="row mt-4 hvr_efft">
              <div className="col-md-5">
                <div className="d-flex justify-content-start align-items-center ">
                  <h6 className="fs-4 me-3">1</h6>
                  <div className="d-flex justify-content-center align-items-center ">
                    <img src={la} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Maxsaltzman
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <span>0x5b72...536b</span>
              </div>
              <div className="col-md-2">
                <span>174</span>
              </div>
              <div className="col-md-2">65.17% </div>
            </div>
            <div className="row mt-4 hvr_efft">
              <div className="col-md-5">
                <div className="d-flex justify-content-start align-items-center">
                  <h6 className="fs-4 me-3">2</h6>
                  <div className="d-flex justify-content-center align-items-center ">
                    <img src={laa} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Flyinbeard
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <span>0x5b72...536b</span>
              </div>
              <div className="col-md-2">
                <span>174</span>
              </div>
              <div className="col-md-2">65.17% </div>
            </div>
            <div className="row mt-4 hvr_efft">
              <div className="col-md-5">
                <div className="d-flex justify-content-start align-items-center">
                  <h6 className="fs-4 me-3">3</h6>
                  <div className="d-flex justify-content-center align-items-center ">
                    <img src={laaa} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Mac2022
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <span>0x5b72...536b</span>
              </div>
              <div className="col-md-2">
                <span>174</span>
              </div>
              <div className="col-md-2">65.17% </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics_graph;
