import React from "react";

import SectionContainer from "../../components/layout/SectionContainer";
import Navbar from "../../components/navbar/Navbar";
import IntroText from "./IntroText";
import SectionButtons from "./SectionButtons";

export default function Home() {
  return (
    <SectionContainer>
      <Navbar />
      <div>
        <IntroText />
      </div>
      <SectionButtons />
    </SectionContainer>
  );
}
