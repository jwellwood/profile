import React from "react";
import { Element } from "react-scroll";

import ParticlesBackground from "../lib/particles/ParticlesBackground";
import { SCROLL_NAMES } from "../constants";
import { LanguageProvider } from "../context/LanguageContext";
import { SectionProvider } from "../context/SectionContext";
import Home from "../modules/home/Home";
import GridLayout from "../modules/layout/GridLayout";
import Footer from "../modules/footer/Footer";
import { useScreenSize } from "../hooks/useScreenSize";
import Menu from "../modules/content/menu/Menu";
import Content from "../modules/content/Content";

export default function App() {
  const { home, details, content, footer } = SCROLL_NAMES;
  const { isSmallScreen } = useScreenSize();
  return (
    <LanguageProvider>
      <ParticlesBackground />
      <SectionProvider>
        <Element name={home}>
          <Home />
        </Element>
        {isSmallScreen ? (
          <>
            <Element name={details}>
              <Menu />
            </Element>
            <Element name={content}>
              <Content />
            </Element>
          </>
        ) : (
          <Element name={content}>
            <GridLayout />
          </Element>
        )}
        <Element name={footer}>
          <Footer />
        </Element>
      </SectionProvider>
    </LanguageProvider>
  );
}
