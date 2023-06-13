import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { LanguageContext } from 'context/LanguageContext';

interface Props {
  link?: string;
  github: string;
  handleClose: () => void;
}

const PortfolioLinks: React.FC<Props> = ({ link, github, handleClose }) => {
  const { language } = useContext(LanguageContext);

  const visit = language === 'en' ? 'Visit' : 'Ir';
  const back = language === 'en' ? 'Back' : 'Volver';

  const buttons = [
    {
      text: visit,
      type: 'contained',
      link: link,
    },
    { text: 'Github', type: 'outlined', link: github },
  ];
  return (
    <React.Fragment>
      {buttons.map((button: any) =>
        button.link ? (
          <Button
            key={button.text}
            variant={button.type}
            target='_blank'
            rel='noopener noreferrer'
            href={button.link}
            color='primary'
            sx={{ margin: '0px 5px' }}
          >
            {button.text}
          </Button>
        ) : null
      )}
      <Button onClick={handleClose} color='primary' autoFocus>
        {back}
      </Button>
    </React.Fragment>
  );
};

export default PortfolioLinks;
