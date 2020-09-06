import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { button_data } from 'database';
import { LanguageContext } from 'context/LanguageContext';
import { link_styles } from './styles';
import { ILinksList } from 'database/types';

interface Props {
  links: ILinksList;
  handleClose: () => void;
}

interface IButton {
  text: string;
  type: any;
  link?: string;
}

const PortfolioLinks: React.FC<Props> = ({ links, handleClose }) => {
  const classes = link_styles();
  const lang = useContext(LanguageContext);

  const buttons: IButton[] = [
    {
      text: lang.language ? button_data.web.eng : button_data.web.esp,
      type: 'contained',
      link: links.web,
    },
    { text: 'Github', type: 'outlined', link: links.github },
  ];
  return (
    <React.Fragment>
      {buttons.map((button: any) => (
        <Button
          key={button.text}
          variant={button.type}
          target='_blank'
          rel='noopener noreferrer'
          href={button.link}
          color='primary'
          className={classes.button}
        >
          {button.text}
        </Button>
      ))}
      <Button onClick={handleClose} color='primary' autoFocus>
        {lang.language ? button_data.back.eng : button_data.back.esp}
      </Button>
    </React.Fragment>
  );
};

export default PortfolioLinks;
