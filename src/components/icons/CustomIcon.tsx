import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaCheck } from "react-icons/fa";
import { AppIcons, LinkIcons } from "../../constants/icon-names";
import { FiExternalLink, FiCopy } from "react-icons/fi";
import "./styles.css";

type Props = {
  name: string;
  size?: string;
  color?: string;
  animate?: boolean;
};

const CustomIcon: React.FC<Props> = ({ name, size = "md", color, animate }) => {
  switch (name) {
    case AppIcons.EMAIL:
      return (
        <MdEmail
          className={animate ? `icon-${size}-animate` : `icon-${size}`}
          color={color}
        />
      );
    case AppIcons.CHECK:
      return (
        <FaCheck
          className={animate ? `icon-${size}-animate` : `icon-${size}`}
          color={color}
        />
      );
    case AppIcons.COPY:
      return (
        <FiCopy
          className={animate ? `icon-${size}-animate` : `icon-${size}`}
          color={color}
        />
      );
    case AppIcons.LINK:
      return (
        <FiExternalLink
          className={animate ? `icon-${size}-animate` : `icon-${size}`}
          color={color}
        />
      );
    case LinkIcons.LINKEDIN:
      return (
        <FaLinkedin
          className={animate ? `icon-${size}-animate` : `icon-${size}`}
          color={color}
        />
      );
    case LinkIcons.GITHUB:
      return (
        <FaGithub
          className={animate ? `icon-${size}-animate` : `icon-${size}`}
          color={color}
        />
      );

    default:
      return <div />;
  }
};

export default CustomIcon;
