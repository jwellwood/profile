import { AppIcons, LinkIcons } from "./icon-names";

const LINKS = {
  GITHUB: "https://github.com/jwellwood",
  LINKEDIN: "https://www.linkedin.com/in/joe-wellwood/",
  EMAIL: "joewellwood",
};

export const LINKS_LIST = [
  {
    icon: LinkIcons.LINKEDIN,
    label: "joe-wellwood",
    link: LINKS.LINKEDIN,
  },
  {
    icon: LinkIcons.GITHUB,
    label: "jwellwood",
    link: LINKS.GITHUB,
  },
  {
    icon: AppIcons.EMAIL,
    label: LINKS.EMAIL,
    link: "",
  },
];
