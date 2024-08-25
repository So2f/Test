import React from "react";
import Image from "next/image";
import { useContent } from "../context/ContentContext";

const Banner = () => {
  // Access the content data from the ContentContext
  const { content } = useContent();

  // Find the HERO section in the content array
  const heroContent = content.find((section) => section.type === "HERO");

  // If no HERO content is found, return null
  if (!heroContent) return null;

  return (
    <section
      style={{
        position: "relative",
        marginTop: "80px", // Margin starts from the top of the combined asset
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // border: "2px solid red",
      }}
    >
      {/* Container for both background and foreground assets */}
      <div
        style={{
          position: "relative",
          width: "1196px", // Width of the larger background asset
          height: "570px", // Height of the larger foreground asset (taller)
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1196px",
            height: "480px",
            transform: "translate(-50%, -50%)", // Center the background image
            backgroundImage: `url(${heroContent.backgroundAsset?.url || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text Content */}
          <div
            style={{
              position: "absolute",
              bottom: "20px", // Position 20px from the bottom of the background asset
              right: "40px", // Position 40px from the right of the background asset
              textAlign: "right", // Align text to the right
              color: "white", // Ensure the text is visible
            }}
          >
            <h1 style={{ fontSize: "36px", margin: "0", color: "#171717" }}>
              {heroContent.title}
            </h1>
            <p style={{ fontSize: "20px", margin: "5px 0", color: "#171717" }}>
              {heroContent.subtitle}
            </p>
            <p style={{ fontSize: "16px", margin: "5px 0", color: "#171717" }}>
              {heroContent.description}
            </p>
          </div>
        </div>

        {/* Foreground Image */}
        {heroContent.foregroundAsset?.url && (
          <div
            style={{
              position: "absolute",
              height: "560px", //added that to fix the height issue of the img
              top: "50%", // Vertically center the foreground asset
              left: "121px", // Position it 121px from the left edge
              transform: "translateY(-50%)", // Adjust only for vertical centering
            }}
          >
            <Image
              src={`${heroContent.foregroundAsset?.url}/png`}
              alt={heroContent.foregroundAsset.alt || "Foreground image"}
              width={345}
              height={560} //fix the issue here because the img should be 560 but in the json it calls a 570 img
              layout="intrinsic"
              objectFit="contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
