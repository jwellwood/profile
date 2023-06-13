import React from 'react';
import Fade from '@mui/material/Fade';
import CustomIcon from 'components/icons/CustomIcon';
import { tech } from './constants';
import CustomIconAvatar from 'components/icons/CustomIconAvatar';
import CustomTooltip from 'components/tooltip/CustomTooltip';
import CustomPaper from 'components/layout/CustomPaper';
import { theme } from 'lib/theme/theme';
import './styles.css';

const TechIcons: React.FC = () => {
  return (
    <CustomPaper color={theme.palette.primary.dark}>
      <div className='wrapper'>
        {tech.map((tech) => (
          <CustomIconAvatar key={tech.name}>
            <CustomTooltip title={tech.name}>
              <Fade in timeout={4000}>
                <div className='icon-wrapper'>
                  <CustomIcon name={tech.icon} size='20px' color={tech.color} />
                </div>
              </Fade>
            </CustomTooltip>
          </CustomIconAvatar>
        ))}
      </div>
    </CustomPaper>
  );
};

export default TechIcons;
