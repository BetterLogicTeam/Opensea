import React from "react";
import "./Open_sale.css";
import Form from "react-bootstrap/Form";

function Open_sale() {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <div className="sale_list py-3">
              <h1 className="sale_title">List for sale</h1>

              <div className="price_form mt-5">
                <h4 className="choos">Choose a type of sale</h4>
                <div className="fix_pric border mt-5 d-flex align-items-center justify-content-between px-4 py-4 ">
                  <div className="iner_fix text-start">
                    <h4 className="fw-bold">Fixed Price</h4>
                    <h5 className="text-muted ">
                      The item is listed at the price you set.
                    </h5>
                  </div>
                  <>
                    <div class="form-check">
                      <input
                        class="form-check-input fs-3"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </>
                </div>
                <div className="fix_pric border mt-4 d-flex align-items-center justify-content-between px-4 py-4 ">
                  <div className="iner_fix text-start">
                    <h4 className="fw-bold">Timed auction</h4>
                    <h5 className="text-muted ">
                      The item is listed for auction.
                    </h5>
                  </div>
                  <>
                    <div class="form-check">
                      <input
                        class="form-check-input fs-3"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                  </>
                </div>
              </div>

              <div className="set_price mt-5">
                <h3 className="fw-bold">Set a price</h3>
                <div className="amoun_wrt mt-5 border d-flex justify-content-between py-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Amount"
                    className="amount_prt ps-3"
                  />
                  <button className="btn token_opt px-3">ETH</button>
                </div>
              </div>

              <div className="set_price mt-5">
                <h3 className="fw-bold">Duration</h3>
                <div>
                  <input type="date" className="mt-4 py-4 time_ops w-100 px-2"/>
                </div>
              </div>

              <div className="summary" style={{marginTop:'7rem'}}>
                <h2 className="fw-bold">Summary</h2>
                <div className="detail_summary mt-3">
                  <div className="listing_price">
                    <div className="list d-flex justify-content-between">
                      <p className="fs-3">Listing price</p>
                      <p className="fs-3">NaN ETH</p>
                    </div>
                    <div className="list d-flex justify-content-between">
                      <p className="fs-3">Creator earnings</p>
                      <p className="fs-3">0%</p>
                    </div>
                  </div>

                  <hr />

                  <div className="listing_price mt-3">
                    <div className="list d-flex justify-content-between">
                      <p className="fs-3">Service fee</p>
                      <p className="fs-3">2.5%</p>
                    </div>
                    <div className="list d-flex justify-content-between">
                      <p className="fs-3 fw-bold">Total potential earnings</p>
                      <div>
                      <p className="fs-3 fw-bold mb-0">0 ETH</p>
                      <p className="fs-5 ">$0.00 USD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="nft_display_uprtrr">
            <div className="nft_imgg_part w-100">
              <img
                src="matrix-g60851ade4_1920.jpg"
                alt="#"
                className="nft_core"
              />
              <div className="nft_details mt-4 px-4 ">
                <h5 className="nft_count">First NFT</h5>
                <p className="nft_colection">Untitled Collection #20939589</p>
                <p className="coin">--ETH</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Open_sale;
