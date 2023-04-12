import React from "react";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import tct2 from "../Assets/tct2.avif";

import "./Upload_part.css";
import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function Upload_part() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      <>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader main_uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
          <div>
            <img src={tct2} className="upload_img" alt="" />
          </div>
        </Upload>
        <div className="px-4 py-4 d-flex justify-content-between align-items-center ">
          {" "}
          <h2 className="collection_main_heading_front">Hamza khan </h2>{" "}
          <MdMoreHoriz className="fs-1"></MdMoreHoriz>
        </div>
        <div className="px-4">
          <button
            aria-label="Goerli logo"
            class="sc-b267fe84-0 sc-c9b6320f-0 cRVARX fVNwlL sc-d94077a8-0 doDONN"
            type="button"
          >
            <svg
              fill="gray"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "20px", height: "20px" }}
            >
              <path
                d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                fill="gray"
              ></path>
            </svg>
          </button>
          <span>0x17fF...50c8</span>
          <span className="ms-2">Joined April 2023</span>
        </div>

    
      </>
    </div>
  );
}
