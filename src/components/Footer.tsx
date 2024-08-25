"use client";

import React from "react";
import { useContent } from "../context/ContentContext"; // Importing the content context

const Footer = () => {
  // Accessing the full content data from the ContentContext
  const content = useContent();

  // Extracting the footer data from the root of the content
  const footerContent = content.footer;

  // If no footer content is found, return null
  if (!footerContent) return null;

  const backgroundImageUrl = `https://placehold.co/1440x400/black/black`; //here change it so i use the Image tag instead for performance

  return (
    <footer
      style={{
        width: "1440px", // Explicitly set the width
        height: "400px", // Explicitly set the height           fix ici le pb d'opti si l'ecran ne fait pas exactement 1440
        backgroundImage: `url(${backgroundImageUrl})`, // Use the background image with specific dimensions
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex", // Use Flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        textAlign: "center",
        marginTop: "198px",
      }}
    >
      <p style={{ fontSize: "16px" }}>{footerContent.text}</p>
    </footer>
  );
};

export default Footer;
