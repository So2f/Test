"use client"; //why use client ?

import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import {
  useArticleContent,
  ArticleContentProvider,
} from "@/context/ArticleContentContext";
import { ArrowBack } from "@mui/icons-material";

const DetailPage = () => {
  const articleContent = useArticleContent(); // Access the article data

  if (!articleContent) return <p>Loading...</p>; // Handle loading state

  // Extract relevant content types
  const heroContent = articleContent.content.find(
    (item) => item.type === "HERO_ARTICLE"
  );

  // Find the highlighted paragraph
  const highlightedParagraph = articleContent.content.find(
    (item) => item.type === "PARAGRAPH" && item.highlight
  );

  // Find the regular paragraph (non-highlighted)
  const regularParagraph = articleContent.content.find(
    (item) => item.type === "PARAGRAPH" && !item.highlight
  );

  const carouselContent = articleContent.content.find(
    (item) => item.type === "CAROUSEL"
  );

  const lastParagraph = articleContent.content.filter(
    (item) => item.type === "PARAGRAPH" && !item.highlight
  )[1];

  const img = "https://placehold.co/466x480/D1D3CA/D1D3CA/png";
  return (
    <div className="detail-page">
      <div className="grid-container">
        <div
          style={{
            display: "flex",
            marginTop: "80px",
          }}
        >
          <ArrowBack
            sx={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <p>Back</p>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Image
              src={`${heroContent?.sideAsset?.url}/png`}
              alt="Side Image" //   dont forget to add the correct margin for the back button !!
              width={466}
              height={480}
            />
            <div
              style={{ position: "relative", width: "730px", height: "480px" }}
            >
              <Image
                src={`${heroContent?.backgroundAsset?.url}/png`}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                style={{ zIndex: -1 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%", // Start positioning at the vertical center
                  right: "40px", // Keep text aligned to the left
                  left: "231px", // Position 231px from the left side of the image
                  transform: "translateY(-50%)", // Center the text vertically
                  color: "white",
                  zIndex: 2,
                  textAlign: "right", // Align text to the right within the div
                }}
              >
                <p style={{ margin: 0 }}>{heroContent?.subtitle}</p>
                <h1 style={{ margin: 0 }}>{heroContent?.title}</h1>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ textAlign: "left" }}>
            {heroContent?.publishingDate}
          </span>
          <span style={{ textAlign: "right" }}>
            Author: {heroContent?.author}
          </span>
        </div>

        {highlightedParagraph && (
          <div
            dangerouslySetInnerHTML={{ __html: highlightedParagraph.text }}
          />
        )}

        {regularParagraph && (
          <div
            style={{
              marginLeft: "241px", // Position 241px from the left
              marginRight: "245px", // Position 245px from the right
            }}
            dangerouslySetInnerHTML={{ __html: regularParagraph.text }}
          />
        )}

        {/* <div>Carousel</div>  */}

        {/* Carousel */}
        {carouselContent && <Carousel items={carouselContent.items} />}

        {lastParagraph && (
          <div
            style={{
              margin: "40px 0 0 0", // Add margin to separate it from previous content
              marginLeft: "244px",
              marginRight: "242px",
            }}
            dangerouslySetInnerHTML={{ __html: lastParagraph.text }}
          />
        )}
      </div>
    </div>
  );
};

export default DetailPage;
