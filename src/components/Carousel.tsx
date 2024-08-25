import React, { useState } from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ position: "relative", width: "1195px", height: "400px" }}>
      {/* Left Arrow */}
      <button
        onClick={handlePrevClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "39px",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: "white", //fix the div dimension here
        }}
      >
        <ArrowBackIcon
          sx={{
            color: "black",
            width: "40px",
            height: "40px",
          }}
        />
      </button>

      {/* Image */}
      <div>
        <Image
          src={`${items[currentIndex].url}/png`}
          alt={items[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: "14px", //fix the size of the div idk padding or margin adding here for no reason
          position: "absolute",
          bottom: "60px",
          right: "120px",
          color: "black",
          zIndex: 2,
          maxWidth: "580px",
          textAlign: "right",
        }}
      >
        <p>{items[currentIndex].description}</p>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNextClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "39px",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: "white",
        }}
      >
        <ArrowForwardIcon
          sx={{
            color: "black",
            width: "40px",
            height: "40px",
          }}
        />
      </button>
    </div>
  );
};

export default Carousel;
