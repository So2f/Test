"use client";

import Banner from "@/components/Banner";
import styles from "./page.module.css";
import ContentProviderWrapper from "./ContentProviderWrapper";
import CardSection from "@/components/CardSection";

export default function Home() {
  return (
    <ContentProviderWrapper>
      <main className={styles.main}>
        <Banner />
        {/* Other sections go here */}
        <CardSection />
      </main>
    </ContentProviderWrapper>
  );
}
