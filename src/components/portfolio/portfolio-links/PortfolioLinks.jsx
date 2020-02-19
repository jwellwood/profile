import React, { useContext } from 'react';
//MUI
import Button from '@material-ui/core/Button';
// Internal
import { link_styles } from './styles';
import { button_data } from '../../../assets/database';
import { LanguageContext } from '../../../context/LanguageContext';

const PortfolioLinks = ({ links, handleClose }) => {
  const classes = link_styles();
  const lang = useContext(LanguageContext);

  const buttons = [
    {
      text: lang.language ? button_data.web.eng : button_data.web.esp,
      type: 'contained',
      link: links.web
    },
    { text: 'Github', type: 'outlined', link: links.github }
  ];
  return (
    <React.Fragment>
      {buttons.map(button => (
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
