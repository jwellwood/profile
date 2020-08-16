import React from 'react';
import Fade from 'react-reveal';
// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
// Internal
import Subheader from '../ui/Subheader';

const PortfolioTech = ({ technologies }) => {
  return (
    <React.Fragment>
      <Subheader>Tech</Subheader>
      <List dense>
        {technologies.map((tech) => (
          <ListItem key={tech}>
            <ListItemText
              primary={
                <Typography component='span' color='primary'>
                  <Fade top cascade duration={1000}>
                    {tech}
                  </Fade>
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default PortfolioTech;
