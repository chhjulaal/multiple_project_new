import React, { useContext, useState, useRef, useEffect } from "react";
import { bgImg } from "./ontexData";
import "./Background.css";
import { FaCog, FaRandom, FaUpload } from "react-icons/fa";

function Background() {
  const { images, bgImage, setBgImage } = useContext(bgImg);
  const [file, setFile] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const imgRefs = useRef([]);

  // Handle uploaded image
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFile(selectedFile);
      setBgImage(imageUrl);
      clearSelectedBorder(); // remove border if custom file is selected
      setSelectedIndex(null);
    }
  };

  // Handle clicking on an image
  const handelImg = (index) => {
    setBgImage(images[index]);

    if (selectedIndex !== null && imgRefs.current[selectedIndex]) {
      imgRefs.current[selectedIndex].style.border = "none";
    }

    if (imgRefs.current[index]) {
      imgRefs.current[index].style.border = "2px solid red";
    }

    setSelectedIndex(index);
  };

  // Handle random image selection
  const handelRandomImg = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBgImage(images[randomIndex]);

    if (selectedIndex !== null && imgRefs.current[selectedIndex]) {
      imgRefs.current[selectedIndex].style.border = "none";
    }

    if (imgRefs.current[randomIndex]) {
      imgRefs.current[randomIndex].style.border = "2px solid red";
    }

    setSelectedIndex(randomIndex);
  };

  // Clear border manually (for file upload)
  const clearSelectedBorder = () => {
    if (selectedIndex !== null && imgRefs.current[selectedIndex]) {
      imgRefs.current[selectedIndex].style.border = "none";
    }
  };

  return (
    <div>
      <div className="grid-container">
        {/* Random Background */}
        <div
          className="box"
          style={{
            background: "#1717174d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(61, 58, 58, 0.3)",
            cursor: "pointer",
          }}
          onClick={handelRandomImg}
        >
          <FaRandom size={30} />
          <span>Random Background</span>
        </div>

        {/* Image Thumbnails */}
        {images.map((item, index) => (
          <div
            className="box"
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            onClick={() => handelImg(index)}
            style={{ cursor: "pointer" }}
          >
            <img style={{ width: "100%" }} src={item} alt={`bg-${index}`} />
          </div>
        ))}

        {/* File Upload */}
        <div
          className="box"
          style={{
            background: "#1717174d",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(61, 58, 58, 0.3)",
          }}
        >
          <label className="file-upload" style={{ cursor: "pointer" }}>
            <FaUpload className="upload-icon" />
            <input type="file" className="file-input" onChange={handleChange} />
          </label>

          {file && (
            <p style={{ fontSize: "11px", margin: "3px 0px 0px 0px" }}>
              Selected file: {file.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Background;
