import React from 'react';
import {
  MdOutlineEmail,
  MdLanguage,
  MdArrowUpward,
  MdPerson,
  MdStorage,
  MdGridView,
  MdOutlinePeopleAlt,
  MdAccountCircle,
  MdOutlineLightbulb,
  MdDevices,
} from 'react-icons/md';
import {
  FaLinkedin,
  FaGithub,
  FaSass,
  FaAngular,
  FaReact,
  FaHtml5,
  FaTabletAlt,
  FaLaptop,
  FaMobileAlt,
  FaJs,
  FaNetworkWired,
  FaCopy,
  FaCheck,
} from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import {
  SiMongodb,
  SiTypescript,
  SiTestinglibrary,
  SiCypress,
  SiFirebase,
} from 'react-icons/si';
import { BsGraphUpArrow } from 'react-icons/bs';
import { AppIcons, LinkIcons, TechIcons } from 'constants/icon-names';
type Props = {
  name: string;
  size?: string;
  color?: string;
};

const CustomIcon: React.FC<Props> = ({ name, size, color }) => {
  switch (name) {
    case AppIcons.EMAIL:
      return (
        <MdOutlineEmail color={color} style={{ height: size, width: size }} />
      );
    case AppIcons.LANGUAGE:
      return <MdLanguage style={{ height: size, width: size }} color={color} />;
    case AppIcons.ARROW_UP:
      return (
        <MdArrowUpward style={{ height: size, width: size }} color={color} />
      );
    case AppIcons.CHECK:
      return <FaCheck style={{ height: size, width: size }} color={color} />;
    case AppIcons.COPY:
      return <FaCopy style={{ height: size, width: size }} color={color} />;
    case AppIcons.USER:
      return <MdPerson style={{ height: size, width: size }} color={color} />;
    case AppIcons.TECH:
      return <MdStorage style={{ height: size, width: size }} color={color} />;
    case AppIcons.PROJECTS:
      return <MdGridView style={{ height: size, width: size }} color={color} />;
    case AppIcons.DESKTOP:
      return <FaLaptop style={{ height: size, width: size }} color={color} />;
    case AppIcons.TABLET:
      return (
        <FaTabletAlt style={{ height: size, width: size }} color={color} />
      );
    case AppIcons.MOBILE:
      return (
        <FaMobileAlt style={{ height: size, width: size }} color={color} />
      );
    case AppIcons.DEVICES:
      return <MdDevices style={{ height: size, width: size }} color={color} />;
    case AppIcons.EXPERIENCE:
      return (
        <BsGraphUpArrow style={{ height: size, width: size }} color={color} />
      );
    case LinkIcons.LINKEDIN:
      return <FaLinkedin style={{ height: size, width: size }} color={color} />;
    case LinkIcons.GITHUB:
      return <FaGithub style={{ height: size, width: size }} color={color} />;
    case TechIcons.HTML:
      return <FaHtml5 style={{ height: size, width: size }} color={color} />;
    case TechIcons.SASS:
      return <FaSass style={{ height: size, width: size }} color={color} />;
    case TechIcons.REACT:
      return <FaReact style={{ height: size, width: size }} color={color} />;
    case TechIcons.ANGULAR:
      return <FaAngular style={{ height: size, width: size }} color={color} />;
    case TechIcons.JS:
      return <FaJs style={{ height: size, width: size }} color={color} />;
    case TechIcons.TS:
      return (
        <SiTypescript style={{ height: size, width: size }} color={color} />
      );
    case TechIcons.TESTING_LIB:
      return (
        <SiTestinglibrary style={{ height: size, width: size }} color={color} />
      );
    case TechIcons.MONGO_DB:
      return <SiMongodb style={{ height: size, width: size }} color={color} />;
    case TechIcons.GRAPH_QL:
      return <GrGraphQl style={{ height: size, width: size }} color={color} />;
    case TechIcons.CYPRESS:
      return <SiCypress style={{ height: size, width: size }} color={color} />;
    case TechIcons.FIREBASE:
      return <SiFirebase style={{ height: size, width: size }} color={color} />;
    case AppIcons.NETWORK:
      return (
        <FaNetworkWired style={{ height: size, width: size }} color={color} />
      );
    case AppIcons.USERS:
      return (
        <MdOutlinePeopleAlt
          style={{ height: size, width: size }}
          color={color}
        />
      );
    case AppIcons.PERSON:
      return (
        <MdAccountCircle style={{ height: size, width: size }} color={color} />
      );
    case AppIcons.SKILLS:
      return (
        <MdOutlineLightbulb
          style={{ height: size, width: size }}
          color={color}
        />
      );

    default:
      return <div />;
  }
};

export default CustomIcon;
