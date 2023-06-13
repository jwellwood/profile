import { scroller } from 'react-scroll';

export const scrollToElement = (elem: string) => {
  scroller.scrollTo(elem, {
    duration: 1500,
    delay: 100,
    smooth: true,
  });
};
