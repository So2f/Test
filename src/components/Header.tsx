import React from "react";
import Image from "next/image";
import logo from "../assets/images/valtech.svg"; // Adjust the path if necessary

const Header = () => {
  return (
    <header
      style={{
        padding: 0,
        height: "100px",
        display: "flex",
      }}
    >
      <div
        style={{
          position: "relative", // Relative to ensure the absolute positioning works
          width: "181.44px", // Define the container size
          height: "40.01px", // Define the container size
        }}
      >
        <Image
          src={logo}
          alt="Valtech Logo"
          layout="fill"
          objectFit="contain"
          priority
          style={{
            position: "absolute", // This ensures the logo is positioned inside its parent
            left: "122px", // Position relative to the parent    check if the padding is correct since i saw the logo box wasnt perfect !!!
            top: "31px", // Position relative to the parent
          }}
        />
      </div>
    </header>
  );
};

export default Header;
