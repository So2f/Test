// src/app/ContentProviderWrapper.tsx

"use client"; // This marks this component as a Client Component

import React from "react";
import { ContentProvider } from "../context/ContentContext";

export default function ContentProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContentProvider>{children}</ContentProvider>;
}
