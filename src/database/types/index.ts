import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface IText {
  eng: string;
  esp: string;
}

export interface ILinks {
  email: string;
  github: string;
  linkedin: string;
}

interface IScreenshotData {
  image: string;
  caption: string;
}

export interface ILinksList {
  web?: string;
  github?: string;
}

export interface ITechIcon {
  name: IconName;
  color: string;
}

export interface IProjectData {
  title: IText;
  cover_image: string;
  icon: string;
  description: IText;
  screenshots: IScreenshotData[];
  tech_list: string[];
  links: ILinksList;
}
