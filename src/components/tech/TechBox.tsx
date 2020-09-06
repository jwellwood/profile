import React, { useContext } from 'react';
import Zoom from 'react-reveal';
import Fade from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// MUI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// Internal
import Subheader from '../ui/Subheader';
import { tech_data } from 'database';
import { LanguageContext } from 'context/LanguageContext';
import { theme } from 'lib/theme/theme';
import background from 'assets/images/backgrounds/background-white.png';

const TechBox: React.FC = () => {
  const language = useContext(LanguageContext);

  return (
    <>
      {tech_data.map((tech) => (
        <Zoom duration={2000} key={tech.title.eng}>
          <Paper
            style={{
              maxWidth: '100%',
              margin: '2rem auto',
              position: 'relative',
              border: '1px solid',
              borderColor: theme.palette.primary.main,
              padding: '20px',
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
            }}
          >
            <div
              style={{
                margin: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {tech.icons.map((icon, i) => (
                <Avatar
                  key={i}
                  style={{
                    margin: '-50px auto',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    color: theme.palette.primary.dark,
                    backgroundColor: '#fff',
                  }}
                >
                  <Fade left cascade duration={4000}>
                    <FontAwesomeIcon
                      icon={icon.name}
                      style={{ color: icon.color }}
                    />
                  </Fade>
                </Avatar>
              ))}
            </div>
            <Subheader>
              {language.language ? tech.title.eng : tech.title.esp}
            </Subheader>
            <Typography style={{ margin: '5px auto' }}>
              {language.language ? tech.text.eng : tech.text.esp}
            </Typography>
          </Paper>
        </Zoom>
      ))}
    </>
  );
};

export default TechBox;
