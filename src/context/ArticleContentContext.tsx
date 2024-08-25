import React, { createContext, useContext, ReactNode } from "react";
import articleData from "../data/article.json"; // Import your article.json data

// Define the type for your content
type ArticleContentType = typeof articleData;

// Create a context with the default value being the imported data
const ArticleContentContext = createContext<ArticleContentType>(articleData);

// Create a provider component
export const ArticleContentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ArticleContentContext.Provider value={articleData}>
      {children}
    </ArticleContentContext.Provider>
  );
};

// Create a custom hook for easier access
export const useArticleContent = () => {
  return useContext(ArticleContentContext);
};
