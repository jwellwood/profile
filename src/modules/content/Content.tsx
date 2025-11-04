import React, { useContext } from "react";

import { Sections } from "../../constants";
import { SectionContext } from "../../context/SectionContext";
import CustomPaper from "../../components/layout/CustomPaper";
import About from "./about/About";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

export default function Content() {
  const { section } = useContext(SectionContext);

  const renderContent = () => {
    switch (section) {
      case Sections.ABOUT:
        return <About />;
      case Sections.EXPERIENCE:
        return <Experience />;
      case Sections.PROJECTS:
        return <Projects />;
      default:
        break;
    }
  };

  return (
    <CustomPaper type="content">
      <>{renderContent()}</>
    </CustomPaper>
  );
}
