// src/context/ContentContext.tsx

import React, { createContext, useContext, ReactNode } from "react";
import indexData from "../data/index.json"; // Import your JSON data

// Define the type for your content
type ContentType = typeof indexData;

// Create a context with the default value being the imported data
const ContentContext = createContext<ContentType>(indexData);

// Create a provider component
export const ContentProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ContentContext.Provider value={indexData}>
      {children}
    </ContentContext.Provider>
  );
};

// Create a custom hook for easier access
export const useContent = () => {
  return useContext(ContentContext);
};
