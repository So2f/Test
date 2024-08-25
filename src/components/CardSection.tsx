import React from "react";
import Link from "next/link";
import "../app/globals.css";
import { useContent } from "../context/ContentContext"; // Importing the content context
import { Button } from "@mui/material";

const CardSection = () => {
  // Accessing the content data from the ContentContext
  const { content } = useContent();

  // Finding the CARD_GRID section in the content array
  const cardGridContent = content.find(
    (section) => section.type === "CARD_GRID"
  );

  // If no CARD_GRID content is found, return null
  if (!cardGridContent) return null;

  return (
    <section
      style={{
        paddingRight: "122px",
        paddingLeft: "122px",
        marginTop: "120px",
      }}
    >
      <div>
        <h2
          style={{
            fontSize: "32px",
          }}
        >
          {cardGridContent.title}
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {cardGridContent.cards?.map((card, index) => {
            const width = index === 0 || index === 5 ? 588 : 284;
            const height = 479;

            // Construct the image URL with the specified dimensions
            const backgroundImageUrl = `https://placehold.co/${width}x${height}/D1D3CA/D1D3CA`;

            return (
              <div
                className="card"
                key={index}
                style={{
                  flex: `0 0 ${width}px`,
                  height: `${height}px`,
                  boxSizing: "border-box",
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  textAlign: "center",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  className="card-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    border: "2px solid black",
                  }}
                >
                  {/* First div: title and subtitle */}
                  <div className="title-subtitle">
                    <p
                      style={{
                        fontSize: "24px",
                        color: "black",
                        marginBottom: "20px",
                      }}
                    >
                      {card.subtitle}
                    </p>
                    <p
                      style={{
                        fontSize: "24px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {card.title}
                    </p>
                  </div>
                  {/* Second div: description, hidden initially */}
                  <div
                    className="description-container"
                    style={{
                      overflow: "hidden",
                      //   marginTop: "10px", //a modifier uniquement quand c'esy hover sinon ca le rajoute meme si c;'est hidden
                    }}
                  >
                    <p
                      className="card-description"
                      style={{
                        fontSize: "14px", //fix le padding ajoiter de je ne sais ou !! et bug qui centre sur le hover aussi a fix
                        color: "black",
                        maxWidth: "225px", //change ici le maxwidth pour les grosses cards
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                  <div
                    className="button-container"
                    style={{
                      overflow: "hidden",
                      //   marginTop: "10px",   //change here too only when the button appear
                    }}
                  >
                    <Link href="/details">
                      <Button
                        disableRipple
                        disableElevation
                        variant="contained"
                        sx={{
                          width: "225px",
                          height: "58px",
                          borderRadius: "0",
                          bgcolor: "#F3F2EF",
                          fontSize: "14px",
                          fontFamily: "unset", //change the fontFamily here and everywhere else
                          "&:hover": { bgcolor: "#FF5959" },
                          color: "black",
                        }}
                      >
                        Explore More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
